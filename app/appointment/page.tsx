"use client";

import React, { useEffect } from "react";
import { Calendar, Loader2 } from "lucide-react";

// Windsor business email
const WINDSOR_EMAIL = "Info@windsorconsultancyservices.com";

// Working hours (LOCAL TIME)
const START_HOUR = 11; // 11 AM
const END_HOUR = 21; // 9 PM

export default function AppointmentPage() {
  useEffect(() => {
    redirectToGoogleCalendar();
  }, []);

  const redirectToGoogleCalendar = () => {
    const now = new Date();

    const startTime = getNextAvailableSlot(now);
    const endTime = new Date(startTime);
    endTime.setHours(startTime.getHours() + 1);

    // ✅ FORMAT IN LOCAL TIME (NO UTC / NO "Z")
    const formatDateForCalendar = (date: Date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");

      return `${year}${month}${day}T${hours}${minutes}${seconds}`;
    };

    const startDateTime = formatDateForCalendar(startTime);
    const endDateTime = formatDateForCalendar(endTime);

    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const eventTitle = "Windsor Education Consultation";

    // ✅ CORRECT LINK WITH TIMEZONE
    const calendarLink =
      `https://calendar.google.com/calendar/render?action=TEMPLATE` +
      `&text=${encodeURIComponent(eventTitle)}` +
      `&dates=${startDateTime}/${endDateTime}` +
      `&ctz=${encodeURIComponent(userTimeZone)}` +
      `&add=${encodeURIComponent(WINDSOR_EMAIL)}`;

    window.location.href = calendarLink;
  };

  /**
   * Get next available 1-hour slot between 11 AM – 9 PM (LOCAL TIME)
   */
  const getNextAvailableSlot = (current: Date) => {
    const slot = new Date(current);

    // Round to next full hour
    slot.setMinutes(0, 0, 0);
    slot.setHours(slot.getHours() + 1);

    // Before working hours → today at 11 AM
    if (slot.getHours() < START_HOUR) {
      slot.setHours(START_HOUR, 0, 0, 0);
      return slot;
    }

    // After working hours → tomorrow at 11 AM
    if (slot.getHours() >= END_HOUR) {
      slot.setDate(slot.getDate() + 1);
      slot.setHours(START_HOUR, 0, 0, 0);
      return slot;
    }

    return slot;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
      <div className="text-center px-4">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-[#990421] rounded-full mb-6 animate-pulse">
          <Calendar className="w-12 h-12 text-white" />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-[#002241] dark:text-white mb-4">
          Redirecting to Google Calendar...
        </h1>

        <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300">
          <Loader2 className="w-5 h-5 animate-spin" />
          <p className="text-lg">Please wait...</p>
        </div>

        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
          If you're not redirected automatically,{" "}
          <button
            onClick={redirectToGoogleCalendar}
            className="text-[#990421] dark:text-red-400 font-semibold underline hover:no-underline"
          >
            click here
          </button>
        </p>

        <p className="mt-3 text-xs text-gray-400 dark:text-gray-500">
          Available slots: 11:00 AM – 9:00 PM (local time)
        </p>
      </div>
    </div>
  );
}
