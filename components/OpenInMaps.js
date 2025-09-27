'use client';

import { Capacitor } from '@capacitor/core';
import { App } from '@capacitor/app';

export async function openMaps(address) {
  const encoded = encodeURIComponent(address || '');
  // Default to Google Maps URL (works on Android & desktop)
  let url = `https://www.google.com/maps/search/?api=1&query=${encoded}`;

  // Apple requires you support Apple Maps on iOS
  if (Capacitor.getPlatform() === 'ios') {
    url = `http://maps.apple.com/?q=${encoded}`;
  }

  try {
    // Let the OS open a native maps app when inside the packaged app
    await App.openUrl({ url });
  } catch {
    // Fallback for web/SSR
    if (typeof window !== 'undefined') window.location.href = url;
  }
}
