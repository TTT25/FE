import axiosClient from "./axiosClient";

const ProductApi = {
    register:(username,password,email,name,phoneNumber)=>{
        const url = 'https://localhost:5001/api/User';
        return axiosClient
        .post(
            url,
            {username,password,email,name,phoneNumber})
            .catch((error) => {
                return error.response;
              });;
    },
    login:(username,password)=>{
        const url ='https://localhost:5001/api/user/authenticate';
         return axiosClient
        .post(
            url,
            {username,password})
            .catch((error) => {
                return error.response;
              });;
    }
    

}
export default ProductApi;

    
   