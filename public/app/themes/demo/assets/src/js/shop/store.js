import { createStore } from 'vuex';

export const store = createStore({
  state() {
    return {
      cartContents: [],
    };
  },
  mutations: {
    addToCart(state, product) {
      state.cartContents.push(product);
    },
    removeFromCart(state, itemId) {
      state.cartContents = state.cartContents.filter((item) => {
        return item.id !== itemId;
      });
    },
  },
});
