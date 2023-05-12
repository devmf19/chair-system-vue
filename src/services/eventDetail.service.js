import auth from "../logic/auth";

export default {
    createEventDetail(eventId, product, productId) {
        const event = {
            amount: `${product.amount}`,
            price: `${product.price}`,
            eventId: `${eventId}`,
            product: {
                id: `${productId}`
            }
        }
        return auth.getAxios().post(
            `/api/events/detail`,
            event,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(res => res.data);
    },
}