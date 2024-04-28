import { Input } from "@nextui-org/input";
import ProductCard from "../Product/ProductCard";


export default function SearchClient() {
    return(
        <section className="">
            <h1>Search Client Information</h1>
            <Input variant={"flat"} label="Title" placeholder="Example title" defaultValue="" labelPlacement="outside"/>
            <section className="flex flex-wrap justify-around">
            <ProductCard imgURL="https://th.bing.com/th/id/OIG2.w.OiTJYkWOLIIjhKBvs8?pid=ImgGn" title="Rice" description="A lot of rice" price={99} category={"Appetizers"}/>
            <ProductCard imgURL="https://th.bing.com/th/id/OIG2.w.OiTJYkWOLIIjhKBvs8?pid=ImgGn" title="Rice" description="A lot of rice" price={99} category={"Appetizers"}/>
            <ProductCard imgURL="https://th.bing.com/th/id/OIG2.w.OiTJYkWOLIIjhKBvs8?pid=ImgGn" title="Rice" description="A lot of rice" price={99} category={"Appetizers"}/>
            <ProductCard imgURL="https://th.bing.com/th/id/OIG2.w.OiTJYkWOLIIjhKBvs8?pid=ImgGn" title="Rice" description="A lot of rice" price={99} category={"Desserts"}/>
            <ProductCard imgURL="https://th.bing.com/th/id/OIG2.w.OiTJYkWOLIIjhKBvs8?pid=ImgGn" title="Rice" description="A lot of rice" price={99} category={"Side Dishes"}/>
            <ProductCard imgURL="https://th.bing.com/th/id/OIG2.w.OiTJYkWOLIIjhKBvs8?pid=ImgGn" title="Rice" description="A lot of rice" price={99} category={"Main Courses"}/>
            </section>
        </section>
    );
}