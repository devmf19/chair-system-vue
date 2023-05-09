import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import auth from './logic/auth'
import './assets/styles.css'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';


const app = createApp(App)

app.component('VueDatePicker', VueDatePicker);
app.use(router);
app.use(auth)

app.mount('#app');
