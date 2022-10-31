import React from 'react'

export const Sellers = () => {
  return (
    <div className='p-5'>
      <div className='font-bold text-xl pb-4 text-white bg-slate-700 rounded-lg p-3'>Seller</div>
      
      <div className='pt-3'>
      <div className="overflow-x-auto">
      <div className='grid grid-cols-6 grid-flow-col gap-4 py-2'>
      <div className='font-semibold text-3xl text-gray-500 col-start-1 col-end-3 pt-1'>Seller Details</div>
      <div className="form-control col-start-3 col-end-6">
        <input type="text" placeholder="Search" className="input input-bordered" />
      </div>
      <div className='btn btn-primary col-start-6 col-end-7'>Search</div>
      </div>
        
        <table className="table w-full">
            <thead>
            <tr>
                <th></th>
                <th>Image</th>
                <th>User Name</th>
                <th>Products Sold</th>
                <th>Total Sales(Rs)</th>
                <th>Safety Deposits(Rs)</th>
                <th>Joining Date</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th>1</th>
                <td>
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src="https://placeimg.com/192/192/people" />
                    </div>
                  </div>
                </td>
                <td>RAYBAN</td>
                <td>25</td>
                <td>15,24,680</td>
                <td>20,000</td>
                <td>25th Oct 2021</td>
                <td><div className='btn btn-error'>Remove</div></td>
            </tr>
            <tr>
                <th>2</th>
                <td>
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src="https://placeimg.com/192/192/people" />
                    </div>
                  </div>
                </td>
                <td>Roy Brothers</td>
                <td>13</td>
                <td>1,50,000</td>
                <td>40,452</td>
                <td>27th Nov 2021</td>
                <td><div className='btn btn-error'>Remove</div></td>
            </tr>
            </tbody>
        </table>
      </div>
      </div>  
    </div>
  )
}
