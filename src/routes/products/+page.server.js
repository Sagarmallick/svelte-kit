export const load = async (serverLoadEvent) => {
    console.log('Loading function called in page.server.js')
    const {fetch}=serverLoadEvent
    const title = 'list of available products'
    const response=await fetch('http://localhost:4000/products')
    const products= await response.json()
    return {
        title,
        products
    }
}