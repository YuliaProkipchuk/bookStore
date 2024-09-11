import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { Provider } from "react-redux";
import { store } from "../store/store";
import Footer from "../components/Footer/Footer";
export default function Root() {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
}
