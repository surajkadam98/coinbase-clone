import React from "react";
import Image from "next/image";
import Link from "next/link";
const section1 = [
  {
    title: "Company",
    menuItems: [
      {
        title: "About",
        url: "#",
      },
      {
        title: "Careers",
        url: "#",
      },
      {
        title: "Affiliates",
        url: "#",
      },
      {
        title: "Blog",
        url: "#",
      },
      {
        title: "Press",
        url: "#",
      },
      {
        title: "Investors",
        url: "#",
      },
      {
        title: "Legal & privacy",
        url: "#",
      },
      {
        title: "Cookie policy",
        url: "#",
      },
    ],
  },

  {
    title: "Learn",
    menuItems: [
      {
        title: "Browse crypto prices",
        url: "#",
      },
      {
        title: "Coinbase Bytes newsletter",
        url: "#",
      },
      {
        title: "Crypto basics",
        url: "#",
      },
      {
        title: "Tips & tutorials",
        url: "#",
      },
      {
        title: "Market updates",
        url: "#",
      },
      {
        title: "What is Bitcoin?",
        url: "#",
      },
      {
        title: "What is crypto?",
        url: "#",
      },
      {
        title: "What is a blockchain?",
        url: "#",
      },
      {
        title: "How to set up a crypto wallet",
        url: "#",
      },
      {
        title: "How to send crypto",
        url: "#",
      },
      {
        title: "Taxes",
        url: "#",
      },
    ],
  },
];

const section2 = [
  {
    title: "Individuals",
    menuItems: [
      {
        title: "Buy & sell",
        url: "#",
      },
      {
        title: "Wallet",
        url: "#",
      },
      {
        title: "NFT",
        url: "#",
      },
    ],
  },
  {
    title: "Businesses",
    menuItems: [
      {
        title: "Institutional",
        url: "#",
      },
      {
        title: "Prime",
        url: "#",
      },
      {
        title: "Custody",
        url: "#",
      },
      {
        title: "Asset Hub",
        url: "#",
      },
      {
        title: "Commerce",
        url: "#",
      },
    ],
  },
  {
    title: "Developers",
    menuItems: [
      {
        title: "Cloud",
        url: "#",
      },
      {
        title: "Wallet SDK",
        url: "#",
      },
      {
        title: "Query & Transact",
        url: "#",
      },
      {
        title: "Commerce",
        url: "#",
      },
      {
        title: "Exchange & Pro",
        url: "#",
      },
      {
        title: "Sign in with Coinbase",
        url: "#",
      },
      {
        title: "Rosetta",
        url: "#",
      },
      {
        title: "Participate",
        url: "#",
      },
      {
        title: "Prime API",
        url: "#",
      },
    ],
  },
];

const section3 = [
  {
    title: "Support",
    menuItems: [
      {
        title: "Help center",
        url: "#",
      },
      {
        title: "Contact us",
        url: "#",
      },
      {
        title: "Create account",
        url: "#",
      },
      {
        title: "ID verification",
        url: "#",
      },
      {
        title: "Account information",
        url: "#",
      },
      {
        title: "Payment methods",
        url: "#",
      },
      {
        title: "Account access",
        url: "#",
      },
      {
        title: "Supported crypto",
        url: "#",
      },
      {
        title: "Supported countries",
        url: "#",
      },
      {
        title: "Status",
        url: "#",
      },
    ],
  },
];
const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto mt-32 my-20  px-7  z-40">
      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          <div className="py-5">
            <a href="#">
            <Image src="/logo.svg" height={20} width={112} />
            </a>
          </div>
          <p className="text-lg sm:text-md text-gray-500">© 2022 Coinbase</p>
          <p className="text-lg sm:text-md text-gray-500">
            <a
              href="#"
              className="inline-block hover:text-primary hover:underline"
            >
              Blog
            </a>
            {" • "}
            <a
              href="#"
              className="inline-block hover:text-primary hover:underline"
            >
              Twitter
            </a>
            {" • "}
            <a
              href="#"
              className="inline-block hover:text-primary hover:underline"
            >
              Facebook
            </a>
          </p>
        </div>
        <div className=" grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 xl:gap-16">
          <div className="flex flex-col">
            {section1.map((content, index) => (
              <div key={index} className={"mt-5"}>
                <p className="text-lg sm:text-md font-semibold">{content.title}</p>
                <ul className="text-gray-500 mt-1">
                  {content.menuItems.map((item, menuItemIndex) => (
                    <li key={menuItemIndex} className={"mt-1 text-lg sm:text-md hover:text-primary hover:underline"}>
                      <Link href={item.url}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            {section2.map((content, index) => (
              <div key={index} className={"mt-5"}>
                <p className="text-lg sm:text-md sm:text-md font-semibold">{content.title}</p>
                <ul className="text-gray-500 mt-1">
                  {content.menuItems.map((item, menuItemIndex) => (
                    <li key={menuItemIndex} className={"mt-1 text-lg sm:text-md hover:text-primary hover:underline"}>
                      <Link href={item.url}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            {section3.map((content, index) => (
              <div key={index} className={"mt-5"}>
                <p className="text-lg sm:text-md sm:text-md font-semibold">{content.title}</p>
                <ul className="text-gray-500 mt-1">
                  {content.menuItems.map((item, menuItemIndex) => (
                    <li key={menuItemIndex} className={"mt-1 text-lg sm:text-md hover:text-primary hover:underline"}>
                      <Link href={item.url}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
