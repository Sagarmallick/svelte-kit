
export const load= async (loadEvent)=>{
    const{fetch}=loadEvent;
    
    const mostActiveStockResponse= await fetch('http://localhost:4000/most-active-stock')
    const topGainingStockResponse= await fetch('http://localhost:4000/top-gaining-stock')
    const topLoasingStockResponse= await fetch('http://localhost:4000/top-losing-stock')

    const mostActiveStock= await mostActiveStockResponse.json()
    const topGainingStock=await topGainingStockResponse.json()
    const topLosingStock=await topLoasingStockResponse.json()
    return{
        mostActiveStock,
        topGainingStock,
        topLosingStock
    }
}