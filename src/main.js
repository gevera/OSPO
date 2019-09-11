// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import 'animate.css/animate.min.css'

import '~/assets/css/normalize.css'
import '~/assets/css/skeleton.css'


export default function(Vue, { router, head, isClient }) {
    head.link.push({
            rel: 'stylesheet',
            href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
        }),

        // Set default layout as a global component
        Vue.component('Layout', DefaultLayout)
}
