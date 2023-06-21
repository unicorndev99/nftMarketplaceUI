import axios from "axios"

// const serverURL = "http://localhost:7000"
const serverURL = "http://218.50.149.74:18332"

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
    let res = await axios.post(`${serverURL}/getNFTsWithAccount`, {
        walletAddress,
        walletType
    })
    if(res.status === 200) return res.data;
    else return false; 
}

export const getSaleNFTs = async () => { // type: All, Image, Video
    let res = await axios.post(`${serverURL}/getSaleNFTs`)
    if(res.status === 200) return res.data;
    else return false; 
}

export const saveNFTUpdates = async (dbID, name, category, description) => { //queryType: minted, sell, buy , all
    let res = await axios.post(`${serverURL}/saveNFTUpdates`, {
        dbID,
        name,
        category,
        description
    })
    if(res.status === 200) return res.data;
    else return false; 
}

export const stopForsaleNFT = async (dbID) => { //queryType: minted, sell, buy , all
    let res = await axios.post(`${serverURL}/stopSaleNFT`, {
        dbID
    })
    if(res.status === 200) return res.data;
    else return false; 
}

export const sellRegisteNFT = async (dbID, salePrice) => { //queryType: minted, sell, buy , all
    let res = await axios.post(`${serverURL}/sellRegisteNFT`, {
        dbID,
        salePrice
    })
    if(res.status === 200) return res.data;
    else return false; 
}

export const saveBoughtNFT = async (dbID, salePrice, newOwner, txHash) => { //queryType: minted, sell, buy , all
    let res = await axios.post(`${serverURL}/saveBoughtNFT`, {
        dbID,
        salePrice,
        newOwner,
        txHash
    })
    if(res.status === 200) return res.data;
    else return false; 
}

export const getBoughtHistoryData = async (nftID, mintedWalletType) => { //queryType: minted, sell, buy , all
    let res = await axios.post(`${serverURL}/getBoughtHistoryData`, {
        nftID,
        mintedWalletType
    })
    if(res.status === 200) return res.data;
    else return false; 
}

