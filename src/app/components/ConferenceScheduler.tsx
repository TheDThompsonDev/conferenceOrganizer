"use client";

import React, { useState } from "react";
import { Talk, TimeSlot } from "../types/scheduler";
import TalkCard from "./TalksCard";
import TimeSlotCard from "./TimeSlotCard";
import { CalendarIcon } from "./Icons";

const ConferenceScheduler = () => {
  const [talks, setTalks] = useState<Talk[]>([
    {
      id: "talk1",
      title: "Future of TypeScript",
      speaker: "Sarah Johnson",
      duration: 25,
      track: "JavaScript",
      slotId: "",
    },
    {
      id: "talk2",
      title: "React Performance Tips",
      speaker: "Mike Chen",
      duration: 25,
      track: "Java",
      slotId: "",
    },
    {
      id: "talk3",
      title: "Building Scalable Systems",
      speaker: "Alex Kumar",
      duration: 25,
      track: "Cloud",
      slotId: "",
    },
    {
      id: "talk4",
      title: "talk4",
      speaker: "talk4",
      duration: 25,
      track: ".Net",
      slotId: "",
    },
    {
      id: "talk5",
      title: "talk5",
      speaker: "talk5",
      duration: 25,
      track: "JavaScript",
      slotId: "",
    },
    {
      id: "talk6",
      title: "talk6",
      speaker: "talk6",
      duration: 25,
      track: "Java",
      slotId: "",
    },
    {
      id: "talk7",
      title: "talk7",
      speaker: "talk7",
      duration: 25,
      track: "Cloud",
      slotId: "",
    },
    {
      id: "talk8",
      title: "talk8",
      speaker: "talk8",
      duration: 25,
      track: ".Net",
      slotId: "",
    },
    {
      id: "talk9",
      title: "talk9",
      speaker: "talk9",
      duration: 25,
      track: "JavaScript",
      slotId: "",
    },
    {
      id: "talk10",
      title: "talk10",
      speaker: "talk10",
      duration: 25,
      track: "Java",
      slotId: "",
    },
    {
      id: "talk11",
      title: "talk11",
      speaker: "talk11",
      duration: 25,
      track: "Cloud",
      slotId: "",
    },
    {
      id: "talk12",
      title: "talk12",
      speaker: "talk12",
      duration: 25,
      track: ".Net",
      slotId: "",
    },
    {
      id: "talk111",
      title: "Future of TypeScript",
      speaker: "Sarah Johnson",
      duration: 25,
      track: "JavaScript",
      slotId: "",
    },
    {
      id: "talk211",
      title: "React Performance Tips",
      speaker: "Mike Chen",
      duration: 25,
      track: "Java",
      slotId: "",
    },
    {
      id: "talk311",
      title: "Building Scalable Systems",
      speaker: "Alex Kumar",
      duration: 25,
      track: "Cloud",
      slotId: "",
    },
    {
      id: "talk411",
      title: "talk4",
      speaker: "talk4",
      duration: 25,
      track: ".Net",
      slotId: "",
    },
    {
      id: "talk511",
      title: "talk5",
      speaker: "talk5",
      duration: 25,
      track: "JavaScript",
      slotId: "",
    },
    {
      id: "talk611",
      title: "talk6",
      speaker: "talk6",
      duration: 25,
      track: "Java",
      slotId: "",
    },
    {
      id: "talk711",
      title: "talk7",
      speaker: "talk7",
      duration: 25,
      track: "Cloud",
      slotId: "",
    },
    {
      id: "talk811",
      title: "talk8",
      speaker: "talk8",
      duration: 25,
      track: ".Net",
      slotId: "",
    },
    {
      id: "talk911",
      title: "talk9",
      speaker: "talk9",
      duration: 25,
      track: "JavaScript",
      slotId: "",
    },
    {
      id: "talk1011",
      title: "talk10",
      speaker: "talk10",
      duration: 25,
      track: "Java",
      slotId: "",
    },
    {
      id: "talk1111",
      title: "talk11",
      speaker: "talk11",
      duration: 25,
      track: "Cloud",
      slotId: "",
    },
    {
      id: "talk1211",
      title: "talk12",
      speaker: "talk12",
      duration: 25,
      track: ".Net",
      slotId: "",
    },
    {
      id: "break1",
      title: "break",
      speaker: "break",
      duration: 10,
      track: "any",
      slotId: "",
    },
    {
      id: "break11",
      title: "break",
      speaker: "break",
      duration: 10,
      track: "any",
      slotId: "",
    },
    {
      id: "break111",
      title: "break",
      speaker: "break",
      duration: 10,
      track: "any",
      slotId: "",
    },
    {
      id: "break1111",
      title: "break",
      speaker: "break",
      duration: 10,
      track: "any",
      slotId: "",
    },
    {
      id: "break2",
      title: "break",
      speaker: "break",
      duration: 10,
      track: "any",
      slotId: "",
    },
    {
      id: "break22",
      title: "break",
      speaker: "break",
      duration: 10,
      track: "any",
      slotId: "",
    },
    {
      id: "break222",
      title: "break",
      speaker: "break",
      duration: 10,
      track: "any",
      slotId: "",
    },
    {
      id: "break2222",
      title: "break",
      speaker: "break",
      duration: 10,
      track: "any",
      slotId: "",
    },
    {
      id: "break22222",
      title: "break",
      speaker: "break",
      duration: 10,
      track: "any",
      slotId: "",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const generateTimeSlots = () => {
    const days = ["2025-09-25", "2025-09-26", "2025-09-27"];
    const startTime = 9;
    const endTime = 17;
    const slots: TimeSlot[] = [];

    days.forEach((day) => {
      for (let hour = startTime; hour < endTime; hour++) {
        slots.push({
          id: `${day}-${hour}`,
          time: `${hour}:00`,
          day: day,
          talkIds: [],
          remainingMinutes: 60,
        });
      }
    });
    return slots;
  };
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>(generateTimeSlots());
  const [draggedTalkId, setDraggedTalkId] = useState<string | null>(null);

  const handleDragStart = (talkId: string) => {
    setDraggedTalkId(talkId);
  };

  const handleDrop = (slotId: string) => {
    if (!draggedTalkId) return;

    const draggedTalk = talks.find((talk) => talk.id === draggedTalkId);
    if (!draggedTalk) return;

    const newTimeSlots = timeSlots.map((slot) => {
      // Remove talk from previous slot if it exists
      if (slot.talkIds.includes(draggedTalkId)) {
        return {
          ...slot,
          talkIds: slot.talkIds.filter((id) => id !== draggedTalkId),
          remainingMinutes: slot.remainingMinutes + draggedTalk.duration,
        };
      }
      // Add talk to new slot if there's enough time
      if (slot.id === slotId && slot.remainingMinutes >= draggedTalk.duration) {
        return {
          ...slot,
          talkIds: [...slot.talkIds, draggedTalkId],
          remainingMinutes: slot.remainingMinutes - draggedTalk.duration,
        };
      }
      return slot;
    });

    setTimeSlots(newTimeSlots);
    setDraggedTalkId(null);
  };

  const getUnscheduledTalks = () => {
    return talks.filter(
      (talk) => !timeSlots.some((slot) => slot.talkIds.includes(talk.id))
    );
  };
  const getDaySchedule = (day: string) => {
    return timeSlots.filter((slot) => slot.day === day);
  };

  const addNewTalk = () => {
    setIsModalOpen(true);
  };

  const handleAddTalk = (talkData: Omit<Talk, "id" | "slotId">) => {
    const newTalk: Talk = {
      id: `talk${talks.length + 1}`,
      ...talkData,
      slotId: "",
    };
    setTalks([...talks, newTalk]);
  };

  // Add this outside the main ConferenceScheduler component
  const AddTalkModal = ({
    onClose,
    onSubmit,
  }: {
    onClose: () => void;
    onSubmit: (talkData: Omit<Talk, "id" | "slotId">) => void;
  }) => {
    const [formData, setFormData] = useState({
      title: "",
      speaker: "",
      duration: 30,
      track: "Main Stage",
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit(formData);
      onClose();
    };

    return (
      <div className="fixed inset-0 bg-red-500 bg-opacity-50 flex items-center justify-center ">
        <div className="bg-white p-6 rounded-lg w-96">
          <h2 className="text-xl font-bold mb-4">Add New Talk</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Speaker</label>
              <input
                type="text"
                value={formData.speaker}
                onChange={(e) =>
                  setFormData({ ...formData, speaker: e.target.value })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 ">Duration (minutes)</label>
              <input
                type="number"
                value={formData.duration}
                onChange={(e) =>
                  setFormData({ ...formData, duration: Number(e.target.value) })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Track</label>
              <select
                value={formData.track}
                onChange={(e) =>
                  setFormData({ ...formData, track: e.target.value })
                }
                className="w-full p-2 border rounded"
              >
                <option>Main Stage</option>
                <option>Technical</option>
                <option>Architecture</option>
              </select>
            </div>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Add Talk
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <h1 style={{ marginBottom: "1.5rem" }}>Conference Schedule Organizer</h1>

      <div className="scheduler-layout">
        <div className="sidebar">
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Unscheduled Talks</h2>
            </div>
            <div className="card-content">
              <div className="card-header">
                <button
                  onClick={addNewTalk}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                  Add Talk
                </button>
                {isModalOpen && (
                  <AddTalkModal
                    onClose={() => setIsModalOpen(false)}
                    onSubmit={handleAddTalk}
                  />
                )}
              </div>
              {getUnscheduledTalks().map((talk) => (
                <TalkCard
                  key={talk.id}
                  talk={talk}
                  onDragStart={handleDragStart}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="schedule-grid flex flex-row gap-4">
          {["2025-09-25", "2025-09-26", "2025-09-27"].map((day) => (
            <div
              key={day}
              className="schedule-day card bg-white shadow-lg rounded-lg border border-blue-100 flex-1"
            >
              <div className="card-header bg-blue-600 p-4 rounded-t-lg">
                <div className="day-header flex items-center gap-2">
                  <CalendarIcon />
                  <h2 className="card-title text-white font-semibold">
                    {new Date(day).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </h2>
                </div>
              </div>
              <div className="card-content">
                {getDaySchedule(day).map((slot) => (
                  <TimeSlotCard
                    key={slot.id}
                    slot={slot}
                    talks={talks}
                    onDrop={handleDrop}
                    onDragStart={handleDragStart}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ConferenceScheduler;
