import type { Metadata } from "next";
import { Figtree, Inter } from "next/font/google";
import "./globals.css";

import SideBar from "@/components/SideBar";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";

const font = Figtree({subsets: ['latin']})

export const metadata: Metadata = {
  title: "Spotify",
  description: "Listen to music ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider/>
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider/>
            <SideBar>
              {children}
            </SideBar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
