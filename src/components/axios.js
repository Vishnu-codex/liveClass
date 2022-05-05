import axios from "axios"; 
const GetChats = axios.create({
    baseURL: "https://test-server-neyyar.herokuapp.com/api/admin/v1"
});

export default GetChats;