const withAntdLess = require("next-plugin-antd-less");
module.exports = withAntdLess({
    lessVarsFilePath: "./styles/antd-custom.less",
    cssLoaderOptions: {},

    webpack(config) {
        return config;
    },
});
module.exports = {
    reactStrictMode: true,
    images: {
        domains: ["http://localhost:3000", "http://be-dev.hung-vt.bike:8000"],
    },
    env: {
        BACKEND: "http://be-dev.hung-vt.bike",
        PORT_BACKEND: 8000,
    },
};
