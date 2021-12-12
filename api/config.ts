import axios from "axios";
import http from "http";
import https from "https";
// const http = require("http");
// const https = require("https");
import { BASE_URL } from "../config/const";
import { AxiosInstance } from "axios";
import cookies from "next-cookies";
const baseURL = `${BASE_URL}/`;

function configAxios(sendToken: boolean) {
    const token = sendToken
        ? cookies({ req: { headers: { cookie: "/" } } }).token
        : "";
    const instance = axios.create({
        baseURL: baseURL,
        httpAgent: new http.Agent({ keepAlive: true }),
        httpsAgent: new https.Agent({ keepAlive: true }),
    });
    // const token = localStorage.getItem("token");
    instance.interceptors.request.use(
        function (config) {
            config.headers = {
                Accept: "*/*",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            };
            if (!sendToken) delete config.headers.Authorization;
            return config;
        },
        function (error) {
            return Promise.reject(error);
        }
    );

    instance.interceptors.response.use(
        function (response) {
            try {
                if (response.status < 200 || response.status > 300)
                    return Promise.reject(response);
                return response;
            } catch (error) {
                return Promise.reject(error);
            }
        },
        function (error) {
            return Promise.reject(error);
        }
    );
    return instance;
}
export default function ClientAPI(isToken = true): AxiosInstance {
    return configAxios(isToken);
}
