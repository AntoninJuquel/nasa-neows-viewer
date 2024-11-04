import Axios from "axios";
import { useNotifications } from "@/components/ui/notifications";
import { env } from "@/config/env";

export const api = Axios.create({
  baseURL: env.NASA_API_URL,
  params: {
    api_key: env.NASA_API_KEY,
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || error.message;
    useNotifications.getState().addNotification({
      type: "error",
      title: "Error",
      message,
    });

    return Promise.reject(error);
  }
);
