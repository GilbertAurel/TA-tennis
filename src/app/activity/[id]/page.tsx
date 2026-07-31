"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import { PageContainer } from "@/components/page-container";
import { DetailHeader } from "@/components/detail-header";
import { AlertCard } from "@/components/alert-card";
import { InfoRow } from "@/components/info-row";
import { CancelRequestButton } from "@/components/cancel-request-button";
import { LoadingState } from "@/components/loading-state";
import { EmptyState } from "@/components/empty-state";
import { StatusBadge } from "@/components/status-badge";
import { useBooking, useUpdateBooking } from "@/hooks/use-bookings";
import { formatTimeSlot } from "@/lib/format";
import { cn } from "@/lib/utils";

const TABS = ["Detail", "Billing"] as const;

export default function ActivityDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const bookingId = Number(id);
  const router = useRouter();
  const { data: booking, isLoading } = useBooking(bookingId);
  const updateBooking = useUpdateBooking();
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("Detail");

  const handleCancel = () => {
    if (!booking?.id) return;
    updateBooking.mutate(
      { id: booking.id, changes: { status: "CANCELLED" } },
      { onSuccess: () => router.push("/") },
    );
  };

  return (
    <PageContainer>
      <DetailHeader />
      {isLoading ? (
        <LoadingState />
      ) : !booking ? (
        <EmptyState
          title="Booking not found"
          message="This activity may have been removed."
        />
      ) : (
        <div className="bg-bg-gray flex-1">
          {/* Reference block */}
          <div className="w-full bg-white px-5 pb-[42px] flex justify-between">
            <div className="flex-col">
              <h1 className="text-[12px] text-ink">
                {booking.referenceNumber}
              </h1>
              <p className="mt-[4px] text-[16px] font-semibold text-ink-secondary">
                {booking.category}
              </p>
            </div>

            <StatusBadge status={booking.status} />
          </div>

          {/* Tabs */}
          <div className="flex border-b border-[#D9D9D9] bg-white px-[12px]">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "relative px-[18px] pb-2 pt-1 text-[14px] font-bold transition-colors",
                  activeTab === tab ? "text-ink-active" : "text-ink-muted",
                )}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute inset-x-0 -bottom-px h-0.5 font-bold rounded-full bg-accent" />
                )}
              </button>
            ))}
          </div>

          {activeTab === "Detail" ? (
            <div className="flex flex-1 flex-col px-[12px] pt-3">
              <AlertCard bookingId={bookingId} />

              <div className="mt-5 px-[16px] pt-[20px] pb-[32px] flex flex-col gap-5 bg-white rounded-2xl drop-shadow">
                <InfoRow
                  label="Facility Name"
                  value={booking.facilityName}
                  underline
                />
                <InfoRow
                  label="Event Name"
                  value={booking.eventName}
                  underline
                />
                <InfoRow
                  label="Time Slot"
                  value={formatTimeSlot(
                    booking.date,
                    booking.startTime,
                    booking.endTime,
                  )}
                  underline
                />
                <InfoRow label="Description" value={booking.description} />
              </div>

              <div className="mt-auto pb-6 pt-6">
                <CancelRequestButton onConfirm={handleCancel} />
              </div>
            </div>
          ) : (
            <div className="flex flex-1 flex-col px-5 pt-6">
              <EmptyState
                title="No billing information"
                message="Billing details will appear here once available."
              />
            </div>
          )}
        </div>
      )}
    </PageContainer>
  );
}
