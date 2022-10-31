import React from 'react'
import {Link} from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div className="drawer drawer-mobile sticky top-0">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden ">
    <div class="space-y-2">
  <div class="w-8 h-0.5 bg-gray-600"></div>
  <div class="w-8 h-0.5 bg-gray-600"></div>
  <div class="w-8 h-0.5 bg-gray-600"></div>
</div>
    </label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-64 bg-base-100 text-base-content">
    <li className='font-bold text-center text-2xl pt-4'>SELL-BELL</li>
    <br /><br />
      <li><Link to='/'>DashBoard</Link></li>
      <li><Link to='/users'>Users</Link></li>
      <li><Link to='/products'>Products</Link></li>
      <li><Link to='/sellers'>Sellers</Link></li>
      <li><Link to='/activeauction'>Active Auction</Link></li>
      <li><Link to='/accounts'>Accounts</Link></li>
      <li><Link to='/shipping'>Shipping</Link></li>
      <li className='absolute inset-x-0 bottom-0 pl-3'><a>Logout</a></li>
    </ul>
  
  </div>
</div>
  )
}
