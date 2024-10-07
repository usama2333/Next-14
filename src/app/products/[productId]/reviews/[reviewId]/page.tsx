"use client"
import { notFound } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ReviewDetails({params} : {
    params: {productId : string, reviewId : string}
}) {

    const random = getRandomInt(2)
    if(random ===1) {
      throw new Error("Error loading reviews");
    }
    // if(random === 1) {
    //   throw new Error("Error loading Reviews");
    // }


    // http://localhost:3000/products/4/reviews/2200
    //display not found on this roye if reviews > 1000
    if(parseInt(params.reviewId) > 1000){
      notFound();
    }
    return(
        <div>
        {/* it receives params which gives the productId from the url */}
         <h1>Products {params.productId} Review {params.reviewId}</h1>
        </div>
    )
}