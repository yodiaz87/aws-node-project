const AWS = require("aws-sdk");
const s3 = new AWS.S3();

async function getObject(bucketName, key) {
  try {
    return await s3.getObject({ Bucket: bucketName, Key: key }).promise();
  } catch (err) {
    console.log(err);
  }
}

async function listObjects(bucketName, prefix) {
  try {
    return await s3.listObjects({ Bucket: bucketName, Prefix: prefix }).promise();
  } catch (err) {
    console.log(err);
  }
}

module.exports = { listObjects, getObject };
