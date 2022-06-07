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
    <header className="bg-emerald-500 py-4 px-8">
      <h1 className="text-xl text-gray-700">Cookie Stand Admin</h1>
    </header>
  );
}

function Main(props) {
  return (
    <main className="flex flex-col items-center py-4 pt-6 space-y-8">
      <CookieForm onSubmit={props.formHandler} />

      <p className="text-gray-500 text-sm">Report Table Coming Soon...</p>

      <DisplayJson storeData={props.storeData} />
    </main>
  );
}

function Footer() {
  return (
    <footer className="bg-emerald-500 sticky bott-0 py-4 px-8">
      <p className="text-xs text-gray-700">©2022</p>
    </footer>
  );
}

function CookieForm(props) {
  return (
    

      <form onSubmit={props.onSubmit} className="w-full max-w-screen-lg bg-emerald-300 rounded px-5 py-3 ">
        <h1>Create Cookie Stand</h1>
        <div className="flex flex-wrap ">
          <div className="w-full px-3">
            <label
              className="tracking-wide text-gray-700 text-xs font-bold "
              htmlFor="Location"
            >
              Location
            </label>
            <input
              className="appearance-none placeholder-black block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              Id="Location"
              type="string"
              placeholder="Barcelona"
              required='true'
            />
          </div>
        </div>
        <div className="flex flex-wrap w-full mb-3">

          
          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
           
            <label
              className="block text-center tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Minimum Customers Per Hour
            </label>
            <input
              className="appearance-none placeholder-black w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              Id="MinimumCustomersPerHour"
              type="text"
              placeholder="2"
              required='true'
        
            />
          </div>
          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label
              className="block text-center tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Maximum Customers Per Hour
            </label>
            <input
              className="appearance-none placeholder-black w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              Id="MaximumCustomersPerHour"
              type="text"
              placeholder="4"
              required='true'
            />
          </div>
          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label
              className="block text-center tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Average Customers Per Sale
            </label>
            <input
              className="appearance-none placeholder-black w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="AverageCookiesPerHour"
              type="float"
              placeholder="2.5"
              required='true'
            />
          </div>
          <div className="h-100 w-full md:w-1/4 ">


            <button
              type="submit"
              className="h-full block w-full bg-emerald-500 text-gray-700  rounded "
            >
              Create
            </button>
          </div>
        </div>
      </form>
    
  );
}

function DisplayJson(props) {
  console.log(JSON.stringify(props.storeData));
  return (
    <div>
      {JSON.stringify(props.storeData) == '{"storeData":[]}'
        ? "Enter Some Data!"
        : 
        <p className="tracking-widest text-gray-500 text-sm">{JSON.stringify(props.storeData)}</p>}
    </div>
  );
}
