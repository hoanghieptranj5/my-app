import { getEndpoint } from "./Url/BackendServiceConstants";

const GET_HANZI_LIST = "Hanzi/list";
const FIND_HANZI = "Hanzi/find";
const GET_SINGLE_HANZI = "Hanzi"

export const getList = async () => {
  return await fetch(getEndpoint(GET_HANZI_LIST));
}

export const findSingle = async (simplifiedChar) => {
  return await fetch(getEndpoint(FIND_HANZI + "?id=" + simplifiedChar));
}

export const getSingle = async (id, strokes) => {
  return await fetch(getEndpoint(GET_SINGLE_HANZI + "?id=" + id + "&strokes=" + strokes));
}