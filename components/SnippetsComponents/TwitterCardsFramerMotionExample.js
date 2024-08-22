import React, { useEffect, useState } from "react";

import { FiTwitter } from "react-icons/fi";

import { motion } from "framer-motion";

let interval;

export default function TwitterCardsFramerMotionExample() {
  const [cards, setCards] = useState([
    {
      id: 0,
      author: "Elon Musk",
      tweet:
        "I want to name the next starlink bots as ERROR_404 because why not. 🐶",
      avatar:
        "https://images.unsplash.com/photo-1575535468632-345892291673?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      username: "elonmusk",
    },
    {
      id: 1,
      author: "Team Angular",
      tweet:
        "Glad to announce that we are going to relaunch AngularJS this christmas.",
      avatar: "https://angular.io/assets/images/logos/angular/angular.svg",
      username: "betterthanreact",
    },
    {
      id: 2,
      author: "Andrew Tate",
      tweet:
        "So let me ask you this, what color is your development framework?",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/b/b2/Andrew_tate_%28cropped%29.jpg",
      username: "TopGBuggatiMan",
    },
  ]);

  const [currentCard, setCurrentCard] = useState(() => cards[0]);

  useEffect(() => {
    if (currentCard) {
      startFlipping();
    }

    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCurrentCard(
        (currentCard) => cards[(currentCard.id + 1) % cards.length]
      );
    }, 3000);
  };
  return (
    <div className="my-20">
      <div className=" flex max-w-sm w-full mx-auto flex-col justify-center items-start mb-16 relative  h-40">
        <div className="absolute border rounded-md transform scale-[.85] -top-9 h-full w-full z-[1] dark:border-slate-800"></div>
        <div className="absolute border rounded-md transform scale-90 -top-6 h-full w-full z-[2] backdrop-blur-sm dark:border-slate-800">
          <span className="absolute h-px -top-px inset-x-4 bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
        </div>
        <div className="absolute border rounded-md transform scale-95 -top-3 h-full w-full z-[4] backdrop-blur-sm dark:border-slate-800"></div>

        <TwitterCard card={currentCard} />
      </div>
    </div>
  );
}

const TwitterCard = ({ card }) => {
  const dropIn = {
    hidden: {
      y: "-4vh",
      x: "0",
      scale: 1.2,
      opacity: 0,
    },
    visible: {
      y: "0",
      x: "0",
      scale: 1,
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };
  return (
    <motion.div
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      key={card.id}
      className=" rounded-lg px-8 py-4 border border-slate-200 dark:border-slate-700 z-[5] relative bg-white dark:bg-zinc-900"
    >
      <span className="absolute w-[40%] -bottom-px right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
      <span className="absolute w-px -left-px h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>

      <div className="flex justify-between items-center ">
        <div className="flex flex-row space-x-4 items-center ">
          <img
            src={card.avatar}
            alt="avatar"
            className="w-8 h-8 object-cover rounded-full shadow"
          />
          <div className="flex flex-col items-start justify-start">
            <p className="text-sm font-semibold text-zinc-700 dark:text-slate-300 m-0 p-0">
              {card.author}
            </p>
            <small className="text-zinc-500 text-xs dark:text-slate-500">
              @{card.username}
            </small>
          </div>
        </div>
        <FiTwitter className="text-blue-500 " />
      </div>
      <div className="mt-4">
        <p className="text-gray-700 text-base dark:text-slate-300">
          {card.tweet}
        </p>
      </div>
    </motion.div>
  );
};
