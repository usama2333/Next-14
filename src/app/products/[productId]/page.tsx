export default function ProductDetails({params} : {
    params: {productId : string}
}) {
    return(
        <>
        {/* it receives params which gives the productId from the url */}
         <h1>Products Details {params.productId}</h1>
        </>
    )
}