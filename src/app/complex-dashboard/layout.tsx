// import UsersAnalytics from "@components/UsersAnalytics";
// import RevenueMetrics from "@components/RevenueMetrics";
// import Notifications from "@components/Notifications";

// parallel routes or solts here users, revenue and notifications are slots
// that doesnot affect the route and avaliable in childern props
  
export default function DashboardLayout({
    children,
    users,
    revenue,
    notifications,
    login
  }: {
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;
    login: React.ReactNode;
  }) {
    const isLoggedIn = true;
    return isLoggedIn ? (
        <>
          <div>{children}</div>
          <div style={{display: "flex"}}>
            <div style={{display: "flex", flexDirection:'column'}}>
                <div>{users}</div>
                <div>{revenue}</div>
            </div>
            <div style={{display:"flex", flex: 1}}>{notifications}</div>
          </div>
          {/* <UsersAnalytics/>
          <RevenueMetrics/>
          <Notifications/> */}
        </>
    ) : (
        login
    );
  }
  