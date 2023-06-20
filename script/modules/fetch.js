
const URL = 'https://gist.githubusercontent.com/Maksim-Methed/4566b524529c5076cff39764575b31e5/raw/c403579cc65a3cb45f945e25374ad5a2ccb0668c/';
const fetchRequest = async (postfix, {
  method = 'get',
  callback,
  body,
  headers,
}) => {
    console.log(`${URL}${postfix}`)
  try {
    const options = {
      method,
    };

    if (body) options.body = JSON.stringify(body);
    if (headers) options.headers = headers;

    const response = await fetch(`${URL}${postfix}`, options);

    if (response.ok) {
      const data = await response.json();
      if (callback) return callback(null, data);
      return;
    }

    throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
  } catch (err) {
    return callback(err);
  }
};

export default fetchRequest;