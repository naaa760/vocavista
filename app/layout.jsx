import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vocavista",
  description: "Your AI-powered career growth platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.className} min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300`}
        >
          <Header />
          <main className="pt-16">{children}</main>
          <Toaster position="bottom-right" />
        </body>
      </html>
    </ClerkProvider>
  );
}
