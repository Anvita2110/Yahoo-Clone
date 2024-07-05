import {
  MdMic,
  MdMovie,
  MdNewspaper,
  MdSearch,
  MdSportsCricket,
} from "react-icons/md";
import ButtonLayout from "./ButtonLayout";
import { IoMdColorWand } from "react-icons/io";

export default function Body() {
  return (
    <div className="flex flex-col items-center justify-center bg-yellow-300 p-4 h-full">
      <h1 className="text-4xl font-semibold">Good Evening!</h1>
      <h3>Today is 27th June</h3>
      <div className="flex justify-center items-center bg-green-500 w-full p-4">
        <MdSearch className="translate-x-8" />
        <input
          className="h-12 px-60 rounded-3xl text-left"
          placeholder="Search the web"
        />
        <button className="border-l border-l-gray-400 -translate-x-12 pl-2">
          <MdMic className="text-blue-600 size-5" />
        </button>
      </div>
      <div className="flex gap-4 items-center">
        <ButtonLayout title="T20 World Cup">
          <MdSportsCricket />
        </ButtonLayout>

        <ButtonLayout title="Movies">
          <MdMovie />
        </ButtonLayout>

        <ButtonLayout title="News">
          <MdNewspaper />
        </ButtonLayout>

        <ButtonLayout title="Horoscope">
          <IoMdColorWand />
        </ButtonLayout>
      </div>
      <div className="bg-orange-400 h-70 w-auto p-4">
        <p className="text-slate-700 bg-slate-300 p-2 border-2 border-slate-200">
          As of August 26th, 2021 Yahoo India will no longer be publishing
          content. Your Yahoo Account, Mail and Search experiences will not be
          affected in any way and will operate as usual. We thank you for your
          support and readership.
        </p>
      </div>
    </div>
  );
}
