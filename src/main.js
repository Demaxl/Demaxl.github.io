// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { vHoverAnimation } from './directives/VHoverAnimation'

import './assets/build.css'
import 'flowbite'
import 'animate.css'

import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(TextPlugin, ScrollTrigger)

const app = createApp(App)
app.directive('hover-animation', vHoverAnimation)

app.mount('#app')
