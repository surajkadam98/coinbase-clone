import React from "react";

const Fold5 = () => {
  return (
    <div className="max-w-7xl mx-auto my-20  px-5 sm:px-16 lg:px-0 z-40">
      <div className="mx-auto px-5">
        <h2 className="text-4xl leading-1 tracking-wide text-center font-semibold">
          Get started in a few minutes
        </h2>
        <p className="my-5 text-md text-center text-gray-500">
          Coinbase supports a variety of the most popular digital currencies.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-around sm:px-10 mt-10 sm:mt-20">
        <div className="flex flex-col items-center my-7">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path
              d="M9.481 40H46.52c.814 0 1.481-.8 1.481-1.778V9.778C48 8.8 47.333 8 46.519 8H9.48C8.667 8 8 8.8 8 9.778v28.444C8 39.2 8.667 40 9.481 40z"
              fill="#0052FF"
            ></path>
            <path d="M27 48V0H0v48h27z" fill="#BFE9FF"></path>
            <path d="M27 48V0H0v48h27z" fill="#CED2DB"></path>
            <path
              d="M27 8H9.462C8.658 8 8 8.8 8 9.778v28.444C8 39.2 8.658 40 9.462 40H27V8z"
              fill="#0A0B0D"
            ></path>
            <path
              d="M18 24a3 3 0 100-6 3 3 0 000 6zM18 25.5c-3.315 0-6 2.017-6 4.5h12c0-2.483-2.685-4.5-6-4.5z"
              fill="#fff"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M48 24H27v16h19.519c.814 0 1.481-.8 1.481-1.778V24z"
              fill="#CED2DB"
            ></path>
            <path
              d="M37.5 26l.972 4.94L43 32l-4.528 1.06L37.5 38l-.972-4.94L32 32l4.528-1.06L37.5 26z"
              fill="#0A0B0D"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M43.69 12.723l-8.023 7.66-4.358-4.16 1.381-1.446 2.977 2.84 6.642-6.34 1.382 1.446z"
              fill="#fff"
            ></path>
          </svg>
          <h3 className="text-xl font-semibold mt-5">Create an account</h3>
        </div>
        <div className="flex flex-col items-center my-7">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M48 24H0v24h48V24z" fill="#CED2DB"></path>
            <path
              d="M24 48A24 24 0 010 24h18a6 6 0 1012 0h18a24 24 0 01-24 24z"
              fill="#0052FF"
            ></path>
            <path
              d="M48 24H30a6 6 0 10-12 0H0a24 24 0 1148 0z"
              fill="#CED2DB"
            ></path>
            <path d="M9 32.98a9 9 0 100-18 9 9 0 000 18z" fill="#0A0B0D"></path>
            <path d="M0 24a9 9 0 0118 0H0z" fill="#0052FF"></path>
            <path
              d="M11.09 19.89H6.91a2 2 0 00-2 2v4.18a2 2 0 002 2h4.18a2 2 0 002-2v-4.18a2 2 0 00-2-2z"
              fill="#fff"
            ></path>
            <path
              d="M39 32.98a9 9 0 100-18 9 9 0 000 18z"
              fill="#0052FF"
            ></path>
            <path d="M48 24a9 9 0 01-18 0h18z" fill="#0A0B0D"></path>
            <path
              d="M38.98 23.98a3.18 3.18 0 100-6.36 3.18 3.18 0 000 6.36zM39 24a6.351 6.351 0 00-6.36 6.35 9 9 0 0012.71 0A6.35 6.35 0 0039 24z"
              fill="#fff"
            ></path>
          </svg>
          <h3 className="text-xl font-semibold mt-5">Link your bank account</h3>
        </div>
        <div className="flex flex-col items-center my-7">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M0 24h48v24H0V24z" fill="#CED2DB"></path>
            <path d="M6 8h8v16H6V8z" fill="#00D17F"></path>
            <path d="M6 24h8v8H6v-8z" fill="#0A0B0D"></path>
            <path d="M20 16h8v8h-8v-8z" fill="#F34"></path>
            <path d="M20 24h8v16h-8V24z" fill="#0A0B0D"></path>
            <path d="M34 6h8v18h-8V6z" fill="#00D17F"></path>
            <path d="M34 24h8v6h-8v-6z" fill="#0A0B0D"></path>
            <path d="M23 10h2v6h-2v-6z" fill="#F34"></path>
            <path d="M9 2h2v6H9V2zM37 0h2v6h-2V0z" fill="#00D17F"></path>
            <path
              d="M37 30h2v6h-2v-6zM9 32h2v6H9v-6zM23 40h2v6h-2v-6z"
              fill="#0A0B0D"
            ></path>
          </svg>
          <h3 className="text-xl font-semibold mt-5">Start buying & selling</h3>
        </div>
      </div>
    </div>
  );
};

export default Fold5;
