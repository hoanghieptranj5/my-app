const URL = "https://0z8irnko40.execute-api.us-west-1.amazonaws.com/Prod/UserRole/users";
const LOCAL_URL = "https://localhost:5001/UserRole/list-users";

export const getUsers = async () => {
  return await fetch(URL);
}