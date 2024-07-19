import axios, { AxiosHeaders } from "axios";
import { API_ENDPOINT_BASE } from "./constants";


export const getCSRFToken = async (): Promise<string> => {
    const res = await axios.get(`${API_ENDPOINT_BASE}/api/csrf/`, {});
    const headers = res.headers
    if (headers instanceof AxiosHeaders && headers.has('X-CSRFToken')) {
      return headers.get("X-CSRFToken") as string
    }
    throw new Error('no X-CSRFToken in headers')
  };

  
  export const getConnectionToken = async () => {
    const response = await axios.get(`${API_ENDPOINT_BASE}/api/token/connection/`, {})
    return response.data.token;
  }

  export const getSubscriptionToken = async (channel: string) => {
    const response = await axios.get(`${API_ENDPOINT_BASE}/api/token/subscription/`, {
      params: { channel: channel }
    });
    return response.data.token;
  }