const getHanziRangeUrl = (skip, take) => "http://localhost:7071/api/hanzi/db?skip=" + skip + "&take=" + take;

export const getHanziRange = async (skip, take) => {
  return await fetch(getHanziRangeUrl(skip, take));
}