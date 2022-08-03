import { getEndpoint } from "../Url/BackendServiceConstants";

const CALCULATE_URL = 'Calculator?usage=';

export const calculate = async (usage) => {
  return await fetch(getEndpoint(CALCULATE_URL + usage.toString()));
}