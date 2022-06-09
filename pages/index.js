import Head from "next/head";
import { hours } from "../data";
import { useState } from "react";
import { useAuth } from "../contexts/auth";
import useResource from "../hooks/useResource";

import Index from "../components/Head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function Home() {
  const [state, setState] = useState([]);
  const { user, login } = useAuth();
  const { resources, deleteResource } = useResource();
  // const { user } = useAuth();

  const { createResource } = useResource();
  // const [apiState, setAPIState] = useState([]);
  // console.log(state);
  console.log(user);
  return (
    <>
      <Index />
      <Header />
      <Main
        resources={resources || []}
        storeData={state}
        deleteResource={deleteResource}
        formHandler={formHandler}
      />
      <Footer />
      <LoginForm login={login} />
    </>
  );

  function formHandler(e) {
    e.preventDefault();
    let newStore = 
      {
        location: e.target.location.value,
        hourly_sales: CalcCookies(e),
        minimum_customers_per_hour: e.target.minimum_customers_per_hour.value,
        maximum_customers_per_hour: e.target.maximum_customers_per_hour.value,
        average_cookies_per_sale: e.target.AverageCookiesPerHour.value,
        owner: user.id,
        hours: hours,
        customersPerHour: CalcCustomers(e),
        totalCookies: salesTotals(),
      }
    

    let cookieJson = [
      {
        id: 1,
        location: "blah",
        description: "ppoooo",
        hourly_sales: null,
        minimum_customers_per_hour: 3,
        maximum_customers_per_hour: 3,
        average_cookies_per_sale: 4.0,
        owner: 1,
      },
    ];
    // console.log(state)
    
    setState(state.concat(newStore));
    
    function CalcCookies(e) {
      let salesNums = [];
      
      for (let i = 0; i < hours.length; i++) {
        salesNums.push(
          Math.ceil(CalcCustomers(e)[i] * e.target.AverageCookiesPerHour.value)
          );
        }
        return salesNums;
      }
      
      function salesTotals() {
      console.log('sstatate', state)
      let totalCookies = 0;
      for (let i = 0; i < hours.length; i++) {
        totalCookies += CalcCookies(e)[i];
      }
      return totalCookies;
    }

    function randomCustNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function CalcCustomers(e) {
      let customersPerHour = [];
      for (let i = 0; i < hours.length; i++) {
        customersPerHour.push(
          randomCustNumber(
            e.target.minimum_customers_per_hour.value,
            e.target.maximum_customers_per_hour.value
          )
        );
      }
      return customersPerHour;
    }


    createResource(newStore);
  }

  function LoginForm({ onLogin }) {
    async function handleSubmit(event) {
      event.preventDefault();
      login(event.target.username.value, event.target.password.value);
    }

    return (
      <form onSubmit={handleSubmit}>
        <fieldset autoComplete="off">
          <legend>Log In</legend>
          <label htmlFor="username">Username</label>
          <input name="username" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
          <button>Log In</button>
        </fieldset>
      </form>
    );
  }
}
