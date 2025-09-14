// app/layout.js
import "./globals.css";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import Splash from "../components/Splash";

export const metadata = {
  title: "Malthouse Surgery",
  description: "Patient app",
  // PWA bits
  themeColor: "#005EB8", // NHS Blue
  manifest: "/manifest.json",
  icons: {
    icon: "/icons/192x192.png",   // favicon / install icon (Chrome)
    apple: "/icons/192x192.png",  // iOS home screen icon
  },
  appleWebApp: {
    capable: true,
    title: "Malthouse Surgery",
    statusBarStyle: "default",
  },
};

// Ensures proper safe areas on iOS (Next.js App Router way)
export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* pb-16 makes room for the fixed footer; safe-area for iOS */}
      <body
        className="min-h-screen bg-white pb-16"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <Splash>
          <Header />
          <main className="mx-auto max-w-3xl p-4">{children}</main>
          <BottomNav />
        </Splash>
      </body>
    </html>
  );
}