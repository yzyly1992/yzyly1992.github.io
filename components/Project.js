export default {
    data: () => ({
        c: Vue.shallowRef(null)
    }),
    methods: {
    updateComponent(param) {
            // The dynamic import
            import(`../work/${this.$route.params.id}.js`).then(module => {
                this.c = Vue.markRaw(module.default);
            })
        }
    },
    beforeRouteEnter(to, from, next) {
        // When first entering the route
        next(vm => vm.updateComponent(to.params.dynamic));
    },
    beforeRouteUpdate(to, from, next) {
      // When changing from one dynamic route to another
      this.updateComponent(to.params.dynamic);
      next();
    },
    template: `
      <component v-if="c" :is="c" :key="c.__file" />
    `
}