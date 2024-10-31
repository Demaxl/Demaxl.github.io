// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import './assets/build.css'
import 'flowbite'

import 'animate.css'

import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(TextPlugin)

const app = createApp(App)
app.mount('#app')
