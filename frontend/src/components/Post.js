import {
  DotsHorizontalIcon,
  ThumbUpIcon,
  ChatIcon,
  ShareIcon,
} from "@heroicons/react/outline";
import { UserCircleIcon } from "@heroicons/react/solid";

function Post({ body, image, username, userImage, userId, _id, createdOn }) {
  return (
    <div className="bg-white rounded-xl flex flex-col px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {userImage === "" ? (
            <UserCircleIcon className="h-12 text-gray-300" />
          ) : (
            <img src={userImage} alt="" />
          )}
          <div className="flex flex-col">
            <h1 className="font-bold">{username}</h1>
            <p className="font-bold text-gray-600 text-xs">{createdOn}</p>
          </div>
        </div>
        <button>
          <DotsHorizontalIcon className="h-6 text-gray-600" />
        </button>
      </div>
      <div className="flex flex-col ml-2">
        <h1 className="text-gray-700" style={{ overflowWrap: "break-word" }}>
          {body}
        </h1>
        <div className="border border-gray-300 flex-grow my-2"></div>
        <div className="grid grid-cols-3 gap-1 flex-grow">
          <div className="flex items-center justify-center p-2 space-x-1 hover:bg-[#F0F2F5] cursor-pointer rounded-lg">
            <ThumbUpIcon className="text-gray-500 h-6" />
            <h1 className="text-gray-600 font-medium truncate">Like</h1>
          </div>
          <div className="flex items-center justify-center p-2 space-x-1 hover:bg-[#F0F2F5] cursor-pointer rounded-lg">
            <ChatIcon className="text-gray-500 h-6" />
            <h1 className="text-gray-600 font-medium truncate">Comment</h1>
          </div>
          <div className="flex items-center justify-center p-2 space-x-2 hover:bg-[#F0F2F5] cursor-pointer rounded-lg">
            <ShareIcon className="text-gray-500 h-6" />
            <h1 className="text-gray-600 font-medium truncate">Share</h1>
          </div>
        </div>
        <div className="border border-gray-300 flex-grow my-2"></div>
        <div className="flex items-center">
          {userImage === "" ? (
            <UserCircleIcon className="h-10 text-gray-300" />
          ) : (
            <img src={userImage} alt="" />
          )}
          <input
            type="text"
            placeholder={`What's on your mind, ${username}?`}
            className="bg-[#F0F2F5] px-3 py-1.5 flex-grow rounded-full focus:outline-none"
          />
        </div>
        {image !== "" ? (
          <div className="flex flex-grow my-2">
            <img className="flex-grow" src={image} alt="" />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Post;
