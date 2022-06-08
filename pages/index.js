import Head from "next/head";
import { hours } from "../data";
import { useState } from "react";

export default function Home() {
  const [state, setState] = useState({ storeData: [] });
  // console.log(state);

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <Main storeData={state} formHandler={formHandler} />
      <Footer />

      {/* <CalcCookies storeData={state} />
      <CalcCustomers storeData={state} /> */}
    </>
  );

  function formHandler(e) {
    e.preventDefault();
    let newStore = {
      Location: e.target.Location.value,
      minCustomers: e.target.MinimumCustomersPerHour.value,
      maxCustomers: e.target.MaximumCustomersPerHour.value,
      avgCookies: e.target.AverageCookiesPerHour.value,
      hours: hours,
      customersPerHour: CalcCustomers(e),
      sales: CalcCookies(e),
      totalCookies: salesTotals(),
    };

    setState([newStore]);

    // CalcCookies();
    // e.target.reset();

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
      <ReportTable storeData={props.storeData} />

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
            id="Location"
            type="string"
            placeholder="Barcelona"
            required
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
            id="MinimumCustomersPerHour"
            type="text"
            placeholder="2"
            required
          />
        </div>

        <div className="w-full px-3 mb-6 md:w-1/4 md:mb-0">
          <label className="block mb-2 text-xs font-bold tracking-wide text-center text-gray-700">
            Maximum Customers Per Hour
          </label>
          <input
            className="w-full px-4 py-3 leading-tight text-gray-700 placeholder-black border border-gray-200 rounded appearance-none bg-white-200 focus:outline-none focus:bg-white focus:border-gray-500"
            id="MaximumCustomersPerHour"
            type="text"
            placeholder="4"
            required
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
            required
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
  // console.log(JSON.stringify(props.storeData));
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

let sampleData = [
  {
    Location: "barcelona",
    minCustomers: "2",
    maxCustomers: "4",
    avgCookies: "4",
    hours: [
      "6am",
      "7am",
      "8am",
      "9am",
      "10am",
      "11am",
      "12pm",
      "1pm",
      "2pm",
      "3pm",
      "4pm",
      "5pm",
      "6pm",
      "7pm",
    ],
    customersPerHour: [0, 0, 0, 2, 0, 1, 2, 2, 2, 2, 0, 1, 1, 2],
    sales: [4, 8, 8, 4, 8, 0, 8, 0, 8, 0, 4, 8, 0, 4],
    totalCookies: 68,
  },
];

function ReportTable(props) {
  let storeHours = hours.map((hour, i) => {
    return <th key={i}>{hour}</th>;
  });
  // props.storeData

  if (props.storeData.length > 0) {
    console.log(props.storeData);
    let sales = props.storeData.map((hour, i) => {
      return hour.sales;
    });

    let storeTableData = props.storeData.map((store, i) => {
      let salesHourly = sales[i].map((hour, i) => {
        return <td key={i}>{hour}</td>;
      });
      return (
        <tr key={i}>
          <td>{store.Location}</td>
          {salesHourly}
          <td>{store.totalCookies}</td>
        </tr>
      );
    });
    return (
      <table>
        <tr>
          <thead>Location</thead>
          {storeHours}
          <thead>Totals</thead>
        </tr>
  
        {storeTableData}
  
        {/* <p>{cookieStands}</p> */}
      </table>


    )

    
  }
  // let sales = sampleData.map((hour, i) => {
  //   return hour.sales;
  // });
  // let storeTableData = sampleData.map((store, i) => {
  //   let salesHourly = sales[i].map((hour, i) => {
  //     return <td key={i}>{hour}</td>;
  //   });
  //   return (
  //     <tr key={i}>
  //       <td>{store.Location}</td>
  //       {salesHourly}
  //       <td>{store.totalCookies}</td>
  //     </tr>
  //   );
  // });
  // // console.log(props.storeData);

  return (
    <p>No Cookie Stands Available</p>

  );
}
