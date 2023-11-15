import httpInstance from "../http/httpInstance";

export const deleteReading = async (id: string) => {
    let res: any;
    const endpoint = `http://localhost:8080/api/readings/delete/${id}`;
    await httpInstance.delete(endpoint).then(
        (data) =>{
            res = data;
        })
        .catch((err) => {
            res = err.response;
        });
    return res;
};