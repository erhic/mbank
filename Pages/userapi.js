import ApiManager from "./ApiManager";

export const UserLogin = async (data) => {
  try {
    const result = await ApiManager("/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    });
    return result;
  } catch (error) {
    return error.response.data;
  }
};
