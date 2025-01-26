import api from "../../lib/axios/api";

export const verifyQuizService = async (id, payload) => {
  const response = await api.post(`/quiz/${id}`, payload);

  return response;
};
