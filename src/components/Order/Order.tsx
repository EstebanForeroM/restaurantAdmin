import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/table";
import { getOrders } from "../../api/UserRelatedAPI";
import { useQuery } from "react-query";
import { useAuth } from "@clerk/clerk-react";
import { Button } from "@nextui-org/button";
import {Input} from "@nextui-org/react";
import OrderProducts from "./OrderProducts";
import { useState } from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import React from "react";
import {CircularProgress} from "@nextui-org/react";

type Category = "All" | "Pending" | "Delivered" | "In delivery";

export default function Order() {
  const {getToken} = useAuth();
  
  const [category , setCategory] = useState<Category>("All");
  const [inputValue, setInputValue] = useState("");
  const [userId, setUserId] = useState("");

  const { data: ordersData, isLoading } = useQuery({
    queryFn: () => getToken().then((token) => getOrders(token, userId, category)),
    queryKey: ['orders', userId, category],
    onError: () => setUserId(""),
    retry: 1,
  });
  
  if (isLoading) {
    return (
        <article className="flex justify-center align-center">
            <CircularProgress aria-label="Loading..." />
        </article>);
  }

  return (
    <>
      <section className="flex justify-center items-center gap-4">
        <Input
        isClearable
        type="text"
        label="User_ID"
        variant="bordered"
        placeholder="Enter the User_ID"
        defaultValue=""
        onClear={() => console.log("input cleared")}
        className="max-w-xs h-14"
        onChange={(e) => {setInputValue(e.target.value)}}
        />
        <Button className="h-14 p-2 bg-blue-600 hover:bg-blue-500 font-bold rounded-md text-white" onClick={() => setUserId(inputValue)}>Search</Button>
        <Dropdown >
                <DropdownTrigger>
                    <Button 
                    variant="bordered" 
                    className="h-14"
                    >
                    {category}
                    </Button>
                </DropdownTrigger>
                <DropdownMenu 
                    aria-label="Action event example" 
                    onAction={(key) => {
                        if (typeof key === "string") {
                            if (key === "All" || key === "Pending" || key === "In delivery" || key === "Delivered") {
                              setCategory(key);
                            }
                        }
                    }}>
                      <DropdownItem key="All" color="secondary" > All </DropdownItem>
                    <DropdownItem key="Pending" color="warning" >Pending</DropdownItem>
                    <DropdownItem key="In delivery" color="primary">In delivery</DropdownItem>
                    <DropdownItem key="Delivered" color="success">Delivered</DropdownItem>
                </DropdownMenu>
            </Dropdown>
      </section>
      { ordersData &&
      <section>
        {ordersData.map((order) => (<OrderProducts key={order.OrderId} OrderId={order.OrderId} DeliveryAdress={order.DeliveryAdress} 
        CreatedAt={order.CreatedAt} UserId={order.UserId} Status={order.Status} Products={order.Products}/>))}
      </section>
      }
    </>
  );
}
