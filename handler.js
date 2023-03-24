const awsUtils = require("./libs/aws-utils");
const serverless = require("serverless-http");
const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

app.get("/files", async(req, res, next) => {
  const files = await awsUtils.listObjects('yk-bucket-2023', 'january/');
  return res.status(200).json({
    message: files.Contents
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);