const URL = process.env.REACT_APP_API_URL;

export const getRandomHanzi = async (length, token) => {
  return await fetch(`${URL}/hanzi/random/${length}`, {
    headers: {
      'Authorization': token
    }
  });
}