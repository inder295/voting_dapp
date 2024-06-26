import {createBrowserRouter} from "react-router-dom";

import  Wallet from "../pages/Wallet/Wallet";

import CandidateRegistration from "../pages/Candidate/CandidateRegistration"

import VoterRegistration from "../pages/Voter/VoterRegistration"

import ElectionCommision from "../pages/ElectionCommision/ElectionCommision";
import NavigationBar from "../components/navigationBar/NavigationBar"
import CandidateList from "../pages/Candidate/CandidatesList";
import VoterList from "../pages/Voter/VoterList";


export const routes = createBrowserRouter([
    {path:"/",element:<Wallet/>},
    {path:"/candidate-registration",element:(
        <div>
             <NavigationBar/>
           <CandidateRegistration/>
        </div>
    
    )},
    {path:"/voter-registration",element:(
            <div>
                <NavigationBar/>
                <VoterRegistration/>
            </div>
   
    )},
    // {path:"/election-commision",element:<ElectionCommision/>},
    {path:"/candidate-list",element:(
            <div>
                <NavigationBar/>
                <CandidateList/>
            </div>
    
    )},
    {path:"/voter-list",element:(
            <div>
                <NavigationBar/>
                <VoterList/>
            </div>
    )},
    {path:"/election-commision",element:(
        <div>
            <NavigationBar/>
            <ElectionCommision/>
        </div>
)}
])