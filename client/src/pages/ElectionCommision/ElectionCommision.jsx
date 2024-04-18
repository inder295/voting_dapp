import AnnounceResult from "../../components/ElectionCommision/AnnounceResult";
import DisplayWinner from "../../components/ElectionCommision/DisplayWinner";
import EmergencyDeclare from "../../components/ElectionCommision/EmergencyDeclare";
import VotingStartForm from "../../components/ElectionCommision/VotingStartForm";
import VotingStatus from "../../components/ElectionCommision/VotingStatus";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const ElectionCommision = () => {
    const token=localStorage.getItem("token");
    const navigateTo=useNavigate()
    useEffect(()=>{
        if(!token){
            navigateTo("/");
        }


    },[navigateTo,token])
    return ( <div>
        <VotingStatus/>
        <br></br>
        <DisplayWinner/>
        <br></br>
        <VotingStartForm/>
        <br></br>
        <AnnounceResult/>
        <br></br>
        
        <EmergencyDeclare/>

    </div> );
}
 
export default ElectionCommision;