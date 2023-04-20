import { createRouter, createWebHistory } from 'vue-router';
import SignIn from '../views/SignIn.vue';
// import HomePage from '../views/HomePage.vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'signin',
      component: SignIn,
    },
    {
      path: '/home',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      meta: { requiresAuth: true },
      component: () => import('../views/HomePage.vue')
      // component: HomePage,
    },
  ],
});

router.beforeEach((to, from) => {
  const auth =  getAuth();

	onAuthStateChanged(auth,(user)=>{
		const currentUser = user
		const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
		if (requiresAuth && !currentUser) {
			return '/'
		} else if((requiresAuth && currentUser)){ 
			return '/home' 
		}else{
			return
		}
	})

});

export default router;
