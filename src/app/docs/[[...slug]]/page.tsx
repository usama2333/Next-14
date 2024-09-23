export default function Docs({params} : {
    params: {
        slug: string[]
    }
}) {
    //it runs for any route path after docs like docs/hello/world  , docs/test/example
    // http://localhost:3000/docs/routing/catch-all-segments
   if(params?.slug?.length == 2) {
    return (
        <h1>Reviewing docs for feature {params.slug[0]} and concept {params.slug[1]}</h1>
    )
   } else if(params?.slug?.length == 1) {
    // http://localhost:3000/docs/routing/
    return (
        <h1>Reviewing docs for feature {params.slug[0]}</h1>
    )
   } else {
    // http://localhost:3000/docs/
    return (
        <h1>Docs Home Page</h1>
    )
   }
}