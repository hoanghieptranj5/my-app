
const URL = "https://zn3bygyjy5.execute-api.us-west-1.amazonaws.com/Prod/api/Calculator?usage=";

export const calculate = async (usage) => {
  return await fetch(URL + usage.toString());
}