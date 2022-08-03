import {getEndpoint} from "./Url/BackendServiceConstants";

const GET_LIST_USERS = 'UserRole/list-users';

export const getUsers = async () => {
  return await fetch(getEndpoint(GET_LIST_USERS));
}