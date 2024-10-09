import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
    //here is the two ways to get request headers like bearer tokens or authentication
    // const requestHeaders = new Headers(request.headers);  
    const headerList = headers();

    //how to get cookies value this is first approach
    const theme = request.cookies.get("theme");
    console.log(theme)  // { name: 'theme', value: 'dark' }

    // how to set and get cookies with cookies function second approach
    cookies().set("resultPerPage","20");

    console.log(cookies().get("resultPerPage")); //{ name: 'resultPerPage', value: '20', path: '/' }
    

    // console.log(requestHeaders.get('Authorization'));
    console.log(headerList.get('Authorization'));
    // This is how to set the content type using second parameter
    return new Response("<h1>Profiles route</h1>",{
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark" //first approach for set cookies
        }
    })
}