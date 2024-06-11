import axios from "axios";
// import { cookies, cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const data = await req.formData();

  console.log(data);
  if (data) {
    return NextResponse.json({ message: "Worked!!!" });
  }

  return NextResponse.json({ message: "nope nothing Worked!!!" });

  //   const token_cookie = cookies();

  //   const token_id = token_cookie.get('_token')

  //   if (Object.keys(data) !== 0) {
  //     try {
  //       console.log(data);
  //       const response = await axios.post(
  //         `https://api-prestigecalendar.olotusquare.co/api/v1/admin/clients/${data.id}/templates`,
  //         data,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token_id}`,
  //             "Content-Type": "multipart/form-data",
  //           },
  //         }
  //       );
  //     } catch (error) {}
  //   }

  //   return NextResponse.json(
  //     { message: "Request missing payload" },
  //     { status: 404 }
  //   );
}
