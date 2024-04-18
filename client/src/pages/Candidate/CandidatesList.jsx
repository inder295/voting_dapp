import { useState,useEffect } from "react";
import { useWeb3Context } from "../../context/useWeb3Context";
import { useNavigate } from "react-router-dom";
import "./CandidateList.css";

const CandidateList = () => {
   
  const token=localStorage.getItem("token");
  const navigateTo=useNavigate()
  useEffect(()=>{
      if(!token){
          navigateTo("/");
      }


  },[navigateTo,token])
   
    
    const {web3State}=useWeb3Context();
    const {contractInstance}=web3State;
    const [candidateList,setCandidateList]=useState([])
    useEffect(()=>{
      const displayCandidatesList = async()=>{
         
        try {
          const candidateArray = await contractInstance.candidateList();
          console.log(candidateArray)
          setCandidateList(candidateArray)
          
        } catch (error) {
          console.log(error.message);
          
        }

      }
      contractInstance && displayCandidatesList()
    },[contractInstance])
    return ( <div>
        {candidateList.length!==0?(
          candidateList.map((candidate)=>{
            return (
              <ul key={candidate.candidateId}>
                <li>{candidate.name}</li>
                <li>{String(candidate.age)}</li>
                <li>{candidate.party}</li>
                <li>{candidate.candidateAddress}</li>
                <img src={`http://localhost:3000/images/CandidateImages/${candidate.candidateAddress}.png`}></img>
              </ul>
            )

          })

        ):(
          <p>No Candidates Found </p>

        )}
    </div>);
}
 
export default CandidateList;