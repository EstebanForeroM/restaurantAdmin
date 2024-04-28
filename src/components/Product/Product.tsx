import ProductCard from "./ProductCard";
import CreateCard from "./CreateCard";

export default function Product(){

    return (
        <section className="flex flex-wrap justify-around">
            <CreateCard/>
            <ProductCard imgURL="https://th.bing.com/th/id/OIG2.w.OiTJYkWOLIIjhKBvs8?pid=ImgGn" title="Rice" description="A lot of rice" price={99} category={"Appetizers"}/>
            <ProductCard imgURL="https://th.bing.com/th/id/OIG2.w.OiTJYkWOLIIjhKBvs8?pid=ImgGn" title="Rice" description="A lot of rice" price={99} category={"Appetizers"}/>
            <ProductCard imgURL="https://th.bing.com/th/id/OIG2.w.OiTJYkWOLIIjhKBvs8?pid=ImgGn" title="Rice" description="A lot of rice" price={99} category={"Appetizers"}/>
            <ProductCard imgURL="https://th.bing.com/th/id/OIG2.w.OiTJYkWOLIIjhKBvs8?pid=ImgGn" title="Rice" description="A lot of rice" price={99} category={"Desserts"}/>
            <ProductCard imgURL="https://th.bing.com/th/id/OIG2.w.OiTJYkWOLIIjhKBvs8?pid=ImgGn" title="Rice" description="A lot of rice" price={99} category={"Side Dishes"}/>
            <ProductCard imgURL="https://th.bing.com/th/id/OIG2.w.OiTJYkWOLIIjhKBvs8?pid=ImgGn" title="Rice" description="A lot of rice" price={99} category={"Main Courses"}/>
        </section>
    );
}