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

const PaymentList = ({ data }) => (
  <ul className=" flex flex-col gap-4 flex-1 overflow-y-auto">
    {data?.map((paydata) => (
      <li key={v4()} className="p-2 bg-[#FBFBFB]">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <Image
              width="40"
              height="40"
              src={
                paydata.client.logoUrl
                  ? paydata.client.logoUrl
                  : "/images/no-image-2.png"
              }
              className="p-1 bg-white rounded-full"
              alt="payment image"
            />
            <span>{paydata.client.name}</span>
          </div>
          <span>N{paydata.amount / 1000}K</span>
        </div>
      </li>
    ))}
  </ul>
);

const RecentPayment = ({ info }) => {
  // console.log(info);
  return (
    <>
      <div className="bg-white w-1/3  p-[14px] rounded-xl flex flex-col  shadow-xl h-[450px]">
        <Header />
        {info?.length <= 0 ? (
          <p className="w-full text-center text-3xl font-bold text-[rgba(0,0,0,0.2)]">
            No Payment Avaliable
          </p>
        ) : (
          <PaymentList data={info} />
        )}
      </div>
    </>
  );
};

export default RecentPayment;

// sample data
// {
//   "id": "6d03e91f-c26a-4c48-9c81-51199247ea5a",
//   "clientId": "b73601cc-795d-45cb-9ea0-1c09f1012923",
//   "invoiceId": "INV003",
//   "notes": "Invoice must be paid on or before the dawn of due date",
//   "issuedAt": "2023-10-22T23:00:00.000Z",
//   "dueAt": "2023-12-21T23:00:00.000Z",
//   "details": [
//     {
//       "size": "11",
//       "amount": 20000,
//       "quantity": 6,
//       "description": "Subscription for 6 months"
//     }
//   ],
//   "status": "complete",
//   "deletedAt": null,
//   "createdAt": "2023-11-04T15:39:11.420Z",
//   "updatedAt": "2023-11-04T16:34:50.345Z",
//   "client": {
//     "name": "Nigeria National Peroleum Corporation",
//     "mobile": "+141223344532",
//     "email": "hello@nnpc.com",
//     "logoUrl": "https://s3",
//     "location": "Port Harcourt"
//   }
// }
