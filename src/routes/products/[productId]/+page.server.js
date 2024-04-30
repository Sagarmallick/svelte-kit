import { redirect } from "@sveltejs/kit"

export const load = async (serverLoadEvent) => {
    const { params, fetch } = serverLoadEvent
    const { productId } = params
    if (productId > 4) {
        // throw error(404, { message: 'oh no! look like product not currently available', hint: 'try a different product' })
        throw redirect(307,'/products')
    }
    const title='Product detail'
    const notification = 'End of season sale 50% off!'
    const response = await fetch(`http://localhost:4000/products/${productId}`)
    const product = await response.json()

    return {
        product,
        title,
        notification
    }
}