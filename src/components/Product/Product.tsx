import ProductCard from "./ProductCard";
import CreateCard from "./CreateCard";
import { getProductsIds } from "../../api/productAPI";
import { useQuery } from "react-query";

export default function Product(){

    const { data:products, isLoading } = useQuery({
        queryFn: () => getProductsIds(),
        queryKey: ['dishes'],
    }); 
    
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!products) {
        return <div>Products not found</div>;
    }


    return (
        <section className="flex flex-wrap justify-around">
            <CreateCard/>
            {products.map((id) => <ProductCard key={id} productId={id} />)}
        </section>
    );
}