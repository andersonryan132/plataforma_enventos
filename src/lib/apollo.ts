import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4otzkn614ts01xkgxxeciyn/master',
    cache: new InMemoryCache()
})

