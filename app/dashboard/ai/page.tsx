"use client";

import { Bot, Send } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function AIPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!message.trim()) return;

    const newMessage: Message = {
      role: "user",
      content: message,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setMessage("");
    setIsLoading(true);

    try {
      const token = localStorage.getItem("userId");

      const response = await fetch(
        "https://chimlybackendmain.onrender.com/api/schedule",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            input: message,
            userId: token,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("API Error Details:", errorData);
        throw new Error(`API error: ${response.status}`);
      }

      // Update the response handling in handleSend
      const data = await response.json();
      console.log(data);
      if (data.message) {
        // Changed from data.response to data.message
        const aiResponse: Message = {
          role: "assistant",
          content: data.message, // Changed from data.input to data.message
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, aiResponse]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: Message = {
        role: "assistant",
        content:
          "Sorry, I'm having trouble connecting right now. Please try again later.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="md:h-[calc(100vh-2rem)] h-screen flex flex-col bg-black overflow-hidden overflow-y-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-emerald-500/10 rounded-lg">
          <Bot className="w-5 h-5 text-emerald-500" />
        </div>
        <div>
          <h1 className="text-xl font-semibold text-white">Chimly</h1>

          <p className="text-sm text-zinc-400">Chat with your AI powered task manager</p>
        </div>
      </div>

      {/* Chat Container */}
      <div className="flex-1 overflow-y-auto px-4">
        <div className="max-w-[1200px] mx-auto space-y-4 pb-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col max-w-[85%]",
                msg.role === "assistant" ? "items-start" : "items-end ml-auto"
              )}
            >
              <span className="text-xs text-zinc-500 mb-1 px-1">
                {msg.role === "assistant" ? "Chimly" : "You"}
              </span>
              <div
                className={cn(
                  "px-4 py-3 rounded-lg",
                  msg.role === "assistant"
                    ? "bg-zinc-800/50 text-white"
                    : "bg-emerald-500/10 text-emerald-500"
                )}
              >
                <p className="text-sm leading-relaxed whitespace-pre-wrap">
                  {msg.content}
                </p>
                <span className="text-[10px] text-zinc-500 mt-1 block">
                  {msg.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex flex-col items-start max-w-[85%]">
              <span className="text-xs text-zinc-500 mb-1 px-1">
                AI Assistant
              </span>
              <div className="px-4 py-3 bg-zinc-800/50 rounded-lg">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-emerald-500/50 rounded-full animate-pulse" />
                  <div className="w-1.5 h-1.5 bg-emerald-500/50 rounded-full animate-pulse delay-150" />
                  <div className="w-1.5 h-1.5 bg-emerald-500/50 rounded-full animate-pulse delay-300" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-zinc-800 bg-black">
        <div className="flex gap-2 max-w-[1200px] mx-auto">
          <div className="flex-1 relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type a message..."
              className="w-full bg-zinc-800/50 text-white rounded-lg pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
            />
          </div>
          <button
            className="p-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
            onClick={handleSend}
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
