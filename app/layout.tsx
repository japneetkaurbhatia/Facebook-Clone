import Feed from "@/components/Feed";
import Header from "@/components/Header";
import Login from "@/components/Login";
import RightSidebar from "@/components/RightSidebar";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (!true) {
    return <Login />;
  } else {
    return (
      <html lang="en">


        <Header />
        <div className="flex justify-content bg-gray-200">
          <Sidebar />
          <Feed />
          <RightSidebar />
        </div>

      </html>
    );
  }

}
