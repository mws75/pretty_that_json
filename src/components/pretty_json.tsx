import { useEffect, useState } from "react";
import Image from "next/image";
import arrow from "~/../public/arrow-big-right.png";

const Pretty_JSON = () => {
  const [userInput, setUserInput] = useState("");
  const [prettyJson, setPrettyJson] = useState("");

  return (
    <div className="flex h-screen w-full">
      <textarea
        id="message_1"
        className="m-9 h-5/6 w-5/6 rounded-lg border border-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      ></textarea>

      <div className="flex h-full items-center">
        <Image
          src={arrow}
          alt="arrow image"
          width={50}
          height={100}
          className="items-center"
        />
      </div>

      <textarea
        id="message_2"
        className="m-9 h-5/6 w-5/6 rounded-lg border border-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      ></textarea>
    </div>
  );
};

export default Pretty_JSON;
