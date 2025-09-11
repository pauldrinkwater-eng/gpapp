// app/layout.js
import "./globals.css";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

export const metadata = {
  title: "Malthouse Surgery",
  description: "Your health, made simpler.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="nhs-bg text-nhs-blue antialiased">
        <Header />
        <main className="mx-auto max-w-lg px-4 pb-24 pt-4">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}