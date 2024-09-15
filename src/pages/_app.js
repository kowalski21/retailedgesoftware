import "@/styles/globals.css";
import { Toaster } from "sonner";
import { Fragment } from "react";
export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Toaster position="top-center" richColors />
      <Component {...pageProps} />;
    </Fragment>
  );
}
