
const URL = "https://d9frjnilz1.execute-api.us-east-2.amazonaws.com/Prod/api/Calculator?usage=";

export const calculate = async (usage) => {
  return await fetch(URL + usage.toString());
}