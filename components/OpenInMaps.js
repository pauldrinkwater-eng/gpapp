'use client';

import { Capacitor } from '@capacitor/core';
import { App } from '@capacitor/app';

export async function openMaps(address) {
  const encoded = encodeURIComponent(address || '');
  let url = `https://www.google.com/maps/search/?api=1&query=${encoded}`;

  if (Capacitor.getPlatform() === 'ios') {
    url = `http://maps.apple.com/?q=${encoded}`;
  }

  try {
    await App.openUrl({ url });
  } catch {
    if (typeof window !== 'undefined') {
      window.location.href = url;
    }
  }
}
