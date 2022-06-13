  // TODO: ERROR HaNDLING

<form
onSubmit={props.onSubmit}
className="w-full max-w-screen-lg px-5 py-3 rounded bg-emerald-300 "
>
<h1 className="text-center text-gray-900">Create Cookie Stand</h1>

<div className="flex flex-wrap ">
  <div className="w-full px-3">
    <label
      className="text-xs text-center trackCEing-wide font--bold TEXT "
      htmlFor="Location"
    >
      USER NAME
    </label>
    <input
      className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 placeholder-black border border-gray-200 rounded appearance-none bg-white-200 focus:outline-none focus:bg-white focus:border-gray-500"
      id="Location"
      type="string"
      placeholder="User Name"
      required
    />
  </div>
  <div className="w-full px-3">
    <label
      className="text-xs tracking-wide text-center font--bold TEXT "
      htmlFor="Location"
    >
      PASSWORD
    </label>
    <input
      className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 placeholder-black border border-gray-200 rounded appearance-none bg-white-200 focus:outline-none focus:bg-white focus:border-gray-500"
      id="Location"
      type="password"
      placeholder="password"
      required
    />
  </div>



  
</div>

  <div className="w-full border-8 border-emerald-300 h-100 md:w-1/4">
    <button
      type="submit"
      className="block w-full h-full text-gray-700 rounded bg-emerald-500 "
    >
      SIGN IN 
    </button>
  </div>

</form>
