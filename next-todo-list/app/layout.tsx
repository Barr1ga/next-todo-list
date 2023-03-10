"use client"

import './globals.css'
import { Noto_Sans } from 'next/font/google'
import { ConvexProvider, ConvexReactClient } from "convex/react";

// TODO: note!
const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL ? process.env.NEXT_PUBLIC_CONVEX_URL : "");

const notoSans = Noto_Sans({
  weight: ["400", "700"],
  variable: "--font-noto-sans",
  subsets: ["latin"]
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ConvexProvider client={convex}>
      <html lang="en">
        <body className={`${notoSans.className}`}>
          {children}
        </body>
      </html>
    </ConvexProvider>
  )
}
