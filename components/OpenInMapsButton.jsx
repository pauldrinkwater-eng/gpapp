// components/OpenInMapsButton.jsx
'use client';

import { openMaps } from './OpenInMaps';

export default function OpenInMapsButton({
  address,
  className = 'mt-2 inline-block text-[14px] font-medium text-[#0b5fad] underline',
  children = 'Open in Maps',
}) {
  return (
    <button onClick={() => openMaps(address)} className={className}>
      {children}
    </button>
  );
}
