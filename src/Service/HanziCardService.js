const productionLink = "https://shanetestazurefunction.azurewebsites.net/api/hanzi/db?skip=";
const productionLinkGetRandomHanzi = "https://shanetestazurefunction.azurewebsites.net/api/hanzi/random?numberOfChars=";

const localhostLink = "http://localhost:7071/api/hanzi/db?skip=";

const getHanziRangeUrl = (skip, take) => productionLink + skip + "&take=" + take;
const getRandomHanziUrl = (numberOfChars) => productionLinkGetRandomHanzi + numberOfChars;

export const getHanziRange = async (skip, take) => {
  return await fetch(getHanziRangeUrl(skip, take));
}

export const getRandomHanzi = async (numberOfChars) => {
  return await fetch(getRandomHanziUrl(numberOfChars));
}