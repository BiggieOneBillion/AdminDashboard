import Image from "next/image";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { paymentData as data } from "./PaymentData";
import { v4 } from "uuid";

const Header = () => (
  <div className="flex items-center justify-between border-b mb-[24px]">
    <h2 className="font-bold  pb-2 pt-4 text-[#262633]">Recent Payments</h2>
    <BsArrowRightShort size={30} />
  </div>
);

const PaymentList = () => (
  <ul className=" flex flex-col gap-4 flex-1 overflow-y-auto">
    {data.map((paydata) => (
      <li key={v4()} className="p-2 bg-[#FBFBFB]">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <Image
              width="40"
              height="40"
              src={paydata.src}
              className="p-1 bg-white rounded-full"
              alt="payment image"
            />
            <span>{paydata.company}</span>
          </div>
          <span>N{paydata.amount / 1000}K</span>
        </div>
      </li>
    ))}
  </ul>
);

const RecentPayment = () => {
  return (
    <>
      <div className="bg-white w-1/3  p-[14px] rounded-xl flex flex-col  shadow-xl h-[450px]">
        <Header />
        <PaymentList />
      </div>
    </>
  );
};

export default RecentPayment;
