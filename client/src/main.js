import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { plugin, defaultConfig } from '@formkit/vue';
import '@formkit/themes/genesis';
import CKEditor from '@ckeditor/ckeditor5-vue';
import Notifications from '@kyvg/vue3-notification'
import { fr, en } from '@formkit/i18n'
import VueCookies from 'vue3-cookies'


import './assets/main.css';

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);
app.use(plugin, defaultConfig({
    // Define additional locales
    locales: { fr, en },
    // Define the active locale
    locale: 'fr',
  }));
app.use(Notifications);
app.use(CKEditor);
app.use(VueCookies, {
    expireTimes: "30d",
    path: "/",
    domain: "",
    secure: true,
    sameSite: "None"
});

app.mount('#app');
