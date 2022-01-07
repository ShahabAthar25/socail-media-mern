import {
  SearchIcon,
  MenuIcon,
  ChevronDownIcon,
  BellIcon,
  ChatIcon,
  PlusIcon,
} from "@heroicons/react/outline";

import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as Friends } from "../images/friends.svg";
import { ReactComponent as Gaming } from "../images/gaming.svg";
import { ReactComponent as Home } from "../images/home.svg";
import { ReactComponent as MarketPlace } from "../images/marketPlace.svg";
import { ReactComponent as Watch } from "../images/watch.svg";

export default function Navbar() {
  return (
    <div className="shadow-lg px-4 py-1 flex items-center justify-between bg-white">
      <div className="flex">
        <div className="space-x-2 flex items-center">
          <Logo />
          <div className="text-gray-400 bg-[#F0F2F5] rounded-full p-2 md:hidden">
            <SearchIcon className="h-6" />
          </div>
        </div>
        <form className="hidden md:flex items-center bg-[#F0F2F5] rounded-full p-2 mx-2">
          <SearchIcon className="h-6 text-gray-400" />
          <input
            type="text"
            placeholder="Search Facebook"
            className="bg-transparent focus:outline-none"
          />
        </form>
        <div className="hover:bg-[#F0F2F5] mx-3 p-2 rounded-lg sm:hidden">
          <MenuIcon className="h-8" />
        </div>
      </div>
      <div className="hidden sm:flex items-center justify-center flex-grow max-w-md">
        <div className="py-3 flex-grow flex flex-col items-center justify-center rounded-lg cursor-pointer">
          <Home />
        </div>
        <div className="hover:bg-[#F0F2F5] py-3 flex-grow flex items-center justify-center rounded-lg cursor-pointer">
          <Friends />
        </div>
        <div className="hover:bg-[#F0F2F5] py-3 flex-grow flex items-center justify-center rounded-lg cursor-pointer">
          <Watch />
        </div>
        <div className="hover:bg-[#F0F2F5] py-3 flex-grow flex items-center justify-center rounded-lg cursor-pointer">
          <MarketPlace />
        </div>
        <div className="hover:bg-[#F0F2F5] py-3 flex-grow flex items-center justify-center rounded-lg cursor-pointer">
          <Gaming />
        </div>
      </div>
      <div className="flex space-x-2">
        <div className="bg-[#D8DADF] hover:bg-[#d3d4d6] p-2 rounded-full hidden sm:flex">
          <PlusIcon className="h-6" />
        </div>
        <div className="bg-[#D8DADF] hover:bg-[#d3d4d6] p-2 rounded-full">
          <ChatIcon className="h-6" />
        </div>
        <div className="bg-[#D8DADF] hover:bg-[#d3d4d6] p-2 rounded-full hidden sm:flex">
          <BellIcon className="h-6" />
        </div>
        <div className="bg-[#D8DADF] hover:bg-[#d3d4d6] p-2 rounded-full">
          <ChevronDownIcon className="h-6" />
        </div>
      </div>
    </div>
  );
}
