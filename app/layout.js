// app/layout.js
import "./globals.css";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

export const metadata = {
  title: "Malthouse Surgery",
  description: "Patient app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white pb-16"> {/* pb for BottomNav */}
        <Header />
        <main className="mx-auto max-w-3xl p-4">{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}
