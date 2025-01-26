import api from "../../lib/axios/api";

export const getQuizzesService = async () => {
  const response = await api.get("/quiz");

  return response;
};
