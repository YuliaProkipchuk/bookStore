import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { Provider } from "react-redux";
import { store } from "../store/store";
import Footer from "../components/Footer/Footer";
import { useState } from "react";
export default function Root() {
  const [key, setKey] = useState(0)
  return (
    <Provider store={store} >
      <Header setKey={setKey}/>
      <Outlet key={key}/>
      <Footer />
    </Provider>
  );
}
