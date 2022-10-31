import React from 'react'

export const Shipping = () => {
  return (
    <div className='p-5'>
      <div className='font-bold text-xl pb-4 text-white bg-slate-700 rounded-lg p-3'>Shipping</div>
      <div className='grid grid-cols-4 gap-4 pt-2'>
        <div className="rounded-lg py-2 w-fit bg-base-100 shadow-xl text-center">
            <div className="p-4">
                <div className='grid grid-cols-2'>
                  <div className='pt-3 p-4'>
                    <h1 className="stat-title justify-center text-success">New Orders</h1>
                    <p className='stat-value text-success' >150</p>
                  </div>
                <div className='p-2 w-24 rounded-lg bg-slate-400'>
                <img src="https://cdn-icons-png.flaticon.com/512/839/839860.png" alt="" className='' />
                </div>
                </div>
            </div>
        </div>
        <div className="rounded-lg py-2 w-fit bg-base-100 shadow-xl text-center">
            <div className="p-4">
                <div className='grid grid-cols-2'>
                  <div className='pt-3 p-4'>
                    <h1 className="stat-title justify-center">Packaging</h1>
                    <p className='stat-value' >80</p>
                  </div>
                <div className='p-2 w-24 rounded-lg bg-slate-400'>
                <img src="https://cdn-icons-png.flaticon.com/512/679/679720.png" alt="" className='' />
                </div>
                </div>
            </div>
        </div>
        <div className="rounded-lg py-2 w-fit bg-base-100 shadow-xl text-center">
            <div className="p-4">
                <div className='grid grid-cols-2'>
                  <div className='pt-3 p-4'>
                    <h1 className="stat-title justify-center">Shipping</h1>
                    <p className='stat-value' >120</p>
                  </div>
                <div className='p-2 w-24 rounded-lg bg-slate-400'>
                <img src="https://cdn-icons-png.flaticon.com/512/411/411763.png" alt="" className='' />
                </div>
                </div>
            </div>
        </div>
        <div className="rounded-lg py-2 w-fit bg-base-100 shadow-xl text-center">
            <div className="p-4">
                <div className='grid grid-cols-2'>
                  <div className='pt-3 p-4'>
                    <h1 className="stat-title justify-center">Delivered</h1>
                    <p className='stat-value' >8000</p>
                  </div>
                <div className='p-2 w-24 rounded-lg bg-slate-400'>
                <img src="https://cdn-icons-png.flaticon.com/512/1337/1337232.png" alt="" className='' />
                </div>
                </div>
            </div>
        </div>
      </div>
      <div className='pt-3'>
      <div className="overflow-x-auto">
        <div className='font-semibold text-3xl text-gray-500 pb-2'>Latest Shipping</div>
        <table className="table w-full">
        <thead>
            <tr>
                <th>Product Id</th>
                <th>Image</th>
                <th>Product</th>
                <th>Receiver</th>
                <th>Sender</th>
                <th>Date</th>
                <th>Bid value</th>
                <th>Status</th>
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
                <td>Guitar</td>
                <td>Subham Hazra</td>
                <td>Roy Brothers</td>
                <td>24th Oct 2022</td>
                <td>15,524</td>
                <td>Packaging</td>
                <td><div className='btn btn-error'>Pause</div></td>
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
                <td>Parker Pen</td>
                <td>Subham Hazra</td>
                <td>Parker </td>
                <td>29th Oct 2022</td>
                <td>1000</td>
                <td>Shipping</td>
                <td><div className='btn btn-error'>Pause</div></td>
            </tr>
            </tbody>
        </table>
      </div>
      </div>
    </div>
  )
}
