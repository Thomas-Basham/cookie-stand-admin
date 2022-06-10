import { useAuth } from "../contexts/auth";
export default function Header(props) {
  const { user, logout } = useAuth();
  if (props.user) {
    return (
      <header className="flex py-4 display bg-emerald-400">
        <h1 className="w-1/2 text-3xl font-bold text-gray-700 ">
          Cookie Stand Admin
        </h1>
        <div className="flex w-1/2 space-x-3 text-right">
        <p className="px-3 pt-1 bg-white rounded-md opacity-60 h-7">{user.username}USERNAME</p>
        <button className="px-2 pt-1 rounded-md h-7 bg-emerald-500" onClick={logout}>Log out</button>
        <p className="px-3 pt-1 bg-white rounded-md opacity-80 h-7">Overview</p>
        </div>
     
      </header>
    );
  } else {
    return (
      <header className="px-8 py-4 bg-emerald-500">
        <h1 className="text-3xl font-bold text-gray-700 ">
          Cookie Stand Admin
        </h1>
      </header>
    );
  }
}
