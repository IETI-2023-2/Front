import httpInstance from "../http/httpInstance";

export const getReadings = async () => {
    let res: any;
    const endpoint = `http://localhost:8080/api/readings`;
    await httpInstance.get(endpoint).then(
        (data) =>{
            res = data;
        })
        .catch((err) => {
            res = err.response;
        });
    return res;
};