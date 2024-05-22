import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";
import { OrderData, changeStatus } from "../../api/UserRelatedAPI";
import MealOrder from "./MealOrder";
import { Button } from "@nextui-org/button";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { useMutation } from "react-query";
import { useAuth } from "@clerk/clerk-react";
import { useState } from "react";

export default function OrderProducts( props: OrderData){
    const {getToken} = useAuth();

    const [state , setState]  = useState(props.Status);

    const {mutate : mutateStatus} = useMutation({
        mutationFn: (status: string) => getToken().then((token) => changeStatus(token, props.OrderId, status)),
    })
    
    return (
        <article className="flex flex-wrap gap-3 shadow-lg rounded-md m-5 p-3 justify-between items-center">
            <h1>ID : {props.OrderId}</h1>
            <h1>UserID : {props.UserId}</h1>
            <h1>Status : {props.Status}</h1>
            <h1>Delivery Adress : {props.DeliveryAdress}</h1>
            <h1>Created At : {props.CreatedAt}</h1>
            <div className="flex gap-4">
            <Popover placement="bottom" showArrow offset={10}>
                <PopoverTrigger>
                    <Button color="primary" className="font-bold"> Show Products</Button>
                </PopoverTrigger>
                <PopoverContent className="w-[320px] max-h-96 overflow-y-auto scrollbar-hide">
                    {() => (
                    <div className="px-1 py-2 w-full">
                        <div className="mt-2 flex flex-col gap-2 w-full pt-1">
                            {props.Products.map((product) => <MealOrder mealId={product.ProductId} quantity={product.ProductQuantity}/>)} 
                        </div>
                    </div>
                    )}
                </PopoverContent>
          </Popover>
          <Dropdown >
                <DropdownTrigger>
                    <Button 
                    variant="bordered" 
                    >
                    {state}
                    </Button>
                </DropdownTrigger>
                <DropdownMenu 
                    aria-label="Action event example" 
                    onAction={(key) => {
                        if (typeof key === "string") {
                            mutateStatus(key);
                            setState(key);
                        }
                    }}>
                    <DropdownItem key="Pending" color="warning" >Pending</DropdownItem>
                    <DropdownItem key="In delivery" color="primary">In delivery</DropdownItem>
                    <DropdownItem key="Delivered" color="success">Delivered</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            </div>
        </article>
    );
}