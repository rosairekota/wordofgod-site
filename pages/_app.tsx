import "../styles/globals.css";
import type { AppProps } from "next/app";
import BaseLayout from "../layouts/BaseLayout";
import { Inter } from '@next/font/google'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  );
}
