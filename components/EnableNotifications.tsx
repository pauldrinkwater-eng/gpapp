"use client";

import { useEffect, useState } from "react";
import { PushNotifications } from "@capacitor/push-notifications";
import { Capacitor } from "@capacitor/core";

type Status = "unknown" | "granted" | "denied" | "prompt" | "error";

export default function EnableNotifications() {
  const [status, setStatus] = useState<Status>("unknown");
  const [loading, setLoading] = useState(false);
  const isNative = Capacitor.isNativePlatform();

  useEffect(() => {
    // On web (not a native build), show the informational card instead of the button
    if (!isNative) return setStatus("prompt");

    (async () => {
      try {
        const res = await PushNotifications.checkPermissions();
        setStatus((res.receive as Status) ?? "unknown");
      } catch {
        setStatus("error");
      }
    })();
  }, [isNative]);

  const enable = async () => {
    setLoading(true);
    try {
      // Ask for permission
      const perm = await PushNotifications.requestPermissions();
      if (perm.receive !== "granted") {
        setStatus("denied");
        setLoading(false);
        return;
      }

      // Register with APNs/FCM
      await PushNotifications.register();

      // Listen for the device token
      PushNotifications.addListener("registration", async (token) => {
        try {
          await fetch("/api/register-device", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              token: token.value,
              platform: Capacitor.getPlatform(), // 'ios' | 'android' | 'web'
            }),
          });
          setStatus("granted");
        } catch {
          setStatus("error");
        } finally {
          setLoading(false);
        }
      });

      PushNotifications.addListener("registrationError", () => {
        setStatus("error");
        setLoading(false);
      });
    } catch {
      setStatus("error");
      setLoading(false);
    }
  };

  const openSystemSettings = async () => {
    try {
      // Use @capacitor/app-launcher instead of App.openSettings()
      const { AppLauncher } = await import("@capacitor/app-launcher");
      // iOS supports app-settings:, Android may no-op (safe)
      await AppLauncher.openUrl({ url: "app-settings:" });
    } catch {
      // no-op
    }
  };

  // WEB fallback note
  if (!isNative) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
        <div className="text-[16px] font-medium text-[#0b5fad]">Notifications</div>
        <p className="mt-1 text-[14px] text-gray-600">
          Notifications are available in the App Store / Play Store version. If you’re using the PWA,
          we can enable <em>web push</em> separately—just say the word and I’ll set that up too.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="text-[16px] font-medium text-[#0b5fad]">Notifications</div>
      <p className="mt-1 text-[14px] text-gray-600">
        Enable practice updates and alerts on your device.
      </p>

      {status !== "granted" && (
        <button
          onClick={enable}
          disabled={loading}
          className="mt-3 inline-flex items-center rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-[#0b5fad] hover:shadow-sm disabled:opacity-50"
        >
          {loading ? "Enabling…" : "Enable Notifications"}
        </button>
      )}

      {status === "granted" && (
        <div className="mt-3 text-sm text-green-700">Notifications are enabled ✅</div>
      )}

      {status === "denied" && (
        <div className="mt-3 text-sm text-amber-700">
          Notifications are blocked. You can enable them in your device settings.
          <button onClick={openSystemSettings} className="ml-2 underline underline-offset-4">
            Open settings
          </button>
        </div>
      )}

      {status === "error" && (
        <div className="mt-3 text-sm text-red-700">
          There was a problem setting up notifications. Please try again.
        </div>
      )}
    </div>
  );
}
