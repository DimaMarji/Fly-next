import SharedLayout from "@/Layouts/SharedLayout/sharedLayout";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { appWithTranslation } from 'next-i18next'

const  App=({ Component, pageProps }: AppProps) =>{
  
  const queryClient = new QueryClient({})


  return (
    <QueryClientProvider client={queryClient}>
    <SharedLayout>
      <Component {...pageProps} />
    </SharedLayout>
    </QueryClientProvider>
  );
}
export default appWithTranslation(App)
