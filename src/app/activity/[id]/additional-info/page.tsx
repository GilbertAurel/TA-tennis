"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { PageContainer } from "@/components/page-container";

export default function AdditionalInfoPage() {
  const router = useRouter();

  return (
    <PageContainer>
      <header className="sticky top-0 z-20 flex items-center bg-white px-4 pb-3 pt-5 drop-shadow">
        <button
          type="button"
          aria-label="Back"
          onClick={() => router.back()}
          className="flex h-9 w-9 items-center justify-center text-accent transition-opacity active:opacity-60"
        >
          <ChevronLeft className="h-6 w-6" strokeWidth={2.25} />
        </button>
        <h1 className="flex-1 pr-9 text-center text-[17px] font-semibold text-ink">
          Additional Info
        </h1>
      </header>
      <div className="flex-1 bg-bg-gray" />
    </PageContainer>
  );
}
