export const fetchListado = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Error al obtener listado");
  }
  return response.json();
};