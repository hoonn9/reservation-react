import jwt from "jsonwebtoken";

export const generateToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

export const cryptoCipher = str => {
  const crypto = require("crypto");

  const cipher = crypto.createCipher("aes-256-cbc", process.env.PW_SECRET);
  let result = cipher.update(str, "utf8", "base64"); // 'HbMtmFdroLU0arLpMflQ'
  result += cipher.final("base64"); // 'HbMtmFdroLU0arLpMflQYtt8xEf4lrPn5tX5k+a8Nzw='
  return result;
};
