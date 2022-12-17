const API_URL = "http://localhost:3000/api";
const ENDPOINT = "jokes";

export const getJokes = async () => {
  let isError = false;
  try {
    const url = `${API_URL}/${ENDPOINT}`;

    const res = await fetch(url);

    const data = await res.json();

    return {
      ...data,
      isError,
    };
  } catch (e) {
    isError = true;
    return {
      data: [],
      isError,
    };
  }
};
