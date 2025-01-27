import api from "../../lib/axios/api";

export const getQuizByIdService = async (id) => {
  const response = await api.get(`/quiz/${id}`);

  return response;
};
