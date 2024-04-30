import { Input } from "@nextui-org/input";
import ProductCard from "../Product/ProductCard";


export default function SearchClient() {
    return(
        <section className="">
            <h1>Search Client Information</h1>
            <Input variant={"flat"} label="Title" placeholder="Example title" defaultValue="" labelPlacement="outside"/>
            <section className="flex flex-wrap justify-around">
            </section>
        </section>
    );
}