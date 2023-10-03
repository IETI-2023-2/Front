import httpInstance from "../http/httpInstance";

export const loginAccess = async (formData: any) => {
    let res: any;
    const endpoint = `http://localhost:8080/login`;
    await httpInstance.post(endpoint, formData).then(
        (data) =>{
            res = data;
        })
        .catch((err) => {
            res = err.response;
        });
    return res;
};