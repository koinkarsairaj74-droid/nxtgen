import "./globals.css";
import type { Metadata } from "next";
export const metadata:Metadata={title:"NXT GEN English Medium School",description:"Nurturing Today’s Learners, Building Tomorrow’s Leaders."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
