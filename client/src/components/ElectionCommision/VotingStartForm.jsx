import { useWeb3Context } from "../../context/useWeb3Context";
import { useRef } from "react";
const VotingStartForm = () => {
    const {web3State}=useWeb3Context();
    const {contractInstance}=web3State;
    const startTimeRef=useRef();
    const endTimeRef=useRef();
    const timeInSeconds=(time)=>{

      const date=new Date();
      return Math.floor(date.getTime()/1000);
       
    }


    const handleVotingTime=async(e)=>{
       e.preventDefault();
       const startTime=startTimeRef.current.value;
       const endTime=endTimeRef.current.value;
       
       const startTimeSec=timeInSeconds(startTime)
       const endTimeSec=timeInSeconds(endTimeRef)
       console.log(startTimeSec,endTimeSec);
       await contractInstance.voteTime(startTime,endTime);
       alert("Voting Started");


    }
    return ( <>
      <form onSubmit={handleVotingTime}>
        <label htmlFor="start">Start Time</label>
        <input type="text" ref={startTimeRef}></input>
        <label htmlFor="end">End Time</label>
        <input type="text" ref={endTimeRef}></input>
        <button>Voting Start</button>
      </form>
    </> );
}
 
export default VotingStartForm;