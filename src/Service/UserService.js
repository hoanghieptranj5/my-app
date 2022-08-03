import {getEndpoint} from "../Url/BackendServiceConstants";

const getListUsers = 'UserRole/list-users';

export const getUsers = async () => {
  return await fetch(getEndpoint(getListUsers));
}