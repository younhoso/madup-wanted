/* eslint-disable class-methods-use-this */
import axios, { AxiosInstance, AxiosResponse } from 'axios';

class HttpAxios {
  private instance: AxiosInstance;

  constructor(baseURL: string | undefined, tokenRepository: object = {}) {
    this.instance = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
        ...tokenRepository,
      },
    });
  }

  private initiRequestInterceptor = () => {
    this.instance.interceptors.request.use((config) => config, this.handleResponse);
  };

  private initiResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      (config) => config,
      (error) => error.response
    );
  };

  private handleResponse = ({ data }: AxiosResponse) => data;

  protected handleError = (error: any) => Promise.reject(error);
}

export default HttpAxios;
