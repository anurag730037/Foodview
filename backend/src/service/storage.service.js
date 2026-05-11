const ImageKit = require("imagekit");
const { v4: uuidv4 } = require("uuid");

const imageKit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL,
});

async function uploadFile(file) {
  const extension = file.originalname.split(".").pop();

  const result = await imageKit.upload({
    file: file.buffer,
    fileName: `${uuidv4()}.${extension}`, // ✅ unique + correct extension
  });

  return result;
}

module.exports = {
  uploadFile,
};
