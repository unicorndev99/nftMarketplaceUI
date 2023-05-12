import axios from "axios"

const serverURL = "http://localhost:7000"
// const serverURL = "http://218.50.149.74:18332"

export const insertNewNFT = async (mediaIpfs, mediaType, name, category, description, walletAddress, walletType, txHash, tokenID) => {
    let res = await axios.post(`${serverURL}/mintedNFT`, {
        mediaIpfs,
        mediaType,
        name,
        category,
        description,
        walletAddress,
        walletType,
        txHash,
        tokenID
    }
    // remove this sector when development with local backend server
    // , {
    //     headers: {
    //         'Access-Control-Allow-Origin': '*'
    //     }
    // }
    )
    if(res.status === 200) return true
    else return false
}

export const getNFTsWithAccount = async (walletAddress, walletType) => { //queryType: minted, sell, buy , all
    console.log("getNFTswithAccount", walletAddress, walletType)
    let res = await axios.post(`${serverURL}/getNFTsWithAccount`, {
        walletAddress,
        walletType
    })
    console.log("getNFTswithAccount", res)
    if(res.status === 200) return res.data;
    else return false; 
}

export const getSaleNFTs = async () => { // type: All, Image, Video
    let res = await axios.post(`${serverURL}/getSaleNFTs`)
    if(res.status === 200) return res.data;
    else return false; 
}

export const saveNFTUpdates = async (dbID, name, category, description) => { //queryType: minted, sell, buy , all
    console.log("saveNFTUpdates", dbID, name, category, description)
    let res = await axios.post(`${serverURL}/saveNFTUpdates`, {
        dbID,
        name,
        category,
        description
    })
    console.log("saveNFTUpdates res", res)
    if(res.status === 200) return res.data;
    else return false; 
}

export const stopForsaleNFT = async (dbID) => { //queryType: minted, sell, buy , all
    let res = await axios.post(`${serverURL}/stopSaleNFT`, {
        dbID
    })
    console.log("stopSaleNFT res", res)
    if(res.status === 200) return res.data;
    else return false; 
}

export const sellRegisteNFT = async (dbID, salePrice) => { //queryType: minted, sell, buy , all
    console.log("sellRegisteNFT", dbID, salePrice)
    let res = await axios.post(`${serverURL}/sellRegisteNFT`, {
        dbID,
        salePrice
    })
    console.log("sellRegisteNFT res", res)
    if(res.status === 200) return res.data;
    else return false; 
}

export const saveBoughtNFT = async (dbID, salePrice, newOwner, txHash) => { //queryType: minted, sell, buy , all
    console.log("saveBoughtNFT", dbID, salePrice, newOwner)
    let res = await axios.post(`${serverURL}/saveBoughtNFT`, {
        dbID,
        salePrice,
        newOwner,
        txHash
    })
    console.log("saveBoughtNFT res", res)
    if(res.status === 200) return res.data;
    else return false; 
}

export const getBoughtHistoryData = async (nftID, mintedWalletType) => { //queryType: minted, sell, buy , all
    let res = await axios.post(`${serverURL}/getBoughtHistoryData`, {
        nftID,
        mintedWalletType
    })
    console.log("getBoughtHistoryData res", res)
    if(res.status === 200) return res.data;
    else return false; 
}

