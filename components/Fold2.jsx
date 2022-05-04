import React from "react";
import Image from "next/image";

const Fold2 = () => {
  return (
    <div className="border-b pt-1 border-gray-200 w-screen">
      <div className="max-w-7xl mx-auto my-20  px-5 sm:px-16 lg:px-0 z-40">
        <div className="mx-auto px-5">
          <h2 className="text-4xl leading-1 tracking-wide text-center font-semibold">
            Create your cryptocurrency portfolio today
          </h2>
          <p className="my-5 text-md text-center text-gray-500">
            Coinbase has a variety of features that make it the best place to
            start trading
          </p>
        </div>
        <div className="w-full lg:px-10 mt-10 xl:grid xl:grid-flow-row-dense justify-center items-center xl:grid-cols-10">
          <div className="xl:col-span-7 xl:col-start-5 ">
            <div className="w-ful md:px-20 lg:px-0 my-10">
              <Image
                src={"/fold2_portfolio.jpg"}
                height={288.18}
                width={327}
                layout={"responsive"}
                alt="application"
              />
            </div>
          </div>
          <div className="xl:col-span-3 xl:col-start-1">
            <div className="w-full">
              <div className="flex flex-col sm:flex-row items-start justify-center w-full">
                <div className="mx-auto sm:mx-0 my-5 sm:my-0 px-0 rounded-full  border border-gray-50 shadow-2xl">
                  <svg width="40" height="40" fill="none" className="m-3">
                    <path
                      d="M40 5.667a1 1 0 00-1-1h-6.667a2.213 2.213 0 00-1.588.808l-1.352 1.858H7.667A1.667 1.667 0 006 9v23.667h34v-27z"
                      fill="#CED2DB"
                    ></path>
                    <path
                      d="M39.5 31.075l-5-16.15a2.411 2.411 0 00-2.167-1.592H1.667c-.917 0-1.445.717-1.167 1.592L6 32.667h32.333c.917 0 1.445-.717 1.167-1.592z"
                      fill="#5DE2F8"
                    ></path>
                    <path
                      d="M40 32.667l-5.5-17.742a2.411 2.411 0 00-2.167-1.592H6v19.334h34zM18.667 13.333l7.071-7.071a9.64 9.64 0 012.929 7.071h-10z"
                      fill="#0052FF"
                    ></path>
                    <path
                      d="M18.667 3.333a9.64 9.64 0 00-7.072 2.929 9.64 9.64 0 00-2.928 7.071h10l7.071-7.071a9.64 9.64 0 00-7.071-2.929z"
                      fill="#FFD200"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.833 13.333a7.833 7.833 0 0115.667 0H10.833zm-.333 0a8.167 8.167 0 1116.333 0h1.834a9.64 9.64 0 01-2.929 7.072 9.64 9.64 0 01-7.071 2.928 9.64 9.64 0 01-7.072-2.928 9.64 9.64 0 01-2.928-7.072H10.5z"
                      fill="#0A0B0D"
                    ></path>
                  </svg>
                </div>
                <div className="sm:ml-10">
                  <h3 className="text-2xl text-center sm:text-left">
                    Manage your portfolio
                  </h3>
                  <p className="text-md mt-3 text-gray-500 text-center sm:text-left">
                    Buy or sell popular digital currencies, keep of them in the
                    one place.
                  </p>
                </div>
              </div>
              <div className="mt-10 flex flex-col sm:flex-row items-start justify-center">
                <div className="mx-auto sm:mx-0 my-5 sm:my-0 px-0 rounded-full flex justify-center items-center  border border-gray-50 shadow-2xl">
                  <svg width="40" height="40" fill="none" className="m-3">
                    <path
                      d="M5.333 6c0-.368.299-.667.667-.667h17.333c.369 0 .667.299.667.667v28a.667.667 0 01-.667.667H6A.667.667 0 015.333 34V6z"
                      fill="#CED2DB"
                    ></path>
                    <path
                      d="M24 9.333H5.333v21.334H24V9.333z"
                      fill="#0052FF"
                    ></path>
                    <path
                      d="M12.667 32.667c0-.369.298-.667.666-.667H16a.667.667 0 010 1.333h-2.667a.667.667 0 01-.666-.666zm2.666-25.334a.667.667 0 11-1.333 0 .667.667 0 011.333 0z"
                      fill="#0A0B0D"
                    ></path>
                    <circle
                      cx="25.333"
                      cy="20"
                      r="9.333"
                      fill="#0A0B0D"
                    ></circle>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24 29.239a9.333 9.333 0 100-18.478V29.24z"
                      fill="#CED2DB"
                    ></path>
                    <circle cx="25.333" cy="20" fill="#fff" r="8"></circle>
                    <path
                      d="M25.333 16l1.113 2.812 2.887.244-2.2 1.981.672 2.963-2.472-1.588L22.861 24l.672-2.963-2.2-1.981 2.888-.244L25.333 16z"
                      fill="#0052FF"
                    ></path>
                  </svg>
                </div>
                <div className="sm:ml-10">
                  <h3 className="text-2xl text-center sm:text-left">Mobile apps</h3>
                  <p className="text-md mt-3 text-gray-500 text-center sm:text-left">
                    Stay on top of the market with the Coinbase app for{" "}
                    <a className="text-primary" href="">
                      Android
                    </a>{" "}
                    and{" "}
                    <a className="text-primary" href="#">
                      iOS
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fold2;
