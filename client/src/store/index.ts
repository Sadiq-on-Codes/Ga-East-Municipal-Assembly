import { url } from '@/functions/endpoint';
import router from '@/router';
import axios from 'axios';
import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';


function fetchAuthToken(username: string, password: string) {
  return new Promise((resolve, reject) => {
    axios.post(`${url}/admin/auth/login`, {
      username: username,
      password: password,
    })
    .then((response) => {
      resolve(response.data);
    })
    .catch((error) => {
      reject(error); 
    });
  });
}

interface RootState {
  isLoggedIn: boolean;
  token: string | null;
  username: string | null;
  successMessage: string;
}

const store = createStore<RootState>({
  state: {
    isLoggedIn: false,
    token: null,
    username: null,
    successMessage: "",
  },
  mutations: {
    login(state, { token, username }) {
      state.isLoggedIn = true;
      state.token = token;
      state.username = username;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.token = null;
    },
  },
  actions: {
    login({ commit }, { username, password }: { username: string, password: string }) {
      fetchAuthToken(username, password)
        .then((tokenData) => {
          const { token }: any = tokenData;
          commit('login', { token, username });
          this.state.successMessage = "Login Successful"
          setTimeout(() => {
            router.push('/admin/dashboard');
          }, 2000)
        })
        .catch((error) => {
          throw new Error('Invalid credentials');
        });
    },
    logout({ commit }) {
      commit('logout');
      localStorage.clear();
    },
  },
  getters: {
    isLoggedIn: (state) => state.isLoggedIn,
    email: (state) => state.username,
  },
  plugins: [
    createPersistedState({
      key: 'my-app',
      paths: ['isLoggedIn', 'token'],
    }),
  ],
});

export default store;
