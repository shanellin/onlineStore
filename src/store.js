import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clothList: [],
    isLoading: false,
    stateTemp1: 'only',
    stateTemp2: {x: 'for vue'},
    stateTemp3: function(){return 'practice!!'}
  },
  mutations: {
    Loading(state, payload) {
      const data = state;
      data.isLoading = payload;
    },
    SetCloth(state, payload){
      const data = state;
      data.clothList = payload;
    }
  },
  actions: {
    //後端post proxy代理
    PostAPI(context, url, req){
      context.commit('Loading', true);
      return new Promise((resolve, reject) => {
        axios.post(`${url}`, req)
        .then((res) => {
          if (res.status == 200)
            resolve(res.data);
          else
            reject(`response's status isn't 200`);
        })
        .catch((err) => {
          reject(err)
        })
        .finally(() => {
          context.commit('Loading', false);
        })
      });
    },
    //後端get proxy代理
    GetAPI(context, req){
      context.commit('Loading', true);
      return new Promise((resolve, reject) => {
        axios.get(`${req.url}`, {
          headers: {
            Authorization: req.header || ''
          }
        })
        .then((res) => {
          if (res.status == 200)
            resolve(res.data);
          else
            reject(`response's status isn't 200`);
        })
        .catch((err) => {
          reject(err);
        })
        .finally(() => {
          context.commit('Loading', false);
        })
      });
    }
  },
  getters: {
    isLoading(state) {
      const data = state;
      return data.isLoading;
    }
  }
})
