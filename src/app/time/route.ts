// By default it catching the routes data like on build the time is catched and is 
// not change on refresh by using force-dynamic it does not catched data in build

// catching in route handler

export const dynamic = "force-dynamic"

export async function GET() {
    return Response.json({
        time: new Date().toLocaleTimeString()
    })
}