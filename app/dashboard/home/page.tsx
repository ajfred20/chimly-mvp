"use client";

import { Check, Circle } from "lucide-react";
import { useState } from "react";

interface Task {
  id: string;
  title: string;
  time: string;
  completed: boolean;
}

interface TimeSlot {
  title: string;
  tasks: Task[];
}

export default function HomePage() {
  const [timeSlots] = useState<TimeSlot[]>([
    {
      title: "Morning",
      tasks: [
        { id: "1", title: "Design Chimly UI", time: "8am", completed: true },
        {
          id: "2",
          title: "Client Meeting Prep with Alex by 5pm",
          time: "9AM - 10AM",
          completed: true,
        },
        {
          id: "3",
          title: "Backend Architecture Meeting",
          time: "11am - 12am",
          completed: false,
        },
      ],
    },
    {
      title: "Afternoon",
      tasks: [
        { id: "4", title: "Design Chimly UI", time: "8am", completed: true },
        {
          id: "5",
          title: "Client Meeting Prep with Alex by 5pm",
          time: "9AM - 10AM",
          completed: true,
        },
        {
          id: "6",
          title: "Backend Architecture Meeting",
          time: "11am - 12am",
          completed: false,
        },
      ],
    },
    {
      title: "Evening",
      tasks: [
        { id: "7", title: "Design Chimly UI", time: "8am", completed: true },
        {
          id: "8",
          title: "Client Meeting Prep with Alex by 5pm",
          time: "9AM - 10AM",
          completed: true,
        },
        {
          id: "9",
          title: "Backend Architecture Meeting",
          time: "11am - 12am",
          completed: false,
        },
      ],
    },
  ]);

  const totalTasks = timeSlots.reduce(
    (acc, slot) => acc + slot.tasks.length,
    0
  );

  return (
    <div className="p-8 font-satoshi">
      <h1 className="text-3xl font-medium text-white mb-2">
        Good evening Daniel
      </h1>
      <p className="text-gray-400 mb-8">
        Here's what's on your plate today, You have {totalTasks} tasks today
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {timeSlots.map((slot) => (
          <div key={slot.title}>
            <h2 className="text-white mb-4">{slot.title}</h2>
            <div className="space-y-4">
              {slot.tasks.map((task) => (
                <div key={task.id} className="flex items-start gap-3">
                  {task.completed ? (
                    <Check className="w-5 h-5 text-gray-500 mt-0.5" />
                  ) : (
                    <Circle className="w-5 h-5 text-gray-500 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <p
                      className={`text-sm ${
                        task.completed
                          ? "line-through text-gray-500"
                          : "text-white"
                      }`}
                    >
                      {task.title}
                    </p>
                    <span className="text-xs text-gray-500">{task.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <div className="mb-6">
          <h3 className="text-white mb-4">In progress</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Circle className="w-5 h-5 text-gray-500" />
              <p className="text-sm text-white">Design Chimly UI</p>
            </div>
            <div className="flex items-center gap-3">
              <Circle className="w-5 h-5 text-gray-500" />
              <p className="text-sm text-white">
                Client Meeting Prep with Alex
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Circle className="w-5 h-5 text-gray-500" />
              <p className="text-sm text-white">Backend Architecture Meeting</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-white mb-4">Completed</h3>
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-gray-500" />
                <p className="text-sm text-gray-500 line-through">
                  Design Chimly UI
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
