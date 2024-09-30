// parallel routes or solts here users, revenue and notifications are slots
// that doesnot affect the route and avaliable in childern props in layout
// using complex-dashboard route it will render page.tsx with all three slots

// The benefits is we can use individual loading and erros for each solts 
// and remaning solts are interactive in ui

export default function DefaultComplexDashboardPage() {
    return <h1>Complex dashboard</h1>
}

// http://localhost:3000/complex-dashboard/archived
// it is nessary to add default.tsx when unmatched routes or page is reload 
// it default return fallback of this the page
//on page reload it loads the Default.tsx otherwise shows error