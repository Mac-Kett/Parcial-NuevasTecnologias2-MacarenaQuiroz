import Vue from 'vue'
import VueRouter from 'vue-router'

import Alumnos from './componentes/Alumnos/index.vue'
import Preguntas from './componentes/Preguntas.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect:'/Alumnos' },
        { path: '/alumnos', component: Alumnos },
        { path: '/preguntas', component: Preguntas },
    ]
})