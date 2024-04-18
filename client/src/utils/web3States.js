import {ethers} from "ethers";
import abi from "../constants/abi.json"
import axios from "axios";

//0x19625EcD4429eb103Faa087e5bDf139b94F7E6f4
//0xDE1EB7ab8bc42288bb8411361C42E5433D27146E - erc20
export const getWeb3State =async () =>{
    let [contractInstance,selectedAccount,chainId,electionCommissionStatus]=[null,null,null,null];
    
    try{
        if(!window.ethereum){
            throw new Error("Metamask is not installed");
        }
        const accounts=await window.ethereum.request({
            method:'eth_requestAccounts'
        })
    
        let chainIdHex=await window.ethereum.request({
            method:'eth_chainId'
        })
        chainId=parseInt(chainIdHex,16)
        selectedAccount=accounts[0];
        const provider= new ethers.BrowserProvider(window.ethereum); //read operation
        const signer=await provider.getSigner(); //write operation
        const message="You accept the terms and conditions of voting dapp"; 
        const signature=await signer.signMessage(message);
        const dataSignature={
            signature
        }
        const res=await axios.post(`http://localhost:3000/api/authentication?accountAddress=${selectedAccount}`,dataSignature);
        electionCommissionStatus=res.data.electionCommissionStatus;
        
        localStorage.setItem("token",res.data.token);


        const contractAddress="0x19625EcD4429eb103Faa087e5bDf139b94F7E6f4";
        
        contractInstance=new ethers.Contract(contractAddress,abi,signer);
    
        return {contractInstance,chainId,selectedAccount,electionCommissionStatus};

    }catch(error){
        console.error("Not able to get web3 state",error.message);
        throw error;

    }
    

   
}


