export default function Footer(props) {
  // console.log(props.resources)
  if (props.resources) {
    if (props.resources.length < 2) {
      return (
        <footer className="sticky px-8 py-4 bg-emerald-500 bott-0">
          <p className="text-xs text-center text-gray-700">
            {props.resources.length} LOCATION WORLD WIDE
          </p>
        </footer>
      );
    } else {
      return (
        <footer className="sticky px-8 py-4 bg-emerald-500 bott-0">
          <p className="text-xs text-center text-gray-700">
            {props.resources.length} LOCATIONS WORLD WIDE
          </p>
        </footer>
      );
    }
  }
}
