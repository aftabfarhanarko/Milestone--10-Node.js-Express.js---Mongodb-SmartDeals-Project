import React, { useContext, useEffect, useState } from "react";
import { AuthContex } from "../Context/AuthContex";

const MyBids = () => {
  const { user } = useContext(AuthContex);
  const [deltet, setDeltet] = useState([]);

  useEffect(() => {
    if (user.email) {
      fetch(`http://localhost:3000/bids?byer_email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("This is ", data);
          setDeltet(data);
        });
    }
  }, [user.email]);

  console.log(deltet.byer_image);

  return (
    <div className="w-10/12 mx-auto my-16 rounded-lg shadow-2xl">
      <div className="overflow-x-auto shadow">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL No</th>
              <th>Product</th>
              <th> Seller</th>
              <th>Bid Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {/* row 1 */}
            {deltet?.map((bid, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className=" rounded-full  border border-gray-500">
                      <img
                        className="w-12 h-12 rounded-full"
                        src={bid.byer_image ? bid.byer_image : ""}
                      ></img>
                    </div>
                    <div>
                      <p className="font-bold"> {bid.byer_name}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-ghost badge-sm">
                    {bid.byer_email}
                  </span>
                </td>
                <td>
                  $<span>{bid.bid_price}</span>
                </td>
                <td>
                  {bid.status === "pending" ? (
                    <div className="badge badge-warning">{bid.status}</div>
                  ) : (
                    <div className="badge badge-success">{bid.status}</div>
                  )}
                </td>
                <th>
                  <button className="btn btn-outline text-red-600 btn-xs">
                    Remove Bid
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBids;
