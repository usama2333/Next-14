import {Metadata} from "next";
type Props = {
    params: {
        productId : string
    }
}

export const generateMetadata = async ({params}: Props) : Promise<Metadata> => {
    const title = await new Promise((resolve) => {
     setTimeout(() => {
      resolve(`iphone ${params.productId}`)
     },100)
    }) 
  return {
    title: `Product ${title}`
  }
}

export default function ProductDetails({params}: Props ) {
    return(
        <div>
        {/* it receives params which gives the productId from the url */}
         <h1>Products Details {params.productId}</h1>
        </div>
    )
}