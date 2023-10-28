import useSWR from "swr";
import {Products} from '../src/app/product/page';
import Product from '../components/product';

interface ISsgWithSwr extends Products{}

const fetchHandler = async (input: RequestInfo, init?: RequestInit) => {
    const data = await fetch(input, init).then(res => res.json());
    return data;
};

const ProductList = () => {
  const URL = 'https://fakestoreapi.com/products?limit=4';
    const {data} = useSWR(URL, fetchHandler)

  return (
    <div>
        {
            data.map((product: ISsgWithSwr) => {
                <Product key={product.id} data={product}/>
            })
        }
    </div>
  )
}

export default ProductList