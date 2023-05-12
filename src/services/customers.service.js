import auth from "../logic/auth";

export default {
    getCustomers() {
        return auth.getAxios().get(`/api/customers`).then(res => res.data);
    },
}