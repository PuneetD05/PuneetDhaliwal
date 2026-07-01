import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { profile } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Puneet Dhaliwal · Mechanical Engineering",
  description:
    "Puneet Dhaliwal — Mechanical Engineering student at the University of Toronto. Projects, experience, and skills.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        {children}
        <footer className="footer">
          <p>
            © {new Date().getFullYear()} {profile.name}. Built with Next.js.
          </p>
        </footer>
      </body>
    </html>
  );
}
