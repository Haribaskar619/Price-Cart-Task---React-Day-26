import logo from './logo.svg';
import './App.css';
import FreeTier from './FreeTier';
import PlusTier from './PlusTier';
import ProTier from './ProTier';
import { useState } from 'react';

function App() {

  const [cartItems,setCartItems] = useState([])

  let showPlanPrice = (data) => {
    
    setCartItems([...cartItems,data])
  };

//   let plans = [{
//     plan : "FREE",
//     amount : 0,
//     users : "Single User",
//     storage : "5GB Storage",
//     public : "Unlimited Public Projects",
//     comaccess : "Community Access",
   
//   },
//   {
//     plan : "PLUS",
//     amount : 9,
//     users : "Five Users",
//     storage : "5GB Storage",
//     public : "Unlimited Public Projects",
//     comaccess : "Community Access",
//     private : "Unlimited Private Projects",
//     phone : "Dedicated Phone Support",
//     subdomain : "Free subdomain",
   
// },
// {
//   plan : "PLUS",
//     amount : 49,
//     users : "Unlimited Users",
//     storage : "5GB Storage",
//     public : "Unlimited Public Projects",
//     comaccess : "Community Access",
//     private : "Unlimited Private Projects",
//     phone : "Dedicated Phone Support",
//     subdomain : "Unlimited Free subdomain",
//     status : "Monthly status reports"
// }]
  return (
    <section className="pricing py-5">
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='row'>
              
              <FreeTier pId ="1" plan="FREE" handleShowPlanPrice={showPlanPrice}></FreeTier>
              <PlusTier pId="2" plan="PLUS" handleShowPlanPrice={showPlanPrice}></PlusTier>
              <ProTier pId="3" plan="PRO" handleShowPlanPrice={showPlanPrice}></ProTier> 
  
          </div>
        </div>
       
      </div>
    </div>
    </section>
  );
}

export default App;
