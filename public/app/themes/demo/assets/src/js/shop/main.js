import { createApp } from 'vue';
import { CreateStore } from 'vuex';
import router from './router'
import App from './app.vue';

// Example of VueX

Vue.use(VueX);

const store = new VueX.Store({
  state() {
    return {
      cartContents: []
    };
  },
  mutations: {
    addToCart(state, product) {
      this.state.cartContents.push(product);
    },
    removeFromCart(state, itemId) {
      this.state.cartContents = this.state.cartContents.filter((item) => {
        return item.id !== itemId;
      });
    },
  },
});

createApp(App).use(router).mount('#shop');
