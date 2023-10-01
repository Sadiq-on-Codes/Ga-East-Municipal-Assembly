import { url } from '@/functions/endpoint';
import axios from 'axios';

interface TokenResponse {
  token: string;
}

export const authService = {
  login: async (username: string, password: string): Promise<string | null> => {
    try {
      const response = await axios.post<TokenResponse>(`${url}/admin/auth/login`, {
        username,
        password,
      });
      const token = response.data.token;
      if (token) {
        // Store the token in local storage
        localStorage.setItem('authToken', token);
        return token;
      }
      return null; // Return null if no token is received
    } catch (error) {
      throw new Error('Login failed. Please check your credentials.');
    }
  },
  getToken: (): string | null => {
    // Retrieve the token from local storage
    const token = localStorage.getItem('authToken');
    return token ? `Bearer ${token}` : null;
  },
  logout: (): void => {
    // Clear the token from local storage
    localStorage.removeItem('authToken');
  },
};
