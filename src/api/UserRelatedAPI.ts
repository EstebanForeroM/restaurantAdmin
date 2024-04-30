import axios from "axios";

const baseUrl = 'https://backenduserapi-production.up.railway.app';

export interface OrderData {
    OrderId: string;
    UserId: string;
    DeliveryAdress: string;
    OrderedAt: string;
    Products: string[];
}

export async function getOrders(): Promise<OrderData[]> {
  const response = await fetch(baseUrl + "/orders");
  console.log(response)
  let data = await response.json();
  return data;
}