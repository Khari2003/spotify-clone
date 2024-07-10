import type { Metadata } from "next";
import { Figtree, Inter } from "next/font/google";
import "./globals.css";

import SideBar from "@/components/SideBar";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import getSongByUserId from "@/actions/getSongByUserId";
import Player from "@/components/Player";

const font = Figtree({subsets: ['latin']})

export const metadata: Metadata = {
  title: "Spotify",
  description: "Listen to music ",
};

export const relative = 0

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const userSongs = await getSongByUserId()

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/Spotify_icon.svg" />
      </head>
      <body className={font.className}>
        <ToasterProvider/>
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider/>
            <SideBar songs={userSongs}>
              {children}
            </SideBar>
            <Player/>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
