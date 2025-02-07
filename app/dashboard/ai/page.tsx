"use client";

import { useState, useRef, useEffect } from "react";
import { Mic, MicOff, Send, Bot, Loader2, PlayCircle, PauseCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface WaveformData {
  url: string;
  peaks: number[];
}

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  audio?: {
    url: string;
    duration: string;
    waveform?: number[];
  };
}

export default function AIPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [playingAudio, setPlayingAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const recordingStartTime = useRef<Date | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setIsLoading(true);

    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      console.log("Token found:", storedToken);
    } else {
      console.log("Token not found.");
    }

    try {
      const response = await fetch("http://localhost:5000/api/schedule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${storedToken}`,
        },
        body: JSON.stringify({ input, userId: storedToken }),
      });

      const data = await response.json(); // Await the response.json()
      console.log("AI response:", data);

      if (!response.ok) {
        const storedToken = localStorage.getItem('token');
console.log("Stored token:", storedToken);
      }

      const aiResponse: Message = {
        role: "assistant",
        content: data.message, 
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiResponse]);
    } catch (error: any) {
      const aiResponse: Message = {
        role: "assistant",
        content: `Error: ${error.message}`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }

    setIsLoading(false);
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      recordingStartTime.current = new Date();

      const chunks: BlobPart[] = [];
      mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(chunks, { type: "audio/webm" });
        const audioUrl = URL.createObjectURL(audioBlob);
        const waveform = await generateWaveform(audioBlob);

        const endTime = new Date();
        const duration = recordingStartTime.current
          ? (endTime.getTime() - recordingStartTime.current.getTime()) / 1000
          : 0;

        const newMessage: Message = {
          role: "user",
          content: "Voice message",
          timestamp: new Date(),
          audio: {
            url: audioUrl,
            duration: formatDuration(duration),
            waveform,
          },
        };
        setMessages((prev) => [...prev, newMessage]);
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (err) {
      console.error("Error accessing microphone:", err);
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setIsRecording(false);
  };

  const handlePlayAudio = (audioUrl: string) => {
    if (playingAudio) {
      playingAudio.pause();
      playingAudio.currentTime = 0;
      setIsPlaying(false);
    }

    const audio = new Audio(audioUrl);
    audio.onended = () => {
      setIsPlaying(false);
      setPlayingAudio(null);
    };
    audio.play();
    setPlayingAudio(audio);
    setIsPlaying(true);
  };

  const handlePauseAudio = () => {
    playingAudio?.pause();
    setIsPlaying(false);
    setPlayingAudio(null);
  };

  const generateWaveform = async (audioBlob: Blob): Promise<number[]> => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const arrayBuffer = await audioBlob.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    const rawData = audioBuffer.getChannelData(0);
    const samples = 40;
    const blockSize = Math.floor(rawData.length / samples);
    const peaks = [];

    for (let i = 0; i < samples; i++) {
      const start = blockSize * i;
      let max = 0;
      for (let j = 0; j < blockSize; j++) {
        const abs = Math.abs(rawData[start + j]);
        if (abs > max) max = abs;
      }
      peaks.push(max);
    }

    return peaks;
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 sm:p-6 border-b border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-semibold text-white flex items-center gap-2">
            <Bot className="w-6 h-6 text-emerald-500" />
            AI Assistant
          </h1>
          <p className="text-sm text-zinc-400 mt-1">
            Chat with your AI assistant using text or voice
          </p>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 bg-[#111111]">
        <div className="max-w-3xl mx-auto space-y-6">
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col max-w-[85%]",
                message.role === "assistant"
                  ? "items-start"
                  : "items-end ml-auto"
              )}
            >
              {/* Sender Label */}
              <span className="text-xs text-zinc-500 mb-1 px-1">
                {message.role === "assistant" ? "AI Assistant" : "You"}
              </span>

              {/* Message Content */}
              <div
                className={cn(
                  "px-4 py-3 rounded-lg",
                  message.role === "assistant"
                    ? "bg-zinc-800/50 text-white"
                    : "bg-emerald-500/10 text-emerald-500"
                )}
              >
                {message.audio ? (
                  // Voice Message
                  <div className="flex items-center gap-3">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full bg-emerald-500/10 text-emerald-500 flex-shrink-0"
                      onClick={() =>
                        isPlaying
                          ? handlePauseAudio()
                          : handlePlayAudio(message.audio!.url)
                      }
                    >
                      {isPlaying ? (
                        <PauseCircle className="w-5 h-5" />
                      ) : (
                        <PlayCircle className="w-5 h-5" />
                      )}
                    </Button>
                    <div className="flex flex-col w-full min-w-[160px]">
                      <span className="text-xs text-zinc-400">
                        {message.audio.duration}
                      </span>
                      <div className="flex gap-[2px] h-8 items-center">
                        {message.audio.waveform?.map((peak, i) => (
                          <div
                            key={i}
                            className="w-1 bg-emerald-500/40 rounded-full"
                            style={{
                              height: `${Math.max(peak * 100, 20)}%`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  // Text Message
                  <p className="text-sm leading-relaxed">{message.content}</p>
                )}
                <span className="text-[10px] text-zinc-500 mt-1 block">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex flex-col items-start max-w-[85%]">
              <span className="text-xs text-zinc-500 mb-1 px-1">AI Assistant</span>
              <div className="px-4 py-3 bg-zinc-800/50 rounded-lg text-white">
                <Loader2 className="animate-spin text-white w-6 h-6" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 sm:p-6 border-t border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto flex gap-3">
          <Textarea
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your task here..."
            className="resize-none flex-1"
          />
          <Button
            variant="primary"
            onClick={handleSend}
            disabled={isLoading}
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
