import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams, Link } from "react-router-dom";
import CommnetsConatiner from "./CommnetsConatiner";
import { YOUTUBE_VIDEO_BYID, YOUTUBE_VIDEOS_API } from "../utils/constants";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { PiShareFat } from "react-icons/pi";
import { GoDownload } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa6";
import LiveChat from "./LiveChat"; // Assuming you have this component

const Watchpage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoDetails = YOUTUBE_VIDEO_BYID + searchParams.get("v");
  const [videoInfo, setVideoInfo] = useState([]);
  const [suggestionVideo, setSuggestionVideo] = useState([]);

  useEffect(() => {
    const getVideoInfo = async () => {
      const data = await fetch(videoDetails);
      const json = await data.json();
      setVideoInfo(json.items);
    };
    getVideoInfo();
  }, [videoDetails]);

  useEffect(() => {
    dispatch(closeMenu(false));
  }, [dispatch]);

  useEffect(() => {
    const getSubscriber = async () => {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      setSuggestionVideo(json.items);
    };
    getSubscriber();
  }, []);

  return (
    <div className="flex flex-col md:flex-row overflow-hidden">
      {/* Main Content Section */}
      <div className="flex flex-col w-full md:w-3/4 overflow-x-hidden">
        <div className="px-5">
          <iframe
            className="m-4 w-full"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          {videoInfo.map((video) => (
            <div key={video.id}>
              {/* Subscriber Section */}
              <div>
                <h1 className="text-ellipsis overflow-hidden font-bold text-xl m-2">
                  {video?.snippet?.title}
                </h1>
                <div className="flex">
                  <div className="flex m-2">
                    <FaUserTie className="rounded-full mt-1 border border-gray-400 text-4xl" />
                    <ul>
                      <li className="font-bold text-gray-800 ml-2">
                        {video?.snippet?.channelTitle}
                      </li>
                      <li className="text-sm ml-2">2.56M Subscriber</li>
                    </ul>
                    <p className="flex">
                      <button className="bg-black text-white border border-gray-200 shadow-sm px-5 py-1 rounded-full m-2 ml-5">
                        Subscribe
                      </button>
                      <button className="border flex border-gray-200 shadow-sm px-2 py-1 bg-gray-200 rounded-full m-2 hover:bg-gray-300 ml-32">
                        <FiThumbsUp className="mx-3 mt-1" />
                        {video?.statistics?.likeCount} | <FiThumbsDown className="mx-3 mt-1" />
                      </button>
                      <button className="flex border border-gray-200 shadow-sm px-2 py-1 bg-gray-200 rounded-full m-2 hover:bg-gray-300 ">
                        <PiShareFat className="mx-2 mt-1 text-xl" /> Share
                      </button>
                      <button className="flex border border-gray-200 shadow-sm px-2 py-1 bg-gray-200 rounded-full m-2 hover:bg-gray-300 ">
                        <GoDownload className="mx-1 text-xl" /> Download
                      </button>
                      <button className="border border-gray-200 shadow-sm px-2 py-1 bg-gray-200 rounded-full m-2 hover:bg-gray-300 ">
                        <BsThreeDots />
                      </button>
                    </p>
                  </div>
                </div>
              </div>
              {/* Video Details Section */}
              <div className="m-2 rounded-lg shadow-sm bg-gray-100 p-2">
                <p className="font-bold">
                  {video?.statistics?.viewCount} Views 😎 {video?.snippet?.publishedAt}
                </p>
                <p>{video?.snippet?.description}</p>
              </div>
              {/* Comment Section */}
              <div className="mt-5">
                <h1 className="m-2 font-bold text-2xl">
                  {video?.statistics?.commentCount} Comments.
                </h1>
              </div>
              <CommnetsConatiner />
            </div>
          ))}
        </div>
      </div>
      {/* Suggestion Video Right Sidebar Section */}
      <div className="flex flex-col w-full md:w-1/4 overflow-x-hidden">
        <div>
          <LiveChat />
        </div>
        {suggestionVideo.slice(1,20).map((info) => (
          <Link to={"?v=" + info.id} key={info.id}>
            <div className="p-2 flex hover:bg-gray-200 rounded-md">
              <img
                className="rounded-xl"
                src={info?.snippet?.thumbnails?.default?.url}
                alt="thumbnails"
              />
              <ul className="ml-2 text-ellipsis overflow-hidden">
                <li className="font-bold text-sm text-gray">
                  {info?.snippet?.title}
                </li>
                <li className="text-sm">{info?.snippet?.channelTitle}</li>
                <li className="text-sm">{info?.statistics?.viewCount} Views</li>
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Watchpage;
