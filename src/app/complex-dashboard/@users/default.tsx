import Card from "@/app/components/card";

export default function DefaultUsersAnalytics() {
    return <Card>Users Analytics</Card>
}


// http://localhost:3000/complex-dashboard/archived
// it is nessary to add default.tsx when unmatched routes or page is reload 
// it default return fallback of this the page
//on page reload it loads the Default.tsx otherwise shows error