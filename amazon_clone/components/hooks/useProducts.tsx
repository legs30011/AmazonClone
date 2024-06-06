import { GET_PRODUCTS } from '@/lib/graphql/query'
import { useQuery } from '@apollo/client'

const useProducts =() =>{
    const { loading, error, data } = useQuery(GET_PRODUCTS);
    return{loading, error, data};
}

export default useProducts
