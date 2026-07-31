import { PageContainer } from "@/components/page-container";
import { HomeHeader } from "@/components/home-header";
import { BottomNavigation } from "@/components/bottom-navigation";
import { EmptyState } from "@/components/empty-state";

export default function AccountPage() {
  return (
    <PageContainer>
      <HomeHeader />
      <EmptyState
        title="Account"
        message="Your account details will appear here."
      />
      <BottomNavigation />
    </PageContainer>
  );
}
