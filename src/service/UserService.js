import {getEndpoint} from "../url/backendServices";

const getListUsers = 'UserRole/list-users';

export const getUsers = async () => {
  return await fetch(getEndpoint(getListUsers));
}