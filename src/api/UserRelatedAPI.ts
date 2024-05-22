import { useAuth } from "@clerk/clerk-react";

const productionUrl = 'https://backenduserapiv2-production.up.railway.app';
const developmentUrl = 'https://tolerant-vital-tetra.ngrok-free.app';
 
const baseUrl = productionUrl;

export interface OrderData {
    OrderId: string;
    UserId: string;
    Status: string;
    DeliveryAdress: string;
    CreatedAt: string;
    Products: Product[];
}

interface Product {
    ProductId: string;
    ProductQuantity: number;
}

interface Dish {
    name: string;
    description: string;
    price: number;
    imageUrl:string;
    category: string;
}

export async function getDishInfo(id: string) : Promise<Dish> {
    const response = await fetch(`https://restfullapi-production-374f.up.railway.app/api/dish/${id}`);
    const data = response.json().catch((error)=>console.error(error));
    return data;
}

export async function changeStatus(token: string | null, orderId: string, status: string): Promise<boolean> {
    if (!token) {
        throw new Error("No token provided");
    } 

    const response = await fetch(baseUrl + `/adminService/orders/${orderId}/status/${status}`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },

    });

    return response.ok;
}

export async function getOrders(token: string | null, orderId: string = "", status: string = "All"): Promise<OrderData[]> {

    if (!token) {
        throw new Error("No token provided");
    }

    if (orderId !== "" && status !== "All") {
        return await getOrdersByIdAndStatus(token, orderId, status);     
    } else if (orderId !== "") {
        return await getOrdersById(token, orderId);
    } else if (status !== "All") {
        return await getOrderByStatus(token, status);
    } else {
        return await getAllOrders(token);
    }
}

export async function getOrdersByIdAndStatus(token: string, orderId: string, status: string): Promise<OrderData[]> {
    const response = await fetch(baseUrl + "/adminService/orders/" + orderId + "/status/" + status, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });

    const data = await response.json();
    return data;
}

async function getAllOrders(token: string): Promise<OrderData[]> {
    const response = await fetch(baseUrl + "/adminService/orders", {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },

    });

    const data = await response.json();
    return data;
}

async function getOrdersById(token: string, orderId: string): Promise<OrderData[]> {
    const response = await fetch(baseUrl + "/adminService/orders/" + orderId, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });
    console.log(response);
    const data = await response.json();
    return data;
}


async function getOrderByStatus(token: string, status: string): Promise<OrderData[]> {
    const response = await fetch(baseUrl + "/adminService/orders/status/" + status, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });
    const data = await response.json();
    console.log("Get order by status")
    console.log(data);
    return data;
}
