import { hours } from "../data";
export default function CookieForm(props) {
  return (
    <form
      onSubmit={props.onSubmit}
      className="w-full max-w-screen-xl px-5 py-3 border-4 border-solid rounded bg-emerald-200 border-emerald-300 "
    >
      {/* <h1 className="text-center text-gray-900">Create Cookie Stand</h1> */}

      <div className="flex flex-wrap ">
        
        <div className="w-3/4 px-3 text-center">
          <label
            className="text-xs font-bold tracking-wide text-gray-700 "
            htmlFor="location"
          >
            ADD LOCATION
          </label>
          <input
            className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 placeholder-black rounded appearance-none bg-white-200 focus:outline-none focus:bg-white focus:border-gray-500"
            id="location"
            type="string"
            placeholder="Barcelona"
            required
          />
        </div>
        
        <div className="flex items-center justify-center w-full h-100 md:w-1/4">
          <button
            type="submit"
            className="block w-full py-3 text-gray-700 rounded bg-emerald-500"
          >
            CREATE STAND
          </button>
        </div>
      </div>

      <div className="flex flex-wrap mb-3 ">
        <div className="w-full px-3 py-3 mb-6 rounded md:w-1/3 md:mb-0 ">
          <label className="block mb-2 text-xs font-bold tracking-wide text-center text-gray-700">
            MINIMUM CUSTOMERS PER HOUR
          </label>
          <input
            className="w-full px-4 py-3 leading-tight text-gray-700 placeholder-black rounded appearance-none bg-white-200 focus:outline-none focus:bg-white focus:border-gray-500"
            id="minimum_customers_per_hour"
            type="text"
            placeholder="2"
            required
          />
        </div>

        <div className="w-full px-3 py-3 mb-6 rounded b md:w-1/3 md:mb-0 ">
          <label className="block mb-2 text-xs font-bold tracking-wide text-center text-gray-700">
            MAXIMUM CUSTOMERS PER HOUR
          </label>
          <input
            className="w-full px-4 py-3 leading-tight text-gray-700 placeholder-black border border-gray-200 rounded appearance-none bg-white-200 focus:outline-none focus:bg-white focus:border-gray-500"
            id="maximum_customers_per_hour"
            type="text"
            placeholder="4"
            required
          />
        </div>

        <div className="w-full px-3 py-3 mb-6 rounded md:w-1/3 md:mb-0">
          <label className="block mb-2 text-xs font-bold tracking-wide text-center text-gray-700">
            AVERAGE COOKIES PER SALE
          </label>
          <input
            className="w-full px-4 py-3 leading-tight text-gray-700 placeholder-black border border-gray-200 rounded appearance-none bg-white-200 focus:outline-none focus:bg-white focus:border-gray-500"
            id="AverageCookiesPerHour"
            type="float"
            placeholder="2.5"
            required
          />
        </div>
      </div>
    </form>
  );
}
