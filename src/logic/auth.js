import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";
axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default {
    login(username, password) {
        const loginDto = { username, password };
        return axios.post("/auth/login", loginDto);
    },
    setToken(data) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userDui", data.dui);
        localStorage.setItem("user", `${data.name} ${data.lastname}`);
        localStorage.setItem("username", data.username);
    },
    getToken() {
        return localStorage.getItem('token');
    },
    logout() {
        localStorage.removeItem('token');
    },
    getProducts() {
        return axios.get("/api/products/").then(res => res.data);
    },
    getAxios() {
        return axios;
    }
};