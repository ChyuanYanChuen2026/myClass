import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import BMIView from '@/views/BMIView.vue';
import TemView from '@/views/TemView.vue';
import Content1 from '@/components/Content1.vue';
import Content2 from '@/components/Content2.vue';
import HelloView from '@/views/HelloView.vue';
import NotFound from '@/views/NotFoundView.vue';
import DemoList from '@/views/DemoListView.vue';
import ScoreList from '@/views/ScoreView.vue';
import TodoList from '@/views/TodoListView.vue';
import Lifecycle from '@/views/LifecycleView.vue';
import PropEmit from '@/views/ParentView.vue';
import PokemonList from '@/views/PokemonListView.vue';
import ShoppingCart from '@/views/ShoppingCartView.vue';
import PiniaShoppingCart from '@/views/PiniaShoppingCartView.vue';

const routes = [
  { path: '/:pathMatch(.*)*', component: NotFound, name: 'NotFound' },
  {
    path: '/:id?',
    name: 'Home',
    component: HomeView,
    props: true,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    children: [
      { path: 'content1', component: Content1, name: 'Content1' },
      { path: 'content2', component: Content2, name: 'Content2' },
    ],
  },
  {
    path: '/tem',
    name: 'Temperature',
    component: TemView,
  },
  {
    path: '/calBMI',
    name: 'BMI',
    component: BMIView,
  },
  {
    path: '/bmi',
    name: 'calBMI',
    component: BMIView,
  },
  {
    path: '/hello/:id1?',
    component: HelloView,
    name: 'Hello',
  },
  {
    path: '/demoList',
    component: DemoList,
    name: 'DemoList',
  },
  {
    path: '/score',
    component: ScoreList,
    name: 'ScoreList',
  },
  {
    path: '/lifecycle',
    component: Lifecycle,
    name: 'Lifecycle',
  },
  {
    path: '/parent',
    component: PropEmit,
    name: 'PropEmit',
  },
  {
    path: '/pokemonList',
    component: PokemonList,
    name: 'PokemonList',
  },
  {
    path: '/todoList',
    component: TodoList,
    name: 'TodoList',
  },
  {
    path: '/shoppingCart',
    component: ShoppingCart,
    name: 'ShoppingCart',
  },
  {
    path: '/piniaShoppingCart',
    component: PiniaShoppingCart,
    name: 'PiniaShoppingCart',
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
  linkActiveClass: 'active highlight',
});

export default router;
