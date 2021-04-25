import React from "react";
import Cart from "../Components/Cart";
import Categories from "../Components/Categories";
import Login from "../Components/Login";
import Logout from "../Components/Logout";
import Contact from "../Components/Contact";
import HomePage from "../Components/HomePage";
import Products from "../Components/Products";
import SignUp from "../Components/SignUp";
import ForgotPass from "../Components/ForgotPass";
import CheckOut from "../Components/CheckOut";
import Error500 from "../Components/ErrorPages/Error500";
import ChooseLogout from "../Components/ChooseLogoutAction";

const Routes = {
  "/": () => <HomePage />,
  "/home": () => <HomePage />,
  "/categories": () => <Categories />,
  "/cart": () => <Cart />,
  "/login": () => <Login />,
  "/login/:errId": ({errId}) => <Login errorId={errId} />,
  "/logout": () => <Logout />,
  "/support": () => <Contact />,
  "/products/:id": ({id}) => <Products id={id} />,
  "/signup": () => <SignUp />,
  "/forgotpassword": () => <ForgotPass />,
  "/checkout": () => <CheckOut />,
  "/error": () => <Error500 />,
  "/chooseLogout": () =>  <ChooseLogout />
};

export default Routes;