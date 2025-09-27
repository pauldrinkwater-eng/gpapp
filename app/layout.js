// app/layout.js
import "./globals.css";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import Splash from "../components/Splash";

export const metadata = {
  title: "Malthouse Surgery",
  description: "Patient app",
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

// ✅ Move themeColor here, out of metadata
export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#005EB8", // NHS Blue
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
