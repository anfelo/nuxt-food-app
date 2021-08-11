export const state = () => ({
  fooddata: []
});

// export const getters = {
//   getterValue: state => {
//     return state.value
//   }
// }

export const mutations = {
  updateFoodData: (state, payload) => {
    state.fooddata = payload;
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
      console.log(data);
      commit("updateFoodData", data);
    } catch (error) {
      console.log(error);
    }
  }
};
