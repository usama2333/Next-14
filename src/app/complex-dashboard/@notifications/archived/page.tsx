import Card from "@/app/components/card";
import Link from "next/link";

// This is slot that are directly used in layout without affecting the url
export default function ArchivedNotifications() {
  return (
    <Card>
      <div>Archived Notifications</div>
      <Link href="/complex-dashboard"> Default</Link>
    </Card>
  );
}
