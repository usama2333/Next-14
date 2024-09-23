
import { notFound } from "next/navigation"

export default function ReviewDetails({params} : {
    params: {productId : string, reviewId : string}
}) {
    // http://localhost:3000/products/4/reviews/2200
    //display not found on this roye if reviews > 1000
    if(parseInt(params.reviewId) > 1000){
      notFound();
    }
    return(
        <>
        {/* it receives params which gives the productId from the url */}
         <h1>Products {params.productId} Review {params.reviewId}</h1>
        </>
    )
}