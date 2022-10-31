import React from 'react'

export const Accounts = () => {
  return (
    <div className='p-5'>
      <div className='font-bold text-xl pb-4 text-white bg-slate-700 rounded-lg p-3'>Accounts</div>
      <div className='grid place-content-center pt-5'>
      <div className="stats shadow py-3 pl-24">
        <div className="stat pr-24">
          <div className="stat-title">Total Sales</div>
          <div className="stat-value">316K</div>
          <div className="stat-desc">From January 1st to February 1st</div>
        </div>
        
        <div className="stat place-items-center px-24">
          <div className="stat-title">Total Active Safety Deposits</div>
          <div className="stat-value text-secondary">42,04,500</div>
          <div className="stat-desc text-secondary">↗︎ 10 (14%)</div>
        </div>
        
        <div className="stat place-items-end px-24 py-3 ">
          <div className="stat-title">Profit</div>
          <div className="stat-value">31.6K</div>
          <div className="stat-desc">↘︎ 20 (14%)</div>
        </div>
      </div>
      </div>
      
      <div className='pt-3'>
      <div className="overflow-x-auto">
      <div className='grid grid-cols-6 grid-flow-col gap-4 pt-3 pb-2'>
      <div className='font-semibold text-3xl text-gray-500 col-start-1 col-end-3 pt-1'>Accounts Details</div>
      <div className="form-control col-start-3 col-end-6">
        <input type="text" placeholder="Search" className="input input-bordered" />
      </div>
      <div className='btn btn-primary col-start-6 col-end-7'>Search</div>
      </div>
        
        <table className="table w-full">
            <thead>
            <tr>
                <th></th>
                <th>User Name</th>
                <th>Total Spent(Rs)</th>
                <th>Safety Deposits(Rs)</th>
                <th>Balance left(Rs)</th>
                <th>Joining Date</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th>1</th>
                <td>RAYBAN</td>
                <td>1,20,000</td>
                <td>50,000</td>
                <td>20,000</td>
                <td>25th Oct 2021</td>
                <td><div className='btn btn-error'>Remove</div></td>
            </tr>
            </tbody>
        </table>
      </div>
      </div>
    </div>
  )
}
