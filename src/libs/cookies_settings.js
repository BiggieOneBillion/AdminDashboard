import Cookies from "js-cookie";

export default function cookies_settings(authObject) {
  Cookies.set("_token", authObject.entity.token);
  // console.log(authObject);
  //   Cookies.set(
  //     "user",
  //     {
  //       firstname: authObject.entity.firstname,
  //       lastname: authObject.entity.lastname,
  //       email: authObject.entity.email,
  //       id: authObject.entity.id,
  //     }
  //   );
}
