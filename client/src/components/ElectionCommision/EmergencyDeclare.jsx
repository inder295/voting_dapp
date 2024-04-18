import { useWeb3Context } from "../../context/useWeb3Context";
const EmergencyDeclare = () => {
    const {web3State}=useWeb3Context();
    const {contractInstance}=web3State;
    const emergencyDeclared=async()=>{
        await contractInstance.emergency();
        alert("Emergency declared");
    }
    return ( <button onClick={emergencyDeclared }>Emergency</button> );
}
 
export default EmergencyDeclare; 