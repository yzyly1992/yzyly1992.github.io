// 1. Define route components.
// These can be imported from other files
import Home from '/components/Home.js';
import About from '/components/About.js';
import Work from '/components/Work.js';
import Contact from '/components/Contact.js';
import Project from '/components/Project.js';

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    { path: '/', component: Home, meta : {title: 'David Yang'} },
    { path: '/about', component: About, meta : {title: 'David Yang - About'}},
    { path: '/work', component: Work, meta : {title: 'David Yang - Work'}},
    { path: '/contact', component: Contact, meta : {title: 'David Yang - Contact'}},
    { path: '/work/:id', component: Project, meta : {title: 'David Yang - Project Detail'}},
    { path: '/:pathMatch(.*)*', redirect: '/' },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We
  // are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
})

// 5. Create and mount the root instance.
const app = Vue.createApp({
  components: {
  },
  data() {
		return {
			theme: localStorage.getItem("theme")
		};
	},
	methods: {
		toggleTheme() {
			if (this.theme == "dark") {
				this.theme = "light";
				document.body.setAttribute("data-theme", "light");
				localStorage.setItem("theme", "light");
			} else {
				this.theme = "dark";
				document.body.setAttribute("data-theme", "dark");
				localStorage.setItem("theme", "dark");
			}
		}
	},
})
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')

// Now the app has started!