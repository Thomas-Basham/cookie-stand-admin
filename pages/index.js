import Head from "next/head";
import { useState } from 'react';

export default function Home()  {

  // const []
  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

function formHandler(event){
  event.preventDefault();
  event.target.reset()
  
}
function Header() {
  return (
    <header className="bg-green-500 py-6 px-8">
      <div>Cookie Stand Admin</div>
    </header>
  );
}

function Main() {
  return(
  <main className="flex flex-col items-center py-4 space-y-8">
    <CookieForm onSubmit={formHandler}/>

<p className="">Report Table Coming Soon...</p>
  </main>)
}

function Footer() {
  return (
    <footer className="bg-green-500 sticky bott-0 py-6 px-8">
      <p>©2022</p>
    </footer>
  );
}

function CookieForm(props){
return(

  <form onSubmit={props.onSubmit} className="flex w-1/2 p-2 bg-gray-600">

  <label >Location: </label>
  <input className="flex-auto pl-2" placeholder="Barcelona"  />

  <label >Minimum Customers Per Hour </label>
  <input className="flex-auto " placeholder="2"  />

  <label >Maximum Customers Per Hour</label>
  <input className="flex-auto " placeholder="4"  />
  
  <label >Location: </label>
  <input className="flex-auto " placeholder="2.5"  />

  <button type="submit" className="px-4 py-2 bg-gray-400 text-gray-50">Submit</button>
    
  </form>

)
}
