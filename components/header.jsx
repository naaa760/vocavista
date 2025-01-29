import React from "react";
import { Button } from "./ui/button";
import {
  PenBox,
  LayoutDashboard,
  FileText,
  GraduationCap,
  ChevronDown,
  StarsIcon,
} from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

import { checkUser } from "@/lib/checkUser";

export default async function Header() {
  await checkUser();

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-200/20 via-gray-100/10 to-gray-200/20 backdrop-blur-md border-b border-gray-200/10" />
      <nav className="container relative mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <Image
            src={"/logo.png"}
            alt="Sensai Logo"
            width={200}
            height={200}
            className="h-20 py-1 w-auto object-contain hover:opacity-80 transition-opacity"
          />
        </Link>

        <div className="flex items-center space-x-2 md:space-x-4">
          <SignedIn>
            <Link href="/dashboard">
              <Button
                variant="outline"
                className="hidden md:inline-flex items-center gap-2 bg-gray-100/20 hover:bg-gray-200/30 transition-colors border-gray-300/20"
              >
                <LayoutDashboard className="h-4 w-4 text-gray-500" />
                Industry Insights
              </Button>
              <Button
                variant="ghost"
                className="md:hidden w-10 h-10 p-0 hover:bg-gray-200/30 transition-colors"
              >
                <LayoutDashboard className="h-4 w-4 text-gray-500" />
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="flex items-center gap-2 bg-gradient-to-r from-gray-400/80 to-gray-500/80 hover:from-gray-500/90 hover:to-gray-600/90 text-white transition-all duration-300">
                  <StarsIcon className="h-4 w-4" />
                  <span className="hidden md:block">Growth Tools</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-48 bg-gray-50/90 backdrop-blur-lg border-gray-200/20 shadow-lg shadow-gray-200/10"
              >
                <DropdownMenuItem asChild>
                  <Link
                    href="/resume"
                    className="flex items-center gap-2 hover:bg-gray-200/30"
                  >
                    <FileText className="h-4 w-4 text-gray-500" />
                    Build Resume
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/ai-cover-letter"
                    className="flex items-center gap-2 hover:bg-gray-200/30"
                  >
                    <PenBox className="h-4 w-4 text-gray-500" />
                    Cover Letter
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/interview"
                    className="flex items-center gap-2 hover:bg-gray-200/30"
                  >
                    <GraduationCap className="h-4 w-4 text-gray-500" />
                    Interview Prep
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <Button
                variant="outline"
                className="bg-gray-100/20 hover:bg-gray-200/30 transition-colors border-gray-300/20"
              >
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}
