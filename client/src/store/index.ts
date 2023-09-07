import router from '@/router';
import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { email, password } from '../functions/endpoint'

interface RootState {
  isLoggedIn: boolean;
  email: string | null;
  loginEmail: string;
  loginPassword: string;
}

const store = createStore<RootState>({
  state: {
    isLoggedIn: false,
    email: null,
    loginEmail: email,
    loginPassword: password
  },
  mutations: {
    login(state, email) {
      state.isLoggedIn = true;
      state.email = email;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  actions: {
    login({ commit }, { email, password }: { email: string, password: string }) {
      if (email == this.state.loginEmail && password == this.state.loginPassword) {
        commit('login', email);
        router.push('/admin/dashboard');
      } else {
        throw new Error('Invalid credentials');
      }
    },
    logout({ commit }) {
      commit('logout');
      localStorage.clear();
    },
  },
  getters: {
    isLoggedIn: (state) => state.isLoggedIn,
    email: (state) => state.email,
  },
  plugins: [
    createPersistedState({
      key: 'my-app',
      paths: ['isLoggedIn'],
    }),
  ],
});

export default store;
