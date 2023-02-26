import router from '@/router';
import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

interface RootState {
  isLoggedIn: boolean;
  email: string | null;
}

const store = createStore<RootState>({
  state: {
    isLoggedIn: false,
    email: null,
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
    login({ commit }, { email, password }) {
      // Call your login API and check the credentials
      if (email === 'test@example.com' && password === 'password') {
        commit('login', email);
        router.push('/admin');
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
