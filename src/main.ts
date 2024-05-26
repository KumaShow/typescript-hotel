import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { Icon } from '@iconify/vue';

import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

//axios Interceptor
import axiosInterceptorsSetup from '@/utilities/axiosInterceptorsSetup';
axiosInterceptorsSetup(axios);

// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

import { register } from 'swiper/element/bundle';
register();
const app = createApp(App);
// app.config.globalProperties.$axios = { ...axiosInterceptorsSetup };
app.use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios);
app.use(createPinia());
app.use(router);
app.use(VueSweetalert2);
app.component('AppIcon', Icon);

app.mount('#app');
