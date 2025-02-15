"use client";

import { Bot, Send, Plus, Calendar, Clock, Target, Brain, Sparkles, Loader2, LucideIcon } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ThinkingStep {
  icon: LucideIcon;
  text: string;
}

interface Message {
  role: "user" | "assistant";
  content: string | ThinkingStep[];
  timestamp: Date;
  thinking?: boolean;
  id?: string;
}

export default function AIPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestionChips = [
    { icon: Plus, text: "Create a new task for today" },
    { icon: Calendar, text: "Schedule my meetings for the week" },
    { icon: Clock, text: "Set a reminder for tomorrow" },
    { icon: Target, text: "Track my project progress" },
  ];

  // Load messages from localStorage on mount
  useEffect(() => {
    const savedMessages = localStorage.getItem("aiConversation");
    if (savedMessages) {
      try {
        const parsedMessages = JSON.parse(savedMessages, (key, value) => {
          if (key === "timestamp" && value) {
            return new Date(value);
          }
          return value;
        });
        
        const messagesWithIds = parsedMessages.map((msg: Message) => ({
          ...msg,
          id: msg.id || Date.now().toString() + Math.random().toString(36).substr(2, 9),
        }));
        
        setMessages(messagesWithIds);
      } catch (error) {
        console.error("Error loading messages:", error);
        localStorage.removeItem("aiConversation");
      }
    }
  }, []);

  useEffect(() => {
    try {
      const serializedMessages = JSON.stringify(messages, (key, value) => {
        if (value instanceof Date) {
          return value.toISOString();
        }
        return value;
      });
      localStorage.setItem("aiConversation", serializedMessages);
    } catch (error) {
      console.error("Error saving messages:", error);
    }
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: message,
      timestamp: new Date(),
      id: Date.now().toString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setIsLoading(true);

    const thinkingMessage: Message = {
      role: "assistant",
      content: [
        { icon: Brain, text: "Understanding your request..." },
        { icon: Loader2, text: "Processing task details" },
        { icon: Sparkles, text: "Generating response" }
      ],
      timestamp: new Date(),
      thinking: true,
      id: (Date.now() + 1).toString(),
    };

    setMessages((prev) => [...prev, thinkingMessage]);

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

      const data = await response.json();
      
      setMessages((prev) => {
        const filtered = prev.filter(msg => !msg.thinking);
        return [...filtered, {
          role: "assistant",
          content: data.message,
          timestamp: new Date(),
          id: Date.now().toString(),
        }];
      });
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => {
        const filtered = prev.filter(msg => !msg.thinking);
        return [...filtered, {
          role: "assistant",
          content: "Sorry, I'm having trouble connecting right now. Please try again later.",
          timestamp: new Date(),
          id: Date.now().toString(),
        }];
      });
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
    <div className="h-screen flex flex-col bg-black overflow-hidden">
      {/* Header */}
      <div className="flex-none p-4 md:p-6 border-b border-zinc-800/50">
        <div className="flex items-center gap-3 md:gap-4 max-w-[1200px] mx-auto">
          <div className="p-2 md:p-3 bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 rounded-lg md:rounded-xl">
            <Bot className="w-5 h-5 md:w-6 md:h-6 text-emerald-500" />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
              Chimly
            </h1>
            <p className="text-xs md:text-sm text-zinc-400 mt-0.5 md:mt-1">
              Chat with Chimly to manage your tasks and schedule efficiently
            </p>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="flex-1 min-h-0 overflow-y-auto px-3 md:px-4 scroll-smooth">
        <div className="max-w-[1200px] mx-auto flex flex-col justify-end min-h-full">
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full gap-4 md:gap-6 text-center px-2 md:px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 w-full max-w-4xl">
                <div className="p-3 md:p-4 rounded-lg border border-zinc-800 bg-zinc-900/50">
                  <div className="p-1.5 md:p-2 bg-emerald-500/10 w-fit rounded-lg mb-2 md:mb-3">
                    <Plus className="w-4 h-4 md:w-5 md:h-5 text-emerald-500" />
                  </div>
                  <h3 className="text-sm md:text-base font-medium text-white mb-1">Task Management</h3>
                  <p className="text-xs md:text-sm text-zinc-400">Create, update, and track your daily tasks efficiently</p>
                </div>
                <div className="p-3 md:p-4 rounded-lg border border-zinc-800 bg-zinc-900/50">
                  <div className="p-1.5 md:p-2 bg-emerald-500/10 w-fit rounded-lg mb-2 md:mb-3">
                    <Bot className="w-4 h-4 md:w-5 md:h-5 text-emerald-500" />
                  </div>
                  <h3 className="text-sm md:text-base font-medium text-white mb-1">Schedule Planning</h3>
                  <p className="text-xs md:text-sm text-zinc-400">Get help organizing your calendar and managing your time effectively</p>
                </div>
                <div className="p-3 md:p-4 rounded-lg border border-zinc-800 bg-zinc-900/50 sm:col-span-2 lg:col-span-1">
                  <div className="p-1.5 md:p-2 bg-emerald-500/10 w-fit rounded-lg mb-2 md:mb-3">
                    <Bot className="w-4 h-4 md:w-5 md:h-5 text-emerald-500" />
                  </div>
                  <h3 className="text-sm md:text-base font-medium text-white mb-1">Productivity Insights</h3>
                  <p className="text-xs md:text-sm text-zinc-400">Discover patterns and get recommendations to improve your workflow</p>
                </div>
              </div>
            </div>
          )}
          <div className="space-y-3 pb-4">
            {messages.map((msg) => (
              <div
                key={msg.id || `temp-${Date.now()}`}
                className={cn(
                  "flex flex-col max-w-[90%] sm:max-w-[85%] group",
                  msg.role === "assistant" ? "items-start" : "items-end ml-auto"
                )}
              >
                <div className="flex items-center gap-2 mb-1 md:mb-1.5 px-1">
                  {msg.role === "assistant" ? (
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <div className="p-0.5 md:p-1 bg-emerald-500/10 rounded-md">
                        <Bot className="w-2.5 h-2.5 md:w-3 md:h-3 text-emerald-500" />
                      </div>
                      <span className="text-[10px] md:text-xs font-medium text-emerald-500">Chimly</span>
                    </div>
                  ) : (
                    <span className="text-[10px] md:text-xs font-medium text-blue-400">You</span>
                  )}
                  <span className="text-[8px] md:text-[10px] text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    {msg.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
                <div
                  className={cn(
                    "px-3 py-2 rounded-lg",
                    msg.role === "assistant"
                      ? msg.thinking
                        ? "bg-zinc-900/90 border border-emerald-500/20"
                        : "bg-zinc-900 text-white"
                      : "bg-[#1e2c32] text-white"
                  )}
                >
                  {msg.thinking ? (
                    <div className="space-y-2 md:space-y-3">
                      {Array.isArray(msg.content) && msg.content.map((item: ThinkingStep, i: number) => (
                        <div key={i} className="flex items-center gap-2 md:gap-3 text-xs md:text-sm">
                          <div className={cn(
                            "p-1 md:p-1.5 rounded-md",
                            i === 0 ? "bg-emerald-500/20 text-emerald-400" :
                            i === 1 ? "bg-purple-500/20 text-purple-400" :
                            "bg-blue-500/20 text-blue-400"
                          )}>
                            <item.icon className={cn(
                              "w-3 h-3 md:w-4 md:h-4",
                              i === 1 && "animate-spin"
                            )} />
                          </div>
                          <span className={cn(
                            "font-medium",
                            i === 0 ? "text-emerald-400" :
                            i === 1 ? "text-purple-400" :
                            "text-blue-400"
                          )}>
                            {item.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className={cn(
                      "text-xs md:text-sm leading-relaxed",
                      msg.role === "assistant" ? "text-zinc-100" : "text-blue-50"
                    )}>
                      {typeof msg.content === 'string' ? msg.content : ''}
                    </p>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>

      {/* Input Area with Suggestion Chips */}
      <div className="flex-none p-4 border-t border-zinc-800/50 bg-black">
        <div className="flex flex-col gap-3 max-w-[1200px] mx-auto">
          {message.trim() === "" && (
            <div className="flex flex-wrap gap-2">
              {suggestionChips.map((chip, index) => (
                <button
                  key={index}
                  onClick={() => setMessage(chip.text)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-sm transition-colors"
                >
                  <chip.icon className="w-4 h-4 text-emerald-500" />
                  {chip.text}
                </button>
              ))}
            </div>
          )}
          
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type your task or select a suggestion..."
                className="w-full bg-zinc-900 text-white rounded-lg pl-4 pr-12 py-3 focus:outline-none focus:ring-1 focus:ring-emerald-500/20"
              />
            </div>
            <button
              className="p-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleSend}
              disabled={isLoading || !message.trim()}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
