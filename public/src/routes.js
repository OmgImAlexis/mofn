import HomeComponent from './views/Home.vue';
import NotFoundComponent from './views/NotFound.vue';

export default [{
    name: 'home',
    path: '/',
    component: HomeComponent
}, {
    name: 'notFound',
    path: '*',
    component: NotFoundComponent
}];
