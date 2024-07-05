import YahooLogo from "./assets/Yahoo-2019.svg";
import { MdMail, MdApps } from "react-icons/md";

export default function Header() {
  return (
    <div className="flex bg-fuchsia-500 w-screen">
      <div className="flex items-center h-30 w-15 bg-blue-400">
        <img src={YahooLogo} className="h-20 w-15" />
      </div>
      <div className="flex justify-end items-center gap-4">
        <MdMail />
        <MdApps />
      </div>
    </div>
  );
}
