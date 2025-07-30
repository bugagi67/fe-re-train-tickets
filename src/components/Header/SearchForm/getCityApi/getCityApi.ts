export const getCitiesApi = async (cityName: string, skip: boolean) => {
  if (!cityName || skip) {
    return [];
  }

  const BASE_URL = import.meta.env.VITE_BASE_URL

  try {
    const response = await fetch(
      BASE_URL + `/routes/cities?name=${cityName}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка при загрузке городов:", error);
    throw error;
  }


};
