import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [state, setState] = useState({
    storeData: [],
  });

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <Main storeData={state} formHandler={formHandler} />
      <Footer />
    </>
  );

  function formHandler(e) {
    event.preventDefault();
    let newStore = {
      Location: e.target.Location.value,
      minCustomers: e.target.MinimumCustomersPerHour.value,
      maxCustomers: e.target.MaximumCustomersPerHour.checked,
      avgCookies: e.target.AverageCookiesPerHour.checked,
    };
    setState(newStore);
    event.target.reset();
  }
}
function Header() {
  return (
    <header className="bg-green-500 py-6 px-8">
      <div>Cookie Stand Admin</div>
    </header>
  );
}

function Main(props) {
  return (
    <main className="flex flex-col items-center py-4 space-y-8">
      <CookieForm onSubmit={props.formHandler} />

      <p className="">Report Table Coming Soon...</p>

      <DisplayJson storeData={props.storeData} />
    </main>
  );
}

function Footer() {
  return (
    <footer className="bg-green-500 sticky bott-0 py-6 px-8">
      <p>©2022</p>
    </footer>
  );
}

function CookieForm(props) {
  return (
    <form onSubmit={props.onSubmit} className="flex w-1/2 p-2 bg-gray-600">
      <label>Location</label>
      <input Id="Location" className="flex-auto pl-2" placeholder="Barcelona" />

      <label>Minimum Customers Per Hour</label>
      <input
        Id="MinimumCustomersPerHour"
        className="flex-auto "
        placeholder="2"
      />

      <label>Maximum Customers Per Hour</label>
      <input
        Id="MaximumCustomersPerHour"
        className="flex-auto "
        placeholder="4"
      />

      <label>Average Cookies Per Hour</label>
      <input
        Id="AverageCookiesPerHour"
        className="flex-auto "
        placeholder="2.5"
      />

      <button type="submit" className="px-4 py-2 bg-gray-400 text-gray-50">
        Submit
      </button>
    </form>
  );
}

function DisplayJson(props) {
  console.log(JSON.stringify(props.storeData));
  return <div>{JSON.stringify(props.storeData)== '{"storeData":[]}' ? 'Enter Some Data!' :  JSON.stringify(props.storeData) }</div>;
}
