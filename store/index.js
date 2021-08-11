import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  fooddata: [],
  cart: []
});

export const getters = {
  cartCount: state => {
    if (!state.cart.length) return 0;
    return state.cart.reduce((acc, curr) => acc + +curr.count, 0);
  },
  totalPrice: state => {
    if (!state.cart.length) return 0;
    return state.cart.reduce((acc, curr) => acc + +curr.combinedPrice, 0);
  }
};

export const mutations = {
  updateFoodData: (state, payload) => {
    state.fooddata = payload;
  },
  addToCart: (state, payload) => {
    payload.id = uuidv4();
    state.cart.push(payload);
  }
};

export const actions = {
  async getFoodData({ commit, state }) {
    if (state.fooddata.length) return;
    try {
      const response = await fetch(
        "https://dva9vm8f1h.execute-api.us-east-2.amazonaws.com/production/restaurants",
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.AWS_API_KEY
          }
        }
      );
      const data = await response.json();
      commit("updateFoodData", data);
    } catch (error) {
      console.log(error);
    }
  }
};
