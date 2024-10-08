import { comments } from "./data";

export async function GET() {
    return Response.json(comments);
}

// http://localhost:3000/comments
// this is run on thunderclient for test api response


export async function POST(request: Request) {
    const comment = await request.json();
    const newcomment = {
        id: comments.length + 1,
        text: comment.text,
    }
    comments.push(newcomment);
    return new Response(JSON.stringify(newcomment), {
        headers: {
            "Content-Type": "application/json",
        },
        status: 201,
    })
}