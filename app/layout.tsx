import type React from "react"
import type { Metadata } from "next"
import { Chivo } from "next/font/google"
import "./globals.css"

// Font configuration
const chivo = Chivo({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-chivo",
})

export const metadata: Metadata = {
  title: "BuildSomethingWonderful",
  description: "A fund to help student-builders across the world build onchain through experimental grant funding.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${chivo.className} antialiased`}>{children}</body>
    </html>
  )
}



import './globals.css'