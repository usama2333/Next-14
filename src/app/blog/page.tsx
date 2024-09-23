import { Metadata } from "next";

export const metadata: Metadata = {
    title : {
        absolute: 'Blog',  //means only shows this
    }
}

export default function Blog() {
    return(
        <>
         <h1>Blog page</h1>
        </>
    )
}