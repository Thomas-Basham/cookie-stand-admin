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

  const { createResource } = useResource();
  // console.log(resources)
  return (
    <>
      <Index />
      {user ? (
        <>
          <Header user={user} />
          
          <Main
            resources={resources || []}
            storeData={state}
            deleteResource={deleteResource}
            formHandler={formHandler}
          />
          <Footer resources={resources} />
        </>
      ) : (
        <LoginForm login={login} />
      )}
    </>
  );

  function formHandler(e) {
    e.preventDefault();
    let newStore = {
      location: e.target.location.value,
      hourly_sales: CalcCookies(e),
      minimum_customers_per_hour: e.target.minimum_customers_per_hour.value,
      maximum_customers_per_hour: e.target.maximum_customers_per_hour.value,
      average_cookies_per_sale: e.target.AverageCookiesPerHour.value,
      owner: user.id,
      hours: hours,
      customersPerHour: CalcCustomers(e),
      totalCookies: salesTotals(),
    };

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
      // console.log('sstatate', state)
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

  function LoginForm({ login }) {
    async function handleSubmit(event) {
      event.preventDefault();
      login(event.target.username.value, event.target.password.value);
    }

    return (
      <form
        onSubmit={handleSubmit}
        className="relative justify-center w-full h-full max-w-screen-xl px-5 py-3 ml-auto mr-auto text-center border-4 border-solid rounded-md top-56 bg-emerald-200 border-emerald-300"
      >
        <fieldset autoComplete="off" className="flex flex-col p-4">
          <label htmlFor="username" className="py-4">
            USERNAME
          </label>
          <input className="border border-2 border-emerald-200" id="username" />
          <label htmlFor="password" className="py-4">
            PASSWORD
          </label>
          <input
            className="border border-2 border-emerald-200"
            type="password"
            id="password"
          />
          <button className="py-4 mt-4 rounded p bg-emerald-400">LOG IN</button>
        </fieldset>
      </form>
    );
  }
}
