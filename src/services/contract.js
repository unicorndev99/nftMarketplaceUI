import {ethers, BigNumber} from 'ethers';
import Caver from "caver-js";

const caver = new Caver(window.klaytn);

export const ethContractAddress = "0x4F7B91aCE014B37C12Fbea7Ff9037CBAADfD5602"
export const klaytnContractAddress = "0x7f9eB186192c135a58564d8FA54C18A70437c5f3"

export const ethContractAbi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "approved",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "_seller",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "_buyer",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_price",
                "type": "uint256"
            }
        ],
        "name": "NftBought",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_price",
                "type": "uint256"
            }
        ],
        "name": "allowBuy",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "burn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            }
        ],
        "name": "buy",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            }
        ],
        "name": "disallowBuy",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "getApproved",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "isApprovedForAll",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ownerOf",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "tokenURI",
                "type": "string"
            }
        ],
        "name": "safeMint",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "tokenIdToPrice",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "tokenURI",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "tokenURI",
                "type": "string"
            }
        ],
        "name": "updateTokenURI",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

export const mintNFT = async (tokenURI, walletAddress, walletType) => {
    const nftContract = await getContract(walletType);
    if(walletType === "metamask") {
        ///////////////////// NFT minting //////////////////////
            // const chainId = 5 // 1: ethereum mainnet, 4: rinkeby 137: polygon mainnet 5: // Goerli testnet
            // if (window.ethereum.networkVersion !== chainId) {
            //     try {
            //     await window.ethereum.request({
            //         method: "wallet_switchEthereumChain",
            //         params: [{ chainId: "0x5" }], // 0x4 is rinkeby. Ox1 is ethereum mainnet. 0x89 polygon mainnet  0x5: // Goerli testnet
            //     })
            //     } catch (err) {
            //     // notifymessage("Please check the Ethereum mainnet", "error");
            //     // setMintStatus("Please check the Polygon mainnet")
            //     return false
            //     }
            // }
            try {
                const tx = await nftContract.safeMint(tokenURI);
                let res = await tx.wait()
                if (res.transactionHash) {
                    let tokenId = Number.parseInt(res.events[0].args.tokenId)
                    return {
                        txHash: res.transactionHash,
                        tokenId
                    } 
                }
            } catch (error) {
                return false;
            }
        
    } else if(walletType === "kaikas") {
        const tx = await nftContract.methods.safeMint(tokenURI).send({from: walletAddress, gas: "50000000"});
        if (!tx.txError) {
            let tokenId = Number.parseInt(tx.events.Transfer.returnValues.tokenId)
            return {
                txHash: tx.transactionHash,
                tokenId
            } 
        } else {
            return false;
        }
    }
}

export const sellListNFT = async (tokenId, listPrice, walletAddress, walletType ) => {
    const nftContract = await getContract(walletType);

    if(walletType === "metamask") {
            try {
                const tx = await nftContract.allowBuy(tokenId, BigNumber.from(1e9).mul(listPrice * 1000000000)); //BigNumber.from(
                let res = await tx.wait()
                if (res.transactionHash) {
                    return true;
                }
            } catch (error) {
                return false;
            }
        
    } else if(walletType === "kaikas") {
        const tx = await nftContract.methods.allowBuy(tokenId, BigNumber.from(1e9).mul(listPrice * 1000000000)).send({from: walletAddress, gas: "50000000"});
        if (!tx.txError) {
            return true;
        } else {
            return false;
        }
    }
}

export const disableListNFT = async (tokenId, walletAddress, walletType ) => {
    const nftContract = await getContract(walletType);

    if(walletType === "metamask") {
            try {
                const tx = await nftContract.disallowBuy(tokenId);
                let res = await tx.wait()
                if (res.transactionHash) {
                    return true;
                }
            } catch (error) {
                return false;
            }
        
    } else if(walletType === "kaikas") {
        const tx = await nftContract.methods.disallowBuy(tokenId).send({from: walletAddress, gas: "50000000"});
        if (!tx.txError) {
            return true;
        } else {
            return false;
        }
    }
}

export const buyNFT = async (tokenId, listPrice, walletAddress, walletType ) => {
    const nftContract = await getContract(walletType);

    if(walletType === "metamask") {
            try {
                const tx = await nftContract.buy(tokenId, { value: BigNumber.from(1e9).mul(listPrice * 1000000000)}); //BigNumber.from(
                let res = await tx.wait()
                if (res.transactionHash) {
                    return {
                        txHash : res.transactionHash
                    };
                }
            } catch (error) {
                return false;
            }
        
    } else if(walletType === "kaikas") {
        // const tx = await nftContract.methods.allowBuy(tokenId).send({from: walletAddress, gas: "50000000", value: BigNumber.from(1e9).mul(listPrice * 1000000000)});
        const tx = await nftContract.methods.buy(tokenId).send({from: walletAddress, gas: "50000000", value: new caver.utils.toPeb(listPrice, 'KLAY')});
        if (!tx.txError) {
            return {
                txHash: tx.transactionHash,
            };
        } else {
            return false;
        }
    }
}

const getContract = async (walletType) => {
    if(walletType === "metamask") {
        const signer = new ethers.providers.Web3Provider(
            window.ethereum,
        ).getSigner()
        const contract = new ethers.Contract(ethContractAddress, ethContractAbi, signer)
        return contract;
    }
    else if(walletType === "kaikas") {
        const contract = new caver.klay.Contract(ethContractAbi, klaytnContractAddress)
        return contract;
    }
}

export const getWalletBalance = async (address, walletType) => {
    if(walletType === "metamask") {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
            const balance = await provider.getBalance(address);
            const balanceInEth = ethers.utils.formatEther(balance);
            const ethBalance = Number.parseFloat(balanceInEth).toFixed(4).replace(/\.?0*$/,'');
            return ethBalance;
    } else if(walletType === "kaikas") {
        const balanceInKlay = await caver.klay.getBalance(address);
        const klaybalance = parseInt(balanceInKlay / ( 10  ** 16 )) / 100; 
        return klaybalance;
    }
}

