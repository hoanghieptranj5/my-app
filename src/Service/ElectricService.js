import {getEndpoint} from "./Url/BackendServiceConstants";

const productionLink = "https://shanetestazurefunction.azurewebsites.net/api/electricPrices/usage/230";
const CALCULATE_URL = 'Calculator?usage=';

export const calculate = async (usage) => {
  return await fetch("https://shanetestazurefunction.azurewebsites.net/api/electricPrices/usage/" + usage.toString());
}