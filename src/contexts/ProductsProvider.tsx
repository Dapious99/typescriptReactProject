import { ReactElement, createContext, useState } from "react"

export type ProductType = {
    item: string,
    name: string,
    price: number
}

const initState: ProductType[] = [
    {
            "item": "item001",
            "name": "bag",
            "price": 10
        },
        {
            "item": "item001",
            "name": "nature",
            "price": 5
        },
        {
            "item": "item001",
            "name": "shoe",
            "price": 9.67
        }
]

export type UseProductsContextType = {products: ProductType[]}

const initContextState: UseProductsContextType = {products: []}

const ProductsContext = createContext<UseProductsContextType>(initContextState)

type ChildrenType = {children?: ReactElement | ReactElement[]}

export const ProductsProvider = ({children}: ChildrenType): ReactElement => {
    const [products, setProducts] = useState<ProductType[]>(initState)
    
    return(
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContext