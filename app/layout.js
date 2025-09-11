// app/layout.js
import "./globals.css";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

export const metadata = {
  title: "Malthouse Surgery",
  description: "Patient app",
  // PWA bits
  themeColor: "#005EB8",
  manifest: "/manifest.json",
  icons: {
    icon: "/icons/192x192.png",      // favicon / install icon (Chrome)
    apple: "/icons/192x192.png"      // iOS home screen icon
  },
  // iOS: open as standalone (no Safari UI) and control status bar
  appleWebApp: {
    capable: true,
    title: "Malthouse",
    statusBarStyle: "default"        // or "black" / "black-translucent"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white pb-16">
        {/* pb for BottomNav */}
        <Header />
        <main className="mx-auto max-w-3xl p-4">{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}