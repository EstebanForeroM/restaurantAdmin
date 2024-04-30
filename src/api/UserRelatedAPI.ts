import axios from "axios";

const baseUrl = 'backenduserapi-production.up.railway.app';

interface OrderData {
    orderId: string;
    userId: string;
    address: string;
    created: string;
}

export async function getOrders(): Promise<OrderData[]> {
  return (await axios.get<OrderData[]>(baseUrl + '/orders')).data;
}