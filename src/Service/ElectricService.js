const URL = process.env.REACT_APP_API_URL;

export const calculate = async (usage, token) => {
  return await fetch(`${URL}/electricPrices/usage/${usage}`, {
    headers: {
      Authorization: token,
    },
  });
};
