import { NextResponse } from "next/server";


export async function POST(req, res) {
    const form = await req.formData();
    // const file = form.get('assets');

//   console.log(file);

//    if(form){
//      try {
//         const response = await axios.post()
//      } catch (error) {
        
//      }
//    }

  return NextResponse.json({ message: form });
}
