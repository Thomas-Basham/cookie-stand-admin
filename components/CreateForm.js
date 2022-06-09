import { hours } from "../data";
export default function CookieForm(props) {
  return (
    <form
      onSubmit={props.onSubmit}
      className="w-full max-w-screen-lg px-5 py-3 rounded bg-emerald-300 "
    >
      <h1 className="text-center text-gray-900">Create Cookie Stand</h1>

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

      <div className="flex flex-wrap mb-3 ">
        <div className="w-full px-3 py-3 mb-6 border-4 rounded md:w-1/4 md:mb-0 bg-emerald-200 border-emerald-300">
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

        <div className="w-full px-3 py-3 mb-6 border-4 rounded border-emerald-300 md:w-1/4 md:mb-0 bg-emerald-200">
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

        <div className="w-full px-3 py-3 mb-6 border-4 border-r-8 rounded border-emerald-300 md:w-1/4 md:mb-0 bg-emerald-200">
          <label className="block mb-2 text-xs font-bold tracking-wide text-center text-gray-700">
            Average Cookies Per Sale
          </label>
          <input
            className="w-full px-4 py-3 leading-tight text-gray-700 placeholder-black border border-gray-200 rounded appearance-none bg-white-200 focus:outline-none focus:bg-white focus:border-gray-500"
            id="AverageCookiesPerHour"
            type="float"
            placeholder="2.5"
            required
          />
        </div>

        <div className="w-full border-8 border-emerald-300 h-100 md:w-1/4">
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
