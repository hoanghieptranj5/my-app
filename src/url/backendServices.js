const BASE_URL = 'https://zn3bygyjy5.execute-api.us-west-1.amazonaws.com/Prod/api/';
const LOCAL_URL = 'https://localhost:5001/api/'

export const getLocalEndpoint = (suffix) => BASE_URL + suffix;
export const getEndpoint = (suffix) => BASE_URL + suffix;
