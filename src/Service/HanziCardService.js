
const productionLink = "https://shanetestazurefunction.azurewebsites.net/api/hanzi/db?skip=";
const localhostLink = "http://localhost:7071/api/hanzi/db?skip=";
const getHanziRangeUrl = (skip, take) => productionLink + skip + "&take=" + take;

export const getHanziRange = async (skip, take) => {
  return await fetch(getHanziRangeUrl(skip, take));
}