This is an example using TypeScript in the Next.js framework, where data is fetched from the server in three different pages, as an example for comparison. The API "https://fakestoreapi.com/" has been used to make requests.

1-/product: In this page, we use simple fetching in the program

2-/product/swr: In this page, we use swr to fetch data in a client side manner

3-/product/ssg-with-swr: In this page, we combine getStaticProps with swr on the client side For this purpose, we have used swrConfig which is actually a context The advantage of this method is that for the first time when the page is loaded, the data is received from the server and in each update of the data, the new data is received and updated using swr