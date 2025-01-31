"use client";

import { useState, useRef, useEffect } from "react";
import { Mic, MicOff, Send, Bot, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function AIPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        role: "assistant",
        content:
          "This is a simulated AI response. Replace with actual AI integration.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      const chunks: BlobPart[] = [];
      mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(chunks, { type: "audio/webm" });
        // Here you would typically send the audio to your speech-to-text service
        // For now, we'll just add a placeholder message
        const newMessage: Message = {
          role: "user",
          content: "🎤 Voice message",
          timestamp: new Date(),
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
              <div className="flex items-start gap-3">
                {message.role === "assistant" && (
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-emerald-500/10">
                      <Bot className="w-4 h-4 text-emerald-500" />
                    </AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={cn(
                    "px-4 py-3 rounded-lg",
                    message.role === "assistant"
                      ? "bg-zinc-800/50 text-white"
                      : "bg-emerald-500/10 text-emerald-500"
                  )}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  <span className="text-[10px] text-zinc-500 mt-1 block">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex flex-col items-start max-w-[85%]">
              <span className="text-xs text-zinc-500 mb-1 px-1">
                AI Assistant
              </span>
              <div className="flex items-start gap-3">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-emerald-500/10">
                    <Bot className="w-4 h-4 text-emerald-500" />
                  </AvatarFallback>
                </Avatar>
                <div className="px-4 py-3 bg-zinc-800/50 rounded-lg">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-emerald-500/50 rounded-full animate-pulse" />
                    <div className="w-1.5 h-1.5 bg-emerald-500/50 rounded-full animate-pulse delay-150" />
                    <div className="w-1.5 h-1.5 bg-emerald-500/50 rounded-full animate-pulse delay-300" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Chat Input */}
      <div className="p-4 bg-zinc-900/50 backdrop-blur-sm border-t border-zinc-800">
        <div className="relative max-w-3xl mx-auto">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="min-h-[52px] max-h-32 bg-zinc-800/50 border-zinc-700/50 rounded-lg resize-none pr-24 py-3 text-sm"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
          />
          <div className="absolute bottom-2 right-2 flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "h-8 w-8 rounded-lg",
                isRecording
                  ? "text-red-500 animate-pulse bg-red-500/10"
                  : "text-zinc-400 hover:text-emerald-500 hover:bg-emerald-500/10"
              )}
              onClick={isRecording ? stopRecording : startRecording}
            >
              {isRecording ? (
                <MicOff className="w-4 h-4" />
              ) : (
                <Mic className="w-4 h-4" />
              )}
            </Button>
            <Button
              size="icon"
              className="h-8 w-8 rounded-lg bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20"
              onClick={handleSend}
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
