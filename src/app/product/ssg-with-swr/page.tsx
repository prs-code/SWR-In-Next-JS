import { SWRConfig, SWRConfiguration } from "swr";
import {Products} from "../page";
import ProductList from "../../../../components/productList";

interface ISsgWithSwr {
    fallback: SWRConfiguration['fallback'];
}

const Page = ({fallback}: ISsgWithSwr) => {
  return (
    <SWRConfig value={fallback}>
        <ProductList />
    </SWRConfig>
  )
}

export async function getStaticProps() {
    const URL = 'https://fakestoreapi.com/products?limit=4';
    const data = await fetch(URL).then(result => result.json());

    return {
        props: {
            fallback: {
                [URL]: data
            }
        }
    }
}

export default Page
