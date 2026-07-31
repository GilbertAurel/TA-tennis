import { PageContainer } from "@/components/page-container";
import { HomeHeader } from "@/components/home-header";
import { BottomNavigation } from "@/components/bottom-navigation";
import { EmptyState } from "@/components/empty-state";

export default function HomePage() {
  return (
    <PageContainer>
      <HomeHeader />
      <EmptyState
        title="Home"
        message="Welcome to Facility Booking."
      />
      <BottomNavigation />
    </PageContainer>
  );
}
