// app/opening-hours/page.tsx
"use client";

import React from "react";

export default function OpeningHoursPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* NHS Blue Header */}
      <header className="bg-[#005EB8] text-white py-4 px-6">
        <h1 className="text-xl font-bold">Malthouse Surgery</h1>
        <p className="text-sm">Opening Hours</p>
      </header>

      {/* Page Content */}
      <main className="p-6 max-w-2xl mx-auto">
        <h2 className="text-lg font-semibold mb-4">Our Regular Opening Hours</h2>

        <table className="w-full border border-gray-300 text-sm">
          <tbody>
            <tr className="border-b">
              <td className="p-2 font-medium">Monday</td>
              <td className="p-2">08:00 – 18:30</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-medium">Tuesday</td>
              <td className="p-2">08:00 – 18:30</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-medium">Wednesday</td>
              <td className="p-2">08:00 – 18:30</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-medium">Thursday</td>
              <td className="p-2">08:00 – 18:30</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-medium">Friday</td>
              <td className="p-2">08:00 – 18:30</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-medium">Saturday</td>
              <td className="p-2">Closed</td>
            </tr>
            <tr>
              <td className="p-2 font-medium">Sunday</td>
              <td className="p-2">Closed</td>
            </tr>
          </tbody>
        </table>

        <div className="mt-6">
          <h3 className="text-md font-semibold mb-2">Extended Hours</h3>
          <p className="text-sm">
            We also offer extended hours appointments on some evenings and
            weekends. Please contact reception for availability.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-md font-semibold mb-2">Bank Holidays</h3>
          <p className="text-sm">
            The surgery is closed on all UK Bank Holidays. Please call NHS 111
            when we are closed.
          </p>
        </div>
      </main>
    </div>
  );
}
