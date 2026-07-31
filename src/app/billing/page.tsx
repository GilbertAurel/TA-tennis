import { PageContainer } from "@/components/page-container";
import { HomeHeader } from "@/components/home-header";
import { BottomNavigation } from "@/components/bottom-navigation";
import { EmptyState } from "@/components/empty-state";

export default function BillingPage() {
  return (
    <PageContainer>
      <HomeHeader />
      <EmptyState
        title="Billing"
        message="Your billing information will appear here."
      />
      <BottomNavigation />
    </PageContainer>
  );
}
