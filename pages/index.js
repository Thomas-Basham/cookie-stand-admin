import Head from "next/head";
import { hours } from "../data";
import { useState } from "react";

import Index from "../components/Head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function Home() {
  const [state, setState] = useState([]);
  console.log(state);
  return (
    <>
      <Index />
      <Header />
      <Main storeData={state} formHandler={formHandler} />
      <Footer />
    </>
  );

  function formHandler(e) {
    e.preventDefault();
    let newStore = [
      {
        Location: e.target.Location.value,
        minCustomers: e.target.MinimumCustomersPerHour.value,
        maxCustomers: e.target.MaximumCustomersPerHour.value,
        avgCookies: e.target.AverageCookiesPerHour.value,
        hours: hours,
        customersPerHour: CalcCustomers(e),
        sales: CalcCookies(e),
        totalCookies: salesTotals(),
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
            e.target.MinimumCustomersPerHour.value,
            e.target.MaximumCustomersPerHour.value
          )
        );
      }
      return customersPerHour;
    }
  }
}
