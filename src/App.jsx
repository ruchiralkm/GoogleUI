import Middle from "./components/Middle";

function App() {
  return (
    <>
      <ul className="flex justify-end items-center gap-4 pt-5 pr-5 text-md font-semibold">
        <li>
          <a href="#">Gmail</a>
        </li>

        <li>
          <a href="#">Images</a>
        </li>

        <li>
          <a href="#">
            <svg
              className="w-8 h-8"
              data-slot="icon"
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              ></path>
            </svg>
          </a>
        </li>

        <li>
          <a
            href="#"
            className="bg-[#1a73e8] text-white px-10 py-3 rounded-lg hover:bg-[#338bff]"
          >
            Sign In
          </a>
        </li>
      </ul>

      <Middle />
    </>
  );
}

export default App;
