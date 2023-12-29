import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import PostMenu from "./PostMenu";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProfileCard = ({
  username,
  timeAgo,
  text,
  imageUrl,
  replies,
  likes,
  images,
}) => {
  const textContainerRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    // Update the line height based on the text container height
    const textContainerHeight = textContainerRef.current.clientHeight;
    lineRef.current.style.height = `${textContainerHeight - 25}px`;
  }, [text]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="grid grid-cols-10 gap-3 bg-white p-4 mb-4 border-b border-gray-300">
      {/* First column for user image and post length line */}
      <div className="col-span-1 flex flex-col gap-3 items-center">
        {/* User image */}
        <img
          className="h-9 w-9 rounded-full object-cover"
          src={imageUrl}
          alt={"no img"}
        />

        <div>
          {/* Line with the length of the post */}
          <div
            ref={lineRef}
            className={`w-0.5 pb-1 ${replies > 0 ? "bg-gray-200" : "bg-white"}`}
          ></div>
        </div>
        {/* Small circles based on the number of replies */}
        {replies > 0 && (
          <div className="flex items-center mt-2">
            {[...Array(Math.min(3, Math.floor(replies / 10) + 1))].map(
              (_, index) => (
                <div
                  key={index}
                  className="h-3 w-3 bg-gray-400 rounded-full ml-1"
                ></div>
              )
            )}
          </div>
        )}
      </div>
      {/* Second column for user information */}
      <div className="col-span-9">
        <div className="flex items-center justify-between">
          {/* Username */}
          <div className="text-sm font-semibold text-gray-800">{username}</div>

          {/* Time and PostMenu */}
          <div className="flex items-center">
            <span className="text-sm text-gray-600 pr-2">{timeAgo}</span>
            {/* PostMenu component */}
            <PostMenu />
          </div>
        </div>
        {/* Container for text with matching line height */}
        <div ref={textContainerRef} className="line-container">
          {/* Post text */}
          <p className="text-gray-700 mb-2">{text}</p>

          {/* Image carousel */}
          {images && images.length > 0 && (
            <Slider {...settings} className="mt-4 ">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`post-${index}`}
                  // TODO: make the z-index
                  className="w-full z-index=-1"
                />
              ))}
            </Slider>
          )}
        </div>
        {/* Footer with replies and likes */}
        <div className="flex items-center">
          {replies > 0 && (
            <div className="flex">
              <span className="text-sm text-gray-600 mr-4">
                {replies} {replies === 1 ? "reply" : "replies"}
              </span>
              <span className="text-gray-400"> · </span>
            </div>
          )}
          {likes > 0 && (
            <span className="text-sm text-gray-600 ml-2">
              {likes} {likes === 1 ? "like" : "likes"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
