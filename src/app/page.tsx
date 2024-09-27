"use client";
import datePickerStore from "@/store/store";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Home() {
  const {
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    recurrenceType,
    setRecurrenceType,
    customRecurrence,
    setCustomRecurrence,
  } = datePickerStore();

  const handleRecurrenceChange = (e: any) => {
    setRecurrenceType(e.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#28282B]">
      <div className="flex flex-col space-y-4 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-xl text-center mb-4 font-bold">Select Dates</h2>

        <div className="flex space-x-4">
          <div>
            <label className="block mb-2">Start Date</label>
            <ReactDatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="border border-gray-300 p-2 rounded-md"
              isClearable
            />
          </div>

          <div>
            <label className="block mb-2">End Date</label>
            <ReactDatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              className="border border-gray-300 p-2 rounded-md"
              isClearable
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block mb-2">Recurrence Pattern</label>
          <select
            value={recurrenceType}
            onChange={handleRecurrenceChange}
            className="border border-gray-300 p-2 rounded-md"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>

        {recurrenceType === "weekly" && (
          <div>
            <label className="block mb-2">Select Days of the Week</label>
            <div className="flex space-x-2">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                <button
                  key={day}
                  className={`p-2 border rounded-md ${
                    customRecurrence[day] ? "bg-blue-500 text-white" : ""
                  }`}
                  onClick={() =>
                    setCustomRecurrence({ [day]: !customRecurrence[day] })
                  }
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-4">
          <h2 className="font-semibold">Preview</h2>
          <div className="p-4 border border-gray-300 rounded-md">
            <p>
              Start Date: {startDate ? startDate.toLocaleDateString() : "None"}
            </p>
            <p>End Date: {endDate ? endDate.toLocaleDateString() : "None"}</p>
            <p>Recurrence: {recurrenceType}</p>
            {recurrenceType === "weekly" && (
              <p>
                Days:{" "}
                {Object.keys(customRecurrence)
                  .filter((day) => customRecurrence[day])
                  .join(", ")}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
