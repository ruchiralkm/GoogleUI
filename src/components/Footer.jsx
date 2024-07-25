import React from "react";

export default function Footer() {
  return (
    <div class="flex flex-col justify-end">
      <div className="flex flex-row pl-5 ">
        <a href="" className="text-2xl">
          Sri Lanka
        </a>
      </div>

      <div className="flex ">
        <div className="flex flex-row justify-start gap-4 mb-5 ml-5">
          <a href="" className="text-2xl">
            About
          </a>

          <a href="" className="text-2xl">
            Advertising
          </a>

          <a href="" className="text-2xl">
            Business
          </a>

          <a href="" className="text-2xl">
            How Search works
          </a>
        </div>

        <div className="flex flex-row gap-4 mb-5 ml-[1100px]">
          <a href="" className="text-2xl">
            Privacy
          </a>

          <a href="" className="text-2xl">
            Terms
          </a>

          <a href="" className="text-2xl">
            Settings
          </a>
        </div>
      </div>
    </div>
  );
}
