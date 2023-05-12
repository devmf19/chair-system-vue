import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vuex from 'vuex'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

import auth from './logic/auth'
import './assets/styles.css'

const app = createApp(App)

app.component('VueDatePicker', VueDatePicker);
app.use(router);
app.use(Vuex);
app.use(store);
app.use(auth);

app.mount('#app');
