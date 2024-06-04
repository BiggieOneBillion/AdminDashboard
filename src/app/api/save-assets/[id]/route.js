import { NextResponse } from "next/server";


export async function POST(req, res) {
    const form = await req.formData();
    const { id } = await req.query;
    console.log(id);
    // const file = form.get('assets');

  console.log(form);

//    if(form){
//      try {
//         const response = await axios.post()
//      } catch (error) {
        
//      }
//    }

  return NextResponse.json({ message: form });
}