import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { initializeApp } from 'firebase/app';
import './assets/main.css';

const firebaseConfig = {
  apiKey: 'AIzaSyAa5MFCsw8Tc_YqNJ2joCcsURc8gNgsBTQ',
  authDomain: 'test-project-for-vdcom.firebaseapp.com',
  projectId: 'test-project-for-vdcom',
  storageBucket: 'test-project-for-vdcom.appspot.com',
  messagingSenderId: '433373911272',
  appId: '1:433373911272:web:51a82b59f1cb1946e8515d',
};

const fierebaseApp = initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);

app.mount('#app');
