import httpProxy from "http-proxy";
const API_URL =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLScCFvJMU3J882bktGtGV0c_1Xq7Z3ysnGDpz1WLH4FqUUKqkg/formResponse"; // The actual URL of your API
const proxy = httpProxy.createProxyServer();
// Make sure that we don't parse JSON bodies on this route:
export const config = {
  api: {
    bodyParser: false,
  },
};
export default function handler(req, res) {
  proxy.web(req, res, { target: API_URL, changeOrigin: true });
};
