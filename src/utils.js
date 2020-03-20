import { adjectives, nouns } from "./words";
import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";
import jwt from "jsonwebtoken";

export const generateSecret = () => {
  const randomNumber = Math.floor(Math.random() * adjectives.length);
  return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
};

const sendMail = email => {
  const options = {
    auth: {
      api_user: process.env.SENDGRID_USERNAME,
      api_key: process.env.SENDGRID_PASSWORD
    }
  };
  const client = nodemailer.createTransport(sgTransport(options));
  return client.sendMail(email);
};

export const sendSecretMail = (address, secret) => {
  const email = {
    from: "help@hxxns.com",
    to: address,
    subject: "아이디 및 비밀번호 찾기 인증 메일입니다.",
    html: `인증 코드: <strong>${secret}</strong><br/>복사하여 요청한 페이지 내에 붙여 넣으세요. 감사합니다.`
  };
  return sendMail(email);
};

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

export const generatePassword = () => {
  const length = 12;
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@_";
  var retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
};
