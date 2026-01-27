import axios from 'axios';
import { supabase } from '../lib/supabaseClient';

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api', // Fallback for dev without env
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor to add Auth Token to every request
apiClient.interceptors.request.use(async (config) => {
    try {
        const { data } = await supabase.auth.getSession();
        const session = data?.session;

        if (session?.access_token) {
            config.headers.Authorization = `Bearer ${session.access_token}`;
        }
    } catch (error) {
        console.error("Error attaching auth token:", error);
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// Interceptor to handle common errors (optional but good practice)
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        // You could handle global 401s here (redirect to login)
        if (error.response && error.response.status === 401) {
            console.warn("Unauthorized API call. Redirecting to login might be needed.");
        }
        return Promise.reject(error);
    }
);

export default apiClient;
