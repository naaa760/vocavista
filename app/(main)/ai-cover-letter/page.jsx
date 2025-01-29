"use client";

import React, { useEffect, useState } from "react";
import { getCoverLetters } from "@/actions/cover-letter";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import CoverLetterList from "./_components/cover-letter-list";

const CoverLetterPage = () => {
  const [coverLetters, setCoverLetters] = useState([]);

  useEffect(() => {
    const fetchCoverLetters = async () => {
      try {
        const data = await getCoverLetters();
        setCoverLetters(data);
      } catch (error) {
        console.error("Error fetching cover letters:", error);
      }
    };

    fetchCoverLetters();
  }, []);

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between mb-5">
        <h1 className="text-6xl font-bold gradient-title">My Cover Letters</h1>
        <Link href="/ai-cover-letter/new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create New
          </Button>
        </Link>
      </div>

      <CoverLetterList coverLetters={coverLetters} />
    </div>
  );
};

export default CoverLetterPage;
