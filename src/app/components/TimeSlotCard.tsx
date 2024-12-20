import { TimeSlot, Talk } from "../types/scheduler";
import TalkCard from "./TalksCard";

interface TimeSlotCardProps {
  slot: TimeSlot;
  talks: Talk[];
  onDrop: (slotId: string) => void;
  onDragStart: (talkId: string) => void;
}

const TimeSlotCard = ({
  slot,
  talks,
  onDrop,
  onDragStart,
}: TimeSlotCardProps) => {
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.currentTarget.classList.add("drag-over");
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.currentTarget.classList.remove("drag-over");
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.currentTarget.classList.remove("drag-over");
    onDrop(slot.id);
  };

  return (
    <div
      className="time-slot p-4 mb-2 bg-blue-500 rounded-lg hover:bg-blue-100 transition-colors border border-blue-200"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="time-label">{slot.time}</div>
      {slot.talkIds.map((talkId) => {
        const talk = talks.find((t) => t.id === talkId);
        return (
          talk && (
            <TalkCard key={talk.id} talk={talk} onDragStart={onDragStart} />
          )
        );
      })}
      <div className="time-label text-blue-800 font-medium">
        {slot.remainingMinutes} minutes available
      </div>
    </div>
  );
};
export default TimeSlotCard;
