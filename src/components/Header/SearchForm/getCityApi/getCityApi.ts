export const getCitiesApi = async (cityName: string) => {
  if (!cityName) {
    return [];
  }

  const BASE_URL = import.meta.env.VITE_BASE_URL

  const response = await fetch(
    BASE_URL + `/routes/cities?name=${cityName}`
  );

  if (!response.ok) {
    throw new Error("Ошибка при загрузке данных");
  }

  const data = await response.json();
  return data;
};
