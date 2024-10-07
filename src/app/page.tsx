import Link from "next/link"



export default function Home() {
    return(
        <div>
          <h1>Welcome to Home</h1>
          <Link href="/blog">Blog</Link>
          <Link href="/products">Products</Link>
        </div>
    )
}