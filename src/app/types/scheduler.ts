export type Talk = {
    slotId: string;
    id: string;
    title: string;
    speaker: string;
    duration: number; // in minutes
    track?: string;
  };
  
  export interface TimeSlot {
    // [x: string]: string; // Removed to avoid type conflict
    id: string;
    time: string;
    day: string;
    talkIds: string[];  // Changed from talkId: string | null
    remainingMinutes: number; // Track available minutes
  }

  export type DaySchedule = {
    date: string;
    slots: TimeSlot[];
  };