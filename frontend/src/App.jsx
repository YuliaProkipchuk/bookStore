import "bootstrap-icons/font/bootstrap-icons.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Root from "./pages/Root";
import HomePage, { loader as homeLoader } from "./pages/Home";
import Error from "./pages/Error";
import BookPage, { loader as bookLoader } from "./pages/Book";
import AllBooksPage, { loader as allBooksLoader } from "./pages/AllBooks";
import CheckoutFail from "./components/CheckoutResults/CheckoutFail";
import CheckoutSuccess from "./components/CheckoutResults/CheckoutSuccess";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <Error />,
        loader: homeLoader,
      },
      { path: "checkout-success", element: <CheckoutSuccess /> },
      { path: "checkout-fail", element: <CheckoutFail /> },
      { path: "books", element: <AllBooksPage />, loader: allBooksLoader },
      { path: "books/:bookId", element: <BookPage />, loader: bookLoader },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
