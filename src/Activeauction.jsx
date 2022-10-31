import React from 'react'

export const Activeauction = () => {
  return (
    <div className='p-5'>
      <div className='font-bold text-xl pb-4 text-white bg-slate-700 rounded-lg p-3'>Active Auctions</div>
      <div className='pt-3'>
      <div className="overflow-x-auto">
      <div className='grid grid-cols-6 grid-flow-col gap-4 py-2'>
      <div className='font-semibold text-3xl text-gray-500 col-start-1 col-end-3 pt-1'>Auction Details</div>
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
                <th>Product Name</th>
                <th>Company/Seller</th>
                <th>Starting Bid</th>
                <th>Highest Bid</th>
                <th>Ending date</th>
                <th>Participants</th>
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
                <td>Sunglass</td>
                <td>RAYBAN</td>
                <td>1,000</td>
                <td>1,570</td>
                <td>29th Oct 2022 7:30:00</td>
                <td>8</td>
                <td><div className='btn btn-error'>Remove</div></td>
            </tr>
            </tbody>
        </table>
      </div>
      </div>  
    </div>
  )
}
