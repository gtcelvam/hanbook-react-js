import React, { useEffect } from "react";
// // var SHA256 = require("crypto-js/sha256");
// // const CryptoJS = require("crypto-js");
// const sign = require("jwt-encode");
// // const decrypt = require("jwt-decode");
const crypto = require("crypto");

const CyptoExample = () => {
  useEffect(() => {
    const CCA_API_KEY = "yourApiKeyHere";
    const token = "123456";

    // Convert the API key to bytes
    const apikeyBuffer = Buffer.from(CCA_API_KEY + token, "utf-8");

    // Compute the MD5 hash
    const md5Hash = crypto.createHash("md5").update(apikeyBuffer).digest("hex");

    console.log("MD5 Hash (in Next.js) final:", md5Hash);

    const sha256Hash = crypto
      .createHash("sha256")
      .update(md5Hash, "utf-8")
      .digest("hex");

    console.log("SHA-256 Hash (in Next.js):", sha256Hash);
  }, []);

  return <div>Crypto</div>;
};

export default CyptoExample;

// class YourEncryptionClass {
//   encrypt(plainText, key) {
//     const logData = [];
//     try {
//       // Hash the key using MD5
//       key = CryptoJS.createHash("md5").update(key).digest();

//       // Initialize the initialization vector (IV)
//       const initVector = Buffer.from([
//         0x00,
//         0x01,
//         0x02,
//         0x03,
//         0x04,
//         0x05,
//         0x06,
//         0x07,
//         0x08,
//         0x09,
//         0x0a,
//         0x0b,
//         0x0c,
//         0x0d,
//         0x0e,
//         0x0f
//       ]);

//       // Create an AES cipher with the key and IV
//       const cipher = CryptoJS.createCipheriv("aes-256-cbc", key, initVector);

//       // Pad the plain text to match AES block size
//       const blockSize = 16; // AES block size
//       const paddedPlainText = Buffer.concat([
//         Buffer.from(plainText),
//         Buffer.alloc(blockSize - (plainText.length % blockSize), 0)
//       ]);

//       // Encrypt the padded plain text
//       const encryptedText = Buffer.concat([
//         cipher.update(paddedPlainText),
//         cipher.final()
//       ]);

//       // Convert the encrypted text to a hexadecimal string
//       const encryptedTextHex = encryptedText.toString("hex");

//       logData.push(
//         `info|| ${new Date()} - encrypt(): Logging the encrypted data plainText: ${plainText} || key:${key.toString(
//           "hex"
//         )}`
//       );

//       return encryptedTextHex;
//     } catch (ex) {
//       logData.push(
//         `error|| ${new Date()} - encrypt(): Logging the exception for ccavenue payment ${ex} || plainText: ${plainText} || key:${key.toString(
//           "hex"
//         )}`
//       );
//       return false;
//     }
//   }
// }

// const HashExample = () => {
//   useEffect(() => {
//     const data = {
//       order_id: "1234567890",
//       secret_key: "123456"
//     };

//     // const value = CryptoJS.HmacSHA256(data.order_id, data.secret_key);

//     const hashedString = SHA256(data);

//     // const encrypted = new YourEncryptionClass();

//     console.log(`SHA-256 hash: ${hashedString}`);
//   }, []);

//   return <div>Check the console for the hash.</div>;
// };
