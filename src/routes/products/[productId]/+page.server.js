export const load = async(serverLoadEvent)=>{
    const {params,fetch}=serverLoadEvent
    const {productId}=params
    const response=await fetch(`http://localhost:4000/products/${productId}`)
    const product= await response.json()

    return{
        product
    }
}