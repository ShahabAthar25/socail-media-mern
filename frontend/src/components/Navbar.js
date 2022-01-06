import {
  SearchIcon,
  MenuIcon,
  ChevronDownIcon,
  BellIcon,
  ChatIcon,
  PlusIcon,
} from "@heroicons/react/outline";

import { ReactComponent as Logo } from "../images/logo.svg";

export default function Navbar() {
  return (
    <div className="shadow-lg px-4 py-1 flex items-center justify-between">
      <div className="flex">
        <div className="space-x-2 flex items-center">
          <Logo className="" />
          <div className="text-gray-400 bg-[#F0F2F5] rounded-full p-2">
            <SearchIcon className="h-6" />
          </div>
        </div>
        <div className="hover:bg-[#F0F2F5] mx-5 p-2 rounded-lg">
          <MenuIcon className="h-8" />
        </div>
      </div>
      <div className="flex space-x-2">
        <div className="bg-[#D8DADF] hover:bg-[#d3d4d6] p-2 rounded-full">
          <PlusIcon className="h-6" />
        </div>
        <div className="bg-[#D8DADF] hover:bg-[#d3d4d6] p-2 rounded-full">
          <ChatIcon className="h-6" />
        </div>
        <div className="bg-[#D8DADF] hover:bg-[#d3d4d6] p-2 rounded-full">
          <BellIcon className="h-6" />
        </div>
        <div className="bg-[#D8DADF] hover:bg-[#d3d4d6] p-2 rounded-full">
          <ChevronDownIcon className="h-6" />
        </div>
      </div>
    </div>
  );
}
