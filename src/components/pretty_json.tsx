import { useEffect, useState } from "react";
import Image from "next/image";
import arrow from "~/../public/icons8-arrow-100.png";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IoIosCopy } from "react-icons/io";

const Pretty_JSON = () => {
  const [userInput, setUserInput] = useState("");
  const [prettyJson, setPrettyJson] = useState("");

  const onPretty = () => {
    console.log("pretty it...");
    try {
      setPrettyJson(JSON.stringify(JSON.parse(userInput), null, 2));
    } catch (error) {
      console.log(error);
      setPrettyJson(`Invalid JSON: ${error}`);
    }
    console.log(prettyJson);
  };

  const onClear = () => {
    setUserInput("");
    setPrettyJson("");
  };

  const notify = () => {
    alert("Copied to clipboard");
  };

  return (
    <>
      <div className="flex h-screen w-full flex-col">
        <div className="flex h-4/5 w-full">
          <textarea
            id="message_1"
            className="m-3 h-5/6 w-5/6 rounded-lg border border-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Your json here..."
            onChange={(e) => setUserInput(e.target.value)}
            value={userInput}
          ></textarea>

          <div className="flex h-full items-center justify-center">
            <Image
              src={arrow}
              alt="arrow image"
              width={50}
              height={100}
              className="items-center"
            />
          </div>

          <div className="relative m-3 h-5/6 max-h-full w-5/6 overflow-y-auto rounded-lg border border-gray-50 bg-gray-900 text-gray-900">
            <CopyToClipboard text={prettyJson} onCopy={() => notify()}>
              <button className="absolute right-0 top-0 m-2 rounded  p-2 text-white">
                <IoIosCopy size={24} />
              </button>
            </CopyToClipboard>
            <SyntaxHighlighter
              language="json"
              style={oneDark}
              className="!p=0 !m=0"
              customStyle={{ padding: 0, margin: 0 }}
            >
              {String(prettyJson).replace(/\n$/, "")}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="my-1 ml-2 rounded bg-[#DB1F48] p-4 px-4 py-2 font-bold text-white hover:bg-red-700"
            onClick={onPretty}
          >
            Pretty-fy My JSON!
          </button>
          <button
            className="my-1 ml-2 rounded bg-[#DB1F48] p-4 px-4 py-2 font-bold text-white hover:bg-red-700"
            onClick={onClear}
          >
            Clear!
          </button>
        </div>
      </div>
    </>
  );
};

export default Pretty_JSON;
