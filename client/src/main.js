import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { plugin, defaultConfig } from '@formkit/vue';
import '@formkit/themes/genesis';
import CKEditor from '@ckeditor/ckeditor5-vue';

import './assets/main.css';

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);
app.use(plugin, defaultConfig);
app.use(CKEditor);
app.mount('#app');
