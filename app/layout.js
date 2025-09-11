// app/layout.js
import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "Malthouse Surgery",
  description: "Your health, made simpler.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-[#005EB8] antialiased">
        <Header />
        <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}