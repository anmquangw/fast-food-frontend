import { axios } from "./axios";

export const saveImage = (files: any): Promise<any> => {
  const formData = new FormData();
  formData.append("file", files[0]);
  formData.append("upload_preset", "sfkhdruw");

  // return new Promise((resolve: any, reject: any) => {
  //   return resolve({
  //     data: {
  //       url: "https://res.cloudinary.com/sfkhdruw/image/upload/v1598424851/image.jpg",
  //     },
  //   });
  // });
  return axios.post(
    "https://api.cloudinary.com/v1_1/anm-dinary/image/upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};
