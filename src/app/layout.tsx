import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { inter, sharpGrotesk, spaceGrotesk, sfProDisplay } from "@/lib/fonts";
import Head from "next/head";

export const metadata: Metadata = {
    title: "SuperReply",
    description: "The official page of superreply",
    icons: {
        icon: "/favicon.png",
    },
};

const font = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Head>
                <title>SuperReply</title>
            </Head>
            <body
                className={cn(
                    inter.variable,
                    sharpGrotesk.variable,
                    spaceGrotesk.variable,
                    sfProDisplay.variable,
                    "relative font-inter ",
                )}
            >
                {children}
            </body>
        </html>
    );
}
