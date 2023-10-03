import httpInstance from "../http/httpInstance";

export const getUserRole = async (username: String) => {
    let res: any;
    const endpoint = `http://localhost:8080/users/getRoleByUsername/${username}`;
    await httpInstance.get(endpoint).then(
        (data) =>{
            res = data;
        })
        .catch((err) => {
            res = err.response;
        });
    return res;
};