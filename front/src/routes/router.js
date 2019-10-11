import Vue from 'vue';
import Router from 'vue-router';

import HomeComponent from '../components/Home.vue';
import ContactComponent from '../components/contacts/index.vue';
import EditContactComponent from '../components/contacts/edit.vue';

Vue.use(Router);

export default new Router ({
    routes: [
        {
            path: '/',
            component: HomeComponent
        },
        {
            path: '/contacts',
            component: ContactComponent
        },
        {
            path: '/contact/edit/:id',
            component: EditContactComponent
        },
    ]
});