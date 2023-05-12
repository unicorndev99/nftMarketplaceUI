import axios from "axios"
const pinataApiKey = "bf7ebd9ad32c11abe43c"
const pinataSecretApiKey = "c6fa7b8b056d0cf2e467e0ebbdc38ae889b96c59f06992ae831e2a25e52e5006"

export const saveFileToPinata = async (fileData, fileName) => {
    if (!fileData) return console.warn("Error saving to pinata: No file data")
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`
    let data = new FormData()

    data.append("file", fileData, fileName)
    let resultOfUpload = await axios.post(url, data, {
      maxContentLength: "Infinity", //this is needed to prevent axios from erroring out with large files
      maxBodyLength: "Infinity", //this is needed to prevent axios from erroring out with large files
      headers: {
        "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
        pinata_api_key: pinataApiKey,
        pinata_secret_api_key: pinataSecretApiKey,
      },
    })
    return resultOfUpload.data
}