import { MdSettings } from "react-icons/md";

export default function Footer() {
  return (
    <div className="flex justify-center p-4">
      <div className="flex flex-grow-7 gap-4 bg-fuchsia-300">
        <button className="hover:text-blue-700 text-sm">Help</button>
        <button className="hover:text-blue-700 text-sm">Privacy</button>
        <button className="hover:text-blue-700 text-sm">Terms</button>
        <button className="hover:text-blue-700 text-sm">
          Privacy dashboard
        </button>
      </div>
      <div className="flex flex-grow-3 items-center bg-violet-300">
        <MdSettings className="items-baseline" />
        <button>Settings</button>
      </div>
    </div>
  );
}
