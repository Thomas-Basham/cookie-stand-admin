import CookieForm from "./CreateForm";
import ReportTable from "./ReportTable";
export default function Main(props) {
  return (
    <main className="flex flex-col items-center py-4 pt-6 space-y-8">
      <CookieForm onSubmit={props.formHandler} />
      <ReportTable resources={props.resources} deleteResource={props.deleteResource} storeData={props.storeData} />
    </main>
  );
}
