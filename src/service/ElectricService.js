
const URL = "https://0z8irnko40.execute-api.us-west-1.amazonaws.com/Prod/api/Calculator?usage=";

export const calculate = async (usage) => {
  return await fetch(URL + usage.toString());
}