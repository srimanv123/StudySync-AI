import api from "../lib/api";

export const uploadNote = async (
  title: string,
  file: File
) => {
  const formData = new FormData();

  formData.append("title", title);
  formData.append("file", file);

  const response = await api.post(
    "/notes/upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};