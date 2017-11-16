// @flow

const api = () => {
  const get = (endpoint: string, params?: string = ''): Promise<any> => new Promise((resolve, reject) => {
    fetch(`http://www.apilayer.net/api/${endpoint}?access_key=${API_KEY}&${params}`)
      .then(resp => resp.json())
      .then((resp) => {
        if (resp.success) {
          resolve(resp);
        } else {
          reject(resp);
        }
      })
      .catch(e => reject(e));
  });

  return {
    get,
  };
};

export default api();
