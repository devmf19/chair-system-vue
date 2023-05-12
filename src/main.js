import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initFlowbite } from 'flowbite'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

import auth from './logic/auth'
import './assets/styles.css'

const app = createApp(App)

app.mixin({
    created() {
        initFlowbite()
    }
});
app.component('VueDatePicker', VueDatePicker);
app.use(router);
app.use(auth);

app.mount('#app');
