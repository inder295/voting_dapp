import { useWeb3Context } from "../../context/useWeb3Context";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./CandidateRegistration.css"
import { useNavigate } from "react-router-dom";
const CandidateRegistration = () => {

    const token=localStorage.getItem("token");
    const navigateTo=useNavigate()
    useEffect(()=>{
        if(!token){
            navigateTo("/");
        }


    },[navigateTo,token])
   

    const {web3State}=useWeb3Context();
    const {contractInstance}=web3State;
    const [file,setFile]=useState("")
    const nameRef=useRef();
    const ageRef=useRef();
    const maleRef=useRef();
    const femaleRef=useRef();
    const otherRef=useRef();
    const partyRef=useRef();
    const handleCandidateRegistration=async(e)=>{
        
        try {
                e.preventDefault();
                const formData=new FormData();
                formData.append("file",file);

                const token=localStorage.getItem("token");
                const config={

                    headers:{

                        'x-access-token':token
                    }
                }
                await axios.post(`http://localhost:3000/api/postCandidateImage`,formData,config);
                

                const name=nameRef.current.value;
                const age=ageRef.current.value;
           
                const party=partyRef.current.value;
                let gender;
                if(maleRef.current.checked){
                    gender=0;

                }else if(femaleRef.current.checked){
                    gender=1;

                }else{
                    gender=2;

                }
  
                if(name==="" || age==="" || gender==="" || party===""){
                    throw new Error("Input fields cannot be empty!!");
                } 
                const tx=await contractInstance.candidateRegister(name,party,age,gender);
                const receipt=await tx.wait();
                
                nameRef.current.value="";
                ageRef.current.value="";
                  
                 partyRef.current.value="";
                console.log("Transaction successful"); 
            
        } catch (error) {
            console.error(error.message);
        }
    }
    
    return ( <div>
        <form onSubmit={handleCandidateRegistration}>
            <label>Candidate Name</label>
            <input type="text" placeholder="Candidate Name" ref={nameRef}></input>
            <label>Candidate Age</label>
            <input type="text" placeholder="Candidate Age" ref={ageRef}></input>
             
            <input type="text" placeholder="Candidate Party" ref={partyRef}></input>
            <button type="Submit">Register</button>
             <label>Gender</label>
             <div>
                <input type="radio" id="male" name="gender" value="male" ref={maleRef} />
                <label htmlFor="male">Male</label>
            </div>
            <div>
                <input type="radio" id="female" name="gender" value="female" ref={femaleRef} />
                <label htmlFor="female">Female</label>
            </div>
            <div>
                <input type="radio" id="other" name="gender" value="other" ref={otherRef} />
                <label htmlFor="other">Other</label>
            </div>
            <br/>
        </form>
        <br></br>
        <input type="file" onChange={(e)=>setFile(e.target.file[0])}></input>
        
    </div> );
}
 
export default CandidateRegistration;