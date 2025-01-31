"use client";

import { useState, useRef } from "react";
import { ArrowLeft, Mic, MicOff, Send } from "lucide-react";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function NewTaskPage() {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState<Blob | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  // Get current hour to show appropriate greeting
  const hour = new Date().getHours();
  const greeting =
    hour < 12
      ? "🌅 Good morning"
      : hour < 18
      ? "☀️ Good afternoon"
      : "🌙 Good evening";

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      const chunks: BlobPart[] = [];
      mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/webm" });
        setRecordedAudio(blob);
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
    <div className="p-4 sm:p-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link
            href="/dashboard/tasks"
            className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              New Task
            </h1>
            <p className="text-zinc-400 mt-1">
              {greeting}, what's on your mind?
            </p>
          </div>
        </div>

        {/* Task Form */}
        <div className="space-y-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            {/* Task Description */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-zinc-400 mb-2">
                  Task Description
                </label>
                <div className="relative">
                  <Textarea
                    placeholder="Describe your task..."
                    className="min-h-[120px] bg-zinc-800 border-zinc-700 resize-none"
                  />
                  <div className="absolute bottom-3 right-3 flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className={`rounded-full ${
                        isRecording
                          ? "text-red-500 animate-pulse"
                          : "text-zinc-400"
                      }`}
                      onClick={isRecording ? stopRecording : startRecording}
                    >
                      {isRecording ? (
                        <MicOff className="w-4 h-4" />
                      ) : (
                        <Mic className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>
                {recordedAudio && (
                  <div className="mt-2">
                    <audio controls className="w-full">
                      <source
                        src={URL.createObjectURL(recordedAudio)}
                        type="audio/webm"
                      />
                    </audio>
                  </div>
                )}
              </div>

              {/* Task Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">
                    Priority
                  </label>
                  <Select defaultValue="medium">
                    <SelectTrigger className="w-full bg-zinc-800 border-zinc-700">
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-900 border-zinc-800">
                      <SelectItem value="high">🔴 High Priority</SelectItem>
                      <SelectItem value="medium">🟡 Medium Priority</SelectItem>
                      <SelectItem value="low">🟢 Low Priority</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm text-zinc-400 mb-2">
                    Due Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3">
            <Link href="/dashboard/tasks">
              <Button
                variant="outline"
                className="bg-zinc-800 border-zinc-700 hover:bg-zinc-700"
              >
                Cancel
              </Button>
            </Link>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Send className="w-4 h-4 mr-2" />
              Create Task
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
