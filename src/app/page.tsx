"use client";

import { PageContainer } from "@/components/page-container";
import { HomeHeader } from "@/components/home-header";
import { BottomNavigation } from "@/components/bottom-navigation";
import { ActivityCard } from "@/components/activity-card";
import { LoadingState } from "@/components/loading-state";
import { EmptyState } from "@/components/empty-state";
import { useBookings, useSeedDatabase } from "@/hooks/use-bookings";

export default function MyActivityPage() {
  useSeedDatabase();
  const { data: bookings, isLoading } = useBookings();

  return (
    <PageContainer>
      <HomeHeader />
      <div className="flex-1">
        {isLoading ? (
          <LoadingState />
        ) : !bookings || bookings.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="flex flex-col gap-4 px-[20px] pb-6 pt-1">
            {bookings.map((booking, index) => (
              <ActivityCard key={booking.id} booking={booking} index={index} />
            ))}
          </div>
        )}
      </div>
      <BottomNavigation />
    </PageContainer>
  );
}
