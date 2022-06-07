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
      maxCustomers: e.target.MaximumCustomersPerHour.value,
      avgCookies: e.target.AverageCookiesPerHour.value,
    };
    setState(newStore);
    event.target.reset();
  }
}
function Header() {
  return (
    <header className="px-8 py-4 bg-emerald-500">
      <h1 className="text-xl text-gray-700">Cookie Stand Admin</h1>
    </header>
  );
}

function Main(props) {
  return (
    <main className="flex flex-col items-center py-4 pt-6 space-y-8">
      <CookieForm onSubmit={props.formHandler} />

      <p className="text-sm text-gray-500">Report Table Coming Soon...</p>

      <DisplayJson storeData={props.storeData} />
    </main>
  );
}

function Footer() {
  return (
    <footer className="sticky px-8 py-4 bg-emerald-500 bott-0">
      <p className="text-xs text-gray-700">©2022</p>
    </footer>
  );
}

function CookieForm(props) {
  return (
    
    <form
      onSubmit={props.onSubmit}
      className="w-full max-w-screen-lg px-5 py-3 rounded bg-emerald-300 "
    >
      <h1>Create Cookie Stand</h1>

      
      <div className="flex flex-wrap ">
        
        <div className="w-full px-3">
          <label
            className="text-xs font-bold tracking-wide text-gray-700 "
            htmlFor="Location"
          >
            Location
          </label>
          <input
            className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 placeholder-black border border-gray-200 rounded appearance-none bg-white-200 focus:outline-none focus:bg-white focus:border-gray-500"
            Id="Location"
            type="string"
            placeholder="Barcelona"
            required="true"
          />
        </div>
      </div>

      
      <div className="flex flex-wrap w-full mb-3">
        <div className="w-full px-3 mb-6 md:w-1/4 md:mb-0">
          <label className="block mb-2 text-xs font-bold tracking-wide text-center text-gray-700">
            Minimum Customers Per Hour
          </label>
          <input
            className="w-full px-4 py-3 leading-tight text-gray-700 placeholder-black border border-gray-200 rounded appearance-none bg-white-200 focus:outline-none focus:bg-white focus:border-gray-500"
            Id="MinimumCustomersPerHour"
            type="text"
            placeholder="2"
            required="true"
          />
        </div>
        
        
        <div className="w-full px-3 mb-6 md:w-1/4 md:mb-0">
          <label className="block mb-2 text-xs font-bold tracking-wide text-center text-gray-700">
            Maximum Customers Per Hour
          </label>
          <input
            className="w-full px-4 py-3 leading-tight text-gray-700 placeholder-black border border-gray-200 rounded appearance-none bg-white-200 focus:outline-none focus:bg-white focus:border-gray-500"
            Id="MaximumCustomersPerHour"
            type="text"
            placeholder="4"
            required="true"
          />
        </div>

        
        <div className="w-full px-3 mb-6 md:w-1/4 md:mb-0">
          <label className="block mb-2 text-xs font-bold tracking-wide text-center text-gray-700">
            Average Customers Per Sale
          </label>
          <input
            className="w-full px-4 py-3 leading-tight text-gray-700 placeholder-black border border-gray-200 rounded appearance-none bg-white-200 focus:outline-none focus:bg-white focus:border-gray-500"
            id="AverageCookiesPerHour"
            type="float"
            placeholder="2.5"
            required="true"
          />
        </div>

        
        <div className="w-full h-100 md:w-1/4 ">
          <button
            type="submit"
            className="block w-full h-full text-gray-700 rounded bg-emerald-500 "
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
      {JSON.stringify(props.storeData) == '{"storeData":[]}' ? (
        "Enter Some Data!"
      ) : (
        <p className="text-sm tracking-widest text-gray-500">
          {JSON.stringify(props.storeData)}
        </p>
      )}
    </div>
  );
}
