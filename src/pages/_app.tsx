import SharedLayout from "@/Layouts/SharedLayout/sharedLayout";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SharedLayout>
      <Component {...pageProps} />
    </SharedLayout>
  );
}
