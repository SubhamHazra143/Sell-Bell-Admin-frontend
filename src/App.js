import './index.css'
import { Activeauction } from './Activeauction';
import { Dashboard } from './Dashboard';
import { Products } from './Products';
import { Sellers } from './Sellers';
import {Sidebar}from './Sidebar'
import { Users } from './Users';
import {Accounts} from './Accounts';
import { Shipping } from './Shipping';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="App bg-white">
      <Router>
      <div className='grid grid-cols-6'>
      <div class="col-start-1 col-end-2"><Sidebar /></div>
      <div class="col-start-2 col-end-7 ">
      <Routes>
        <Route path="/" element={<><Dashboard/></>}/>
        <Route path="/users" element={<><Users/></>}/>
        <Route path="/products" element={<><Products/></>}/>
        <Route path="/sellers" element={<><Sellers/></>}/>
        <Route path="/activeauction" element={<><Activeauction/></>}/>
        <Route path="/accounts" element={<><Accounts/></>}/>
        <Route path="/shipping" element={<><Shipping/></>}/>
        
      </Routes>
      </div>
      </div>
      </Router>
      {/*<div className='grid grid-cols-6'>
      <div class="col-start-1 col-end-2"><Sidebar /></div>
      <div class="col-start-2 col-end-7 "><Dashboard /></div>
      <div class="col-start-2 col-end-7 "><Users /></div>
      <div class="col-start-2 col-end-7 "><Users /></div>
      <div class="col-start-2 col-end-7 "><Sellers /></div>
      <div class="col-start-2 col-end-7 "><Activeauction /></div>
      <div class="col-start-2 col-end-7 "><Accounts /></div>
      <div class="col-start-2 col-end-7 "><Shipping /></div>*/}
      
      
     
      
    </div>
  );
}

export default App;
