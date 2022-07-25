const URL = "https://zn3bygyjy5.execute-api.us-west-1.amazonaws.com/Prod/UserRole/list-users";
const LOCAL_URL = "https://localhost:5001/UserRole/list-users";

export const getUsers = async () => {
  return await fetch(URL);
}