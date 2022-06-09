import { hours } from "../data";

export default function ReportTable(props) {
  let storeHours = hours.map((hour, i) => {
    return <th key={i}>{hour}</th>;
  });
  // props.storeData

  if (props.storeData.length > 0) {
    // console.log(props.storeData);
    let sales = props.storeData.map((hour, i) => {
      // sales = [[4, 8, 8, 4, 8,], [4, 8, 8, 4, 8,], [4, 8, 8, 4, 8,], .....]
      return hour.hourly_sales;
    });
    console.log(sales);

    let storeTableData = props.storeData.map((store, i) => {
      let salesHourly = sales[i].map((hour, i) => {
        return <td key={i}>{hour}</td>;
      });

      return (
        <tr key={i} className="even:bg-emerald-300 odd:bg-emerald-400">
          <td className="pl-4 pr-2 text-left ">{store.Location}</td>
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
      return <td key={i}>{hour}</td>;
    });
    console.log("result", result);

    let grandGrandTotal = props.storeData.map((total, i) => {
      return total.totalCookies;
    });

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    let muchoGrandTotal = grandGrandTotal.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
    return (
      // Big thanks to Eden Brekke for this one
      <table className="w-full max-w-screen-lg rounded table-fit bg-emerald-500">
        <thead>
          <th>Location</th>
          {storeHours}
          <th>Totals</th>
        </thead>

        <tbody className="border-2 border-gray-300 ">{storeTableData}</tbody>

        <tfoot className="font-bold">
          <td>Totals</td>
          {totalRow}
          <td>{muchoGrandTotal}</td>
        </tfoot>
      </table>
    );
  }

  return <p>No Cookie Stands Available</p>;
}
