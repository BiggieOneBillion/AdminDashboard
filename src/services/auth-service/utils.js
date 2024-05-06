//function to get token from cookies

export const getTokenFromCookies = () => {
    return Cookies.get("_token")
  }
  
  export const setToken = (authObject) => {
    Cookies.set("_token", authObject.token)
    Cookies.set(
      "user",
      JSON.stringify({
        firstname: authObject.entity.firstname,
        lastname: authObject.entity.lastname,
        email: authObject.entity.email,
        id: authObject.entity.id,
      })
    )
    return true
  }


//functions to  set token to cookies


//function to remove token from cookies

//function to check if user is authenticated


//function to get the uthenticated user details in the cookies 