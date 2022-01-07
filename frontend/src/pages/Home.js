import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/outline";
import { UserCircleIcon } from "@heroicons/react/solid";

import Navbar from "../components/Navbar";
import { getCurrentUser } from "../redux/actions/user";
import { ReactComponent as VideoIcon } from "../images/video.svg";
import { ReactComponent as PhotoIcon } from "../images/photo.svg";
import { ReactComponent as FeelingIcon } from "../images/feeling.svg";

export default function Home() {
  const dispatch = useDispatch();

  const user = useSelector((state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    token: state.auth.token,
    username: state.user.username,
    image: state.user.image,
    followers: state.user.followers,
    followings: state.user.followings,
  }));

  useEffect(() => {
    dispatch(getCurrentUser(user.token));
  }, [dispatch, user.token]);

  if (!user.isLoggedIn) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="bg-[#F0F2F5] min-h-screen">
      <Navbar />
      <div className="flex flex-col space-y-4 my-4">
        <div className="px-3 py-2 rounded-xl bg-white cursor-pointer">
          <div className="hover:bg-[#F0F2F5] flex items-center space-x-4 rounded-xl p-1">
            <div className="p-2 bg-[#DBE7F2] rounded-full">
              <PlusIcon className="h-6 text-[#056BE1]" />
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold">Create Story</h1>
              <p className="font-light text-gray-600">
                Share a photo or write something.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-xl bg-white px-3 py-2">
          <div className="flex items-center">
            {user.image === "" ? (
              <UserCircleIcon className="h-12 text-gray-300" />
            ) : (
              <img src={user.image} alt="" />
            )}
            <input
              type="text"
              placeholder={`What's on your mind, ${user.username}?`}
              className="bg-[#F0F2F5] px-3 py-2 flex-grow rounded-full focus:outline-none"
            />
          </div>
          <div className="border border-gray-200 flex-grow my-2"></div>
          <div className="grid grid-cols-3 gap-1">
            <div className="flex items-center justify-center p-2 space-x-4 hover:bg-[#F0F2F5] cursor-pointer rounded-lg">
              <VideoIcon className="fill-[#E8435A]" />
              <h1 className="text-gray-600 font-medium truncate">Live Video</h1>
            </div>
            <div className="flex items-center justify-center p-2 space-x-4 hover:bg-[#F0F2F5] cursor-pointer rounded-lg">
              <PhotoIcon className="fill-[#44B35D]" />
              <h1 className="text-gray-600 font-medium truncate">
                Photo/Video
              </h1>
            </div>
            <div className="flex items-center justify-center p-2 space-x-4 hover:bg-[#F0F2F5] cursor-pointer rounded-lg">
              <FeelingIcon className="fill-[#EAB134]" />
              <h1 className="text-gray-600 font-medium truncate">
                Feeling/Activity
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
