"use client"
import { useRouter } from "next/navigation";

export default function OrderProduct() {
    // useRouter for navigating routes
    const router = useRouter();
    const handleClick = () => {
        console.log('Order is placed');
        router.push('/')
        // router.back(); for moving back
        // router.forward(); for moving next page
        // router.replace('/) for removing history
    }
    return(
        <>
        <h1>Order Product</h1>
        <button onClick={handleClick}>Place Order</button>
        </>
    )
} 