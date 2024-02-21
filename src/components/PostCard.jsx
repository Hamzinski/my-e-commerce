import React from "react";
import post1 from "../assets/post1.png";
import post2 from "../assets/post2.png";
import post3 from "../assets/post3.png";
import { LuAlarmClock } from "react-icons/lu";
import { BsGraphUp } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const postData = [
  {
    id: 1,
    image: post1,
    tag1: "Google",
    tag2: "Trending",
    tag3: "New",
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: "10 comments",
    learn: "Learn More",
  },
  {
    id: 2,
    image: post2,
    tag1: "Google",
    tag2: "Trending",
    tag3: "New",
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: "10 comments",
    learn: "Learn More",
  },
  {
    id: 3,
    image: post3,
    tag1: "Google",
    tag2: "Trending",
    tag3: "New",
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: "10 comments",
    learn: "Learn More",
  },
];

function PostCard() {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-3">
      {postData.map((post) => (
        <div key={post.id}>
          <div className="flex flex-col items-center pb-36">
            <div>
              <div className="absolute bg-danger-color font-mont font-bold text-white text-lg m-3 px-2.5 rounded">
                New
              </div>
              <img className="w-80 h-80" src={post.image} alt="" />
            </div>

            <div className="w-80 h-80 flex flex-col gap-3 px-3  pt-6 shadow-md">
              <div className="flex justify-start gap-3">
                <button className="font-mont font-medium text-sm text-primary-color">
                  {post.tag1}
                </button>
                <button className="font-mont font-medium text-sm">
                  {post.tag2}
                </button>
                <button className="font-mont font-medium text-sm">
                  {post.tag3}
                </button>
              </div>
              <h4 className="font-mont font-bold text-xl text-dark-text-color">
                {post.title}
              </h4>
              <p className="font-mont font-semibold text-sm text-second-text-color">
                {post.description}
              </p>
              <div className="flex justify-between gap-3">
                <p className="flex items-center gap-2 font-mont font-medium text-sm text-second-text-color">
                  <LuAlarmClock className="text-primary-color" /> {post.date}
                </p>
                <p className="flex items-center gap-2 font-mont font-medium text-sm text-second-text-color">
                  <BsGraphUp className="text-secondary-color" />
                  {post.comments}
                </p>
              </div>
              <div className="flex items-center">
                <h6 className="font-mont font-bold text-sm text-second-text-color">
                  {post.learn}{" "}
                </h6>
                <button className="">
                  <MdOutlineKeyboardArrowRight className="text-primary-color size-8" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostCard;
