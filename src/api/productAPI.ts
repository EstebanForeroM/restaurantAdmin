
const baseUrl = "restfullapi-production-4d58.up.railway.app";

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

export async function getProductsIds() : Promise<string[]> {
  const response = await fetch(baseUrl + "/api/dish", {
    method: "GET",
    headers: {
      "ngrok-skip-browser-warning": "any_value",
    },
  });
  const data = await response.json();
  return data;
}

export async function getProduct(id: string): Promise<Product> {
  const data = await fetch(baseUrl + "/api/dish/" + id, {
    method: "GET",
    headers: {
      "ngrok-skip-browser-warning": "any_value",
    },
  });
  return await data.json();
}
