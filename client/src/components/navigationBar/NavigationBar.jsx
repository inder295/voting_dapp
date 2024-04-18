import { Link } from "react-router-dom";
import { useWeb3Context } from "../../context/useWeb3Context";
import "./NavigationBar.css"

const NavigationBar = () => {
    const {web3State}=useWeb3Context();
    const {electionCommissionStatus}=web3State();
    return ( <div>
        <ul>
            <li>
            <Link to="/candidate-registration" >Candidate Register</Link>

            </li><li>
            <Link to="/candidate-list" >candidate list</Link>

            </li>
            <li>
            <Link to="/voter-registration" >Voter Register</Link>

            </li>
            {electionCommissionStatus?(<li>
            <Link to="/voter-List" >Voter list</Link>

            </li>):<div></div>}
            {electionCommissionStatus?(<li>
            <Link to="/election-commision" >Election Commision</Link>

            </li>):(<div></div>)}
            
        
        </ul>
    </div> );
}
 
export default NavigationBar;