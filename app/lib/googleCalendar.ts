// Google Calendar API integration for client-side booking

interface CalendarEvent {
  summary: string;
  description: string;
  startDateTime: string;
  endDateTime: string;
  attendees: string[];
}

// Initialize Google API client
const initializeGoogleApi = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") {
      reject(new Error("Google API can only be initialized in browser"));
      return;
    }

    // Check if gapi is already loaded
    if (window.gapi && window.gapi.client) {
      resolve();
      return;
    }

    // Load the Google API client
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/api.js";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      window.gapi.load("client:auth2", async () => {
        try {
          await window.gapi.client.init({
            apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            discoveryDocs: [
              "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
            ],
            scope: "https://www.googleapis.com/auth/calendar.events",
          });
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    };
    script.onerror = () => reject(new Error("Failed to load Google API"));
    document.body.appendChild(script);
  });
};

// Sign in to Google
const signIn = async (): Promise<void> => {
  try {
    const authInstance = window.gapi.auth2.getAuthInstance();
    if (!authInstance.isSignedIn.get()) {
      await authInstance.signIn();
    }
  } catch (error) {
    throw new Error("Failed to sign in to Google");
  }
};

// Create calendar event
export const createCalendarEvent = async (
  eventDetails: CalendarEvent,
): Promise<void> => {
  try {
    // Initialize Google API
    await initializeGoogleApi();

    // Sign in user
    await signIn();

    // Create the event
    const event = {
      summary: eventDetails.summary,
      description: eventDetails.description,
      start: {
        dateTime: eventDetails.startDateTime,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      end: {
        dateTime: eventDetails.endDateTime,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      attendees: eventDetails.attendees.map((email) => ({ email })),
      reminders: {
        useDefault: false,
        overrides: [
          { method: "email", minutes: 24 * 60 }, // 1 day before
          { method: "popup", minutes: 30 }, // 30 minutes before
        ],
      },
      // Send notifications to attendees
      sendUpdates: "all",
    };

    // Insert the event into the calendar
    const response = await window.gapi.client.calendar.events.insert({
      calendarId: "primary",
      resource: event,
      sendNotifications: true,
    });

    if (!response || response.status !== 200) {
      throw new Error("Failed to create calendar event");
    }

    console.log("Calendar event created:", response.result);
  } catch (error: any) {
    console.error("Error creating calendar event:", error);

    // Provide user-friendly error messages
    if (error.error === "popup_closed_by_user") {
      throw new Error("Sign-in was cancelled. Please try again.");
    } else if (error.error === "access_denied") {
      throw new Error(
        "Calendar access was denied. Please grant permission to continue.",
      );
    } else {
      throw new Error(
        error.message || "Failed to create calendar event. Please try again.",
      );
    }
  }
};

// Type declarations for Google API
declare global {
  interface Window {
    gapi: any;
  }
}
