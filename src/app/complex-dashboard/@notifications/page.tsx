import Card from "@/app/components/card";
import Link from "next/link";

// This is slot that are directly used in layout without affecting the url
export default function Notifications() {
  return (
    <Card>
      <div>Notifications</div>
      <Link href="/complex-dashboard/archived"> Archived</Link>
    </Card>
  );
}
