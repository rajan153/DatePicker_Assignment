import { create } from "zustand";

interface RecurrenceState {
  startDate: Date | null;
  endDate: Date | null;
  recurrenceType: "daily" | "weekly" | "monthly" | "yearly";
  customRecurrence: { [key: string]: boolean };
  setStartDate: (date: Date | null) => void;
  setEndDate: (date: Date | null) => void;
  setRecurrenceType: (type: "daily" | "weekly" | "monthly" | "yearly") => void;
  setCustomRecurrence: (data: { [key: string]: boolean }) => void;
}

const datePickerStore = create<RecurrenceState>((set) => ({
  startDate: null,
  endDate: null,
  recurrenceType: "daily",
  customRecurrence: {},

  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
  setRecurrenceType: (type) => set({ recurrenceType: type }),
  setCustomRecurrence: (data) =>
    set((state) => ({
      customRecurrence: { ...state.customRecurrence, ...data },
    })),
}));

export default datePickerStore;
