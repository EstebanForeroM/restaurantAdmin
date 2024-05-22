
interface Props {
    productsIds: string[]
}

const ProductsInfo = (props: Props) => {
  return (
    <>
      {props.productsIds.map(productId => <h1>{productId}</h1>)}
    </>
  )
}

export default ProductsInfo
