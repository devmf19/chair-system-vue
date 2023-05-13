import auth from "../logic/auth";

export default {
    getCustomers() {
        return auth.getAxios().get(`/api/customers`).then(res => res.data);
    },
    saveCustomer(data) {
        return auth.getAxios().post(
            `/api/customers`,
            data,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(res => res.data);
    }
}