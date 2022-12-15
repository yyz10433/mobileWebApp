export const userGetToken = {
  url: "/api/user/login",
  method: "post",
  response: () => {
    return {
      code: 0,
      message: 'success',
      data: {
        token: "Token"
      }
    }
  }
}


export const getUserInfo = {
  url: "/api/user/info",
  method: "get",
  response: () => {
    return {
      code: 0,
      message: 'success',
      data: {
        id: "2467751560226270",
        username: "yyz",
        avatar: "https://p3-passport.byteimg.com/img/user-avatar/3745b7eb198f2357155cd88eb7930f35~180x180.awebp",
      }
    }
  }
}
