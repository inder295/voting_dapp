import { useState,useEffect } from "react";
import { useWeb3Context } from "../../context/useWeb3Context";
import { useNavigate } from "react-router-dom";
const VoterList = () => {
 
  const token=localStorage.getItem("token");
  const navigateTo=useNavigate()
  useEffect(()=>{
      if(!token){
          navigateTo("/");
      }


  },[navigateTo,token])
  

  const {web3State}=useWeb3Context();
  const {contractInstance}=web3State;
    const [voterList,setVoterList]=useState([])
    useEffect(()=>{


      const displayVoterList = async()=>{

        try {
          const voterArray = await contractInstance.voterList();
          setVoterList(voterArray)
          
        } catch (error) {
          console.log(error.message);
          
        }
      }
      contractInstance && displayVoterList()
    },[contractInstance])
    return ( <div>
      {voterList.length!==0?(
        voterList.map((voter)=>{
          return (
            <ul key={voter.voterId}>
              <li>{voter.name}</li>
              <li>{String(voter.age)}</li>
              <li>{voter.party}</li>
              <li>{voter.voterAddress}</li>
              <img src={`http://localhost:3000/images/VoterImages/${voter.voterAddress}.png`}></img>
            </ul>
          )

        })

      ):(
        <p>No voter Found </p> 

      )}
  </div>);
}
 
export default VoterList;