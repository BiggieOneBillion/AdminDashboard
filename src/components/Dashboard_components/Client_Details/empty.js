

// {
//     "id": "b7d033db-515e-4798-90dc-e8f0d8a5753a",
//     "imei": "788888886969996",
//     "clientId": "81efb97c-00a8-4f65-a835-2c81d2841265",
//     "deviceId": "345567679u8898886",
//     "size": "21",
//     "purchaseDate": "2024-05-31T00:00:00.000Z",
//     "status": "active",
//     "token": null,
//     "preferences": {
//         "dateFormat": "DD/MM/YY",
//         "timeFormat": "12 hours",
//         "startOfWeek": "Sunday",
//         "soundPreference": "Ring with vibration",
//         "notificationPreference": "Status bar only"
//     },
//     "client": {
//         "name": "Baker Huges",
//         "mobile": "09081234567",
//         "email": "tgmail@gmail.com",
//         "logoUrl": null,
//         "location": "Eleme Port Harcourt"
//     }
// }

// {
//     "id": "491e17be-ff72-46e6-9fa8-17233be18701",
//     "imei": "32-683791-244764-8",
//     "clientId": "888fe7dc-f762-479b-b301-83bc10f8a971",
//     "deviceId": null,
//     "size": "10",
//     "purchaseDate": "2024-05-15T06:59:00.690Z",
//     "status": "active",
//     "token": null,
//     "preferences": {
//         "dateFormat": "DD/MM/YY",
//         "timeFormat": "12 hours",
//         "startOfWeek": "Sunday",
//         "soundPreference": "Ring with vibration",
//         "notificationPreference": "Status bar only"
//     },
//     "client": {
//         "name": "Pagac Inc",
//         "mobile": "936.330.5003 x940",
//         "email": "Diego83@gmail.com",
//         "logoUrl": "https://loremflickr.com/640/480?lock=8361745978490880",
//         "location": "Doyleport"
//     }
// }


// const ArticleForm = ({ register }) => (
//     <div className="grid grid-cols-[300px_200px_1fr] gap-4 h-[50px] relative">
//       {/* first input */}
//       <div className="w-full h-full border border-blue-700 rounded-2xl">
//         <label
//           htmlFor="imgFile"
//           className=" h-full flex px-5 justify-between items-center w-full"
//         >
//           <input
//             type="file"
//             id="imgFile"
//             className="hiddeny text-sm"
//             {...register("image")}
//           />
//           {/* <span className="text-xs font-light text-black">Upload An Image</span> */}
//           <span>
//             <PiImageThin size={20} />
//           </span>
//         </label>
//       </div>
//       {/* second input */}
//       <div className="w-full h-full border rounded-2xl overflow-hidden">
//         <input
//           type="text"
//           placeholder="Title"
//           className="h-full px-3 py-1 w-full placeholder:text-sm placeholder:font-light rounded-2xl focus-within:outline-none text-sm font-normal"
//           {...register("title")}
//         />
//       </div>
//       {/* third input */}
//       <div className="w-full h-full border rounded-xl overflow-hidden">
//         <input
//           type="text"
//           placeholder="Sub text"
//           className="h-full px-3 py-1 w-full placeholder:text-sm placeholder:font-light rounded-2xl  focus-within:outline-none text-sm font-normal"
//           {...register("subtext")}
//         />
//       </div>
//     </div>
//   );