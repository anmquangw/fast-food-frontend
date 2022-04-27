// import { axios } from "./axios";

  const convertBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      let fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

export const saveImage = (files: any): Promise<any> => {
  return convertBase64(files[0]);
  // const formData = new FormData();
  // formData.append("file", files[0]);
  // formData.append("upload_preset", "sfkhdruw");

  // return new Promise((resolve: any, reject: any) => {
  //   return resolve({
  //     data: {
  //       url: "https://res.cloudinary.com/sfkhdruw/image/upload/v1598424851/image.jpg",
  //     },
  //   });
  // });

  // const base64 = new Buffer(read).toString("base64");
  // const base64 = Buffer.from(files[0]).toString("base64");
  // console.log(`data:image/jpg;base64,${base64}`);

  // return Promise.resolve("ok");
  // return axios.post(
  //   "https://api.cloudinary.com/v1_1/anm-dinary/image/upload",
  //   formData,
  //   {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   }
  // );

  // return new Promise((resolve, reject) => {
  //   let fileReader = new FileReader();
  //   fileReader.readAsDataURL(file);

  //   fileReader.onload = () => {
  //     resolve(fileReader.result);
  //   };

  //   fileReader.onerror = (error) => {
  //     reject(error);
  //   };
  // });
};
