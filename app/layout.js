// app/layout.js
import "./globals.css";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import Splash from "../components/Splash";

export const metadata = {
  title: "Malthouse Surgery",
  description: "Patient app",
  // ✅ Keep PWA bits here (but NOT themeColor)
  manifest: "/manifest.json",
  icons: {
    icon: "/icons/192x192.png",
    apple: "/icons/192x192.png",
  },
  appleWebApp: {
    capable: true,
    title: "Malthouse Surgery",
    statusBarStyle: "default",
  },
};

// ✅ Move themeColor from metadata → viewport
export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  // Light/Dark friendly; or use a single string "#005EB8" if you prefer
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#005EB8" }, // NHS Blue
    { media: "(prefers-color-scheme: dark)",  color: "#0B0B0B" },
  ],
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
