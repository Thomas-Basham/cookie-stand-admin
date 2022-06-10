import { hours } from "../data";

export default function ReportTable(props) {
  let storeHours = hours.map((hour, i) => {
    return (
      <th className="border border-2 border-emerald-500" key={i}>
        {hour}
      </th>
    );
  });
  // props.storeData

  if (props.resources.length > 0) {
    let sales = props.resources.map((hour, i) => {
      // sales = [[4, 8, 8, 4, 8,], [4, 8, 8, 4, 8,], [4, 8, 8, 4, 8,], .....]
      return hour.hourly_sales;
    });
    // console.log(sales);

    let storeTableData = props.resources.map((store, i) => {
      let salesHourly = sales[i].map((hour, i) => {
        return <td key={i}>{hour}</td>;
      });

      console.log(store.id);
      return (
        <tr key={i} className="even:bg-emerald-200 odd:bg-emerald-300">
          <td className="pl-4 pr-2 font-bold text-left ">
            {store.location}
            <DeleteButton
              deleteResource={props.deleteResource}
              id={store.id}
            />{" "}
          </td>
          {salesHourly}
          <td>{store.totalCookies}</td>
        </tr>
      );
    });

    // https://stackoverflow.com/questions/36305268/get-sum-of-array-columns-in-javascript
    let result = sales.reduce(function (r, a) {
      a.forEach(function (b, i) {
        r[i] = (r[i] || 0) + b;
      });
      return r;
    }, []);
    let totalRow = result.map((hour, i) => {
      return (
        <td className="font-normal" key={i}>
          {hour}
        </td>
      );
    });
    // console.log("result", result);

    let grandGrandTotal = props.resources.map((total, i) => {
      return total.totalCookies;
    });

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    let muchoGrandTotal = grandGrandTotal.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );

    return (
      // Big thanks to Eden Brekke for this one
      <table className="w-full max-w-screen-xl rounded table-fit bg-emerald-400">
        <thead>
          <td>Location</td>
          {storeHours}
          <td>Totals</td>
        </thead>

        <tbody className="border-2 border-emerald-200 ">{storeTableData}</tbody>

        <tfoot className="font-bold">
          <td>Totals</td>
          {totalRow}
          <td className="font-normal">{muchoGrandTotal}</td>
        </tfoot>
      </table>
    );
  }

  return <p>No Cookie Stands Available</p>;

  function DeleteButton(props) {
    function clickHandler() {
      props.deleteResource(props.id);
    }

    return (
      <button onClick={clickHandler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-4 text-red-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    );
  }
}
