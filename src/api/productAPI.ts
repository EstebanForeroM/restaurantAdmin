
const baseUrl = "https://formally-enhanced-mastodon.ngrok-free.app";

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

export async function getProductsIds() : Promise<string[]> {
  let response = await fetch(baseUrl + "/api/v1/dishes/allid", {
    method: "GET",
    headers: {
      "ngrok-skip-browser-warning": "any_value",
    },
  });
  let data = await response.json();
  return data;
}

export async function getProduct(id: string): Promise<Product> {
  let data = await fetch(baseUrl + "/api/v1/dishes/" + id, {
    method: "GET",
    headers: {
      "ngrok-skip-browser-warning": "any_value",
    },
  });
  return await data.json();
}