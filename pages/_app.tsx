import ProtectedRoute from "@/context/authcontext";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const noAuthRequired = ["/auth/login", "/auth/signup"];
export default function MyApp({ Component, pageProps }: any) {
  const router = useRouter();
  const getLayout = Component.getLayout ?? ((page: any) => page);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {noAuthRequired.includes(router.pathname) ? (
          <>{getLayout(<Component {...pageProps} />)}</>
        ) : (
          <ProtectedRoute>
            {getLayout(<Component {...pageProps} />)}
          </ProtectedRoute>
        )}
        <ToastContainer />
      </PersistGate>
    </Provider>
  );
}
