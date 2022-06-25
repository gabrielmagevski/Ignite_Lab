import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4te1o7k01vx01t6f7cxgfcp/master",
  cache: new InMemoryCache()
})