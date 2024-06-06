import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
    link:new HttpLink({
        uri:"https://api-sa-east-1.hygraph.com/v2/clwz366kw00vd06uvyqppylhm/master",
        useGETForQueries: true,
    }),
    cache: new InMemoryCache(),
  });

export  default client;