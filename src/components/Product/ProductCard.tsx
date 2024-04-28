import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Input, Textarea } from "@nextui-org/input";
import {Select, SelectSection, SelectItem} from "@nextui-org/select";

type Categories = "Appetizers" | "Main Courses" | "Side Dishes" | "Desserts" | "Beverages";

const options: string[] = [
    "Appetizers", "Main Courses", "Side Dishes", "Desserts", "Beverages"
]

interface ProductCardProps {
    imgURL: string;
    title: string;
    description: string;
    price: number;
    category: Categories;
}

export default function ProductCard(props: ProductCardProps){

    return (
        <Card className="py-4 w-fit m-2.5">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <Tabs  fullWidth={false} className=" overflow-x-hidden gap-3 " variant="underlined">
            <Tab title="Image" >
            <Input variant={"flat"} label="Image" placeholder="Image URL" defaultValue={props.imgURL} labelPlacement="outside"/>
                <Image
                alt="Card background"
                className="object-cover rounded-xl mt-2.5"
                src="https://th.bing.com/th/id/OIG2.w.OiTJYkWOLIIjhKBvs8?pid=ImgGn"
                height={200}
                width={270}
                />
            </Tab>
            <Tab title="Properties" className="w-full">
                <Input variant={"flat"} label="Title" placeholder="Example title" defaultValue={props.title} labelPlacement="outside"/>
                <Textarea
                    label="Description"
                    labelPlacement="outside"
                    placeholder="Enter your description"
                    defaultValue={props.description}
                    className="black w-full mt-2.5"
                />
                <Input
                type="number"
                label="Price"
                placeholder="0.00"
                defaultValue={props.price.toString()}
                labelPlacement="outside"
                className="pt-4"
                startContent={
                    <div className="pointer-events-none flex items-center">
                    <span className="text-default-400 text-small">$</span>
                    </div>
                }/>
                <Select 
                label="Category" 
                className="max-w-xs mt-2.5" 
                defaultSelectedKeys={props.category}
                >
                    {options.map((option) => (
                    <SelectItem key={option} value={option}>
                        {option}
                    </SelectItem>
                    ))}
                </Select>
            </Tab>
          </Tabs>
          </CardHeader>
          <CardBody className="overflow-visible py-2">

            <div className="flex gap-3">
                <Button className="mt-4 grow" color="primary"> Update </Button>
                <Button className="mt-4 grow" color="primary"> Delete </Button>
            </div>
          </CardBody>
        </Card>
    );
}