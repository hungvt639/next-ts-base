import API from "../interface/api";
import locationsAPI from "./repository/LocationsAPI";
const API: API = {
    location: locationsAPI,
};

export default API;
