export default function axiosInstanceSetup(axios: any) {
  axios.create({
    baseURL: import.meta.env.VITE_API_PATH,
    // timeout: 1000,
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
  });

  axios.interceptors.request.use(
    (config: any) => {
      if (localStorage.getItem('token')) {
        config.headers['Authorization'] = `Bearer ${localStorage.getItem(
          'token'
        )}`;
      }
      config.url = import.meta.env.VITE_API_PATH + config.url;
      return config;
    },
    (error: any) => {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response: any) => response,
    (error: any) => {
      // if (error.response.status === 401) {
      //   localStorage.removeItem('token');
      // window.location = '/login';
      // }
      return Promise.reject(error);
    }
  );
}

// export default instance;

// export default function (
//   method: string,
//   url: string,
//   data = null,
//   config: AxiosRequestConfig<any> | undefined
// ) {
//   switch (method) {
//     case 'get':
//       return instance.get(url, config);
//     case 'post':
//       return instance.post(url, data, config);
//     case 'put':
//       return instance.put(url, data, config);
//     case 'delete':
//       return instance.delete(url, config);
//     default:
//       return instance.get(url, config);
//   }
// }
