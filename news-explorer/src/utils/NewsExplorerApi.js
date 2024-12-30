const BASE_URL = "https://newsapi.org";
const API_KEY = "40158ecab28942288d49ae59249d5a09";

export const fetchNews = async (query) => {
  try {
    const fromDate = new Date();
    fromDate.setDate(fromDate.getDate() - 7);
    const toDate = new Date().toISOString().split("T")[0];

    const url = `${BASE_URL}/v2/everything?q=${query}&apiKey=${API_KEY}&from=${
      fromDate.toISOString().split("T")[0]
    }&to=${toDate}&pageSize=100`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Falha na requisição à API");
    }
    const data = await response.json();

    return data.articles;
  } catch (error) {
    throw new Error(error.message);
  }
};

