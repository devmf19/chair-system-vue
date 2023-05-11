import auth from "../logic/auth";

export default {
    getProducts() {
        return auth.getAxios().get(`/api/products`).then(res => res.data);
    },
    getProduct(id) {
        return auth.getAxios().get(`/api/products/${id}`);
    },
    saveProduct(data) {
        return auth.getAxios().post(
            `/api/products`,
            data,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
    },
    updateProduct(id, data) {
        return auth.getAxios().put(
            `/api/products/${id}`,
            data,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
    },
    deleteProduct(id) {
        return auth.getAxios().delete(`/api/products/${id}`);
    },
    getAvailables(dateRange){
        return auth.getAxios().post(
            `/api/products/availables`,
            dateRange,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(res => res.data)
    }


}