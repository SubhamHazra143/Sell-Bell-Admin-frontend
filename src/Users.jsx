import React from 'react'

export const Users = () => {
  return (
    <div className=' p-5'>
      <div className='font-bold text-xl py-5 text-white bg-slate-700 rounded-lg p-3' >Users</div>
      
      
      <div>
      <div className="overflow-x-auto pt-5 ">
      <div className='grid grid-cols-6 grid-flow-col gap-4 py-2'> 
      <div className='font-semibold text-3xl text-gray-500 pt-1'>User Details</div> 
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
                        <th>Email Id</th>
                        <th>Phone Number</th>
                        <th>Buyer/Seller</th>
                        <th>Status</th>
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
                        <td>Subham Hazra</td>
                        <td>subhamhazra143@gmail.com</td>
                        <td>9831998054</td>
                        <td>Both</td>
                        <td>
                          <label className="swap">
                            <input type="checkbox" />
                            <div className="swap-off btn bg-lime-500 text-black">Active</div>
                            <div className="swap-on btn">Deactive</div>
                          </label>
                        </td>
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
                        <td>Souryadip Das</td>
                        <td>souryadipdas@gmail.com</td>
                        <td>1234567890</td>
                        <td>Buyer</td>
                        <td>
                          <label className="swap">
                            <input type="checkbox" />
                            <div className="swap-off btn bg-lime-500 text-black">Active</div>
                            <div className="swap-on btn">Deactive</div>
                          </label>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
      </div>
    </div>
  )
}
