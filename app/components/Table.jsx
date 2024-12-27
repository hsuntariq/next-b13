import React from "react";

const Table = () => {
  return (
    <>
      <div className="p-4 w-full bg-primary rounded-lg">
        <h2 className="text-2xl text-gray-200">Latest Transaction</h2>
        <table className="text-white text-start capitalize w-full ">
          <thead className="text-start">
            <tr className="text-start">
              <th className="text-start">Name</th>
              <th className="text-start">status</th>
              <th className="text-start">date</th>
              <th className="text-start">amount</th>
            </tr>
          </thead>
          <tbody className="">
            {Array.from({ length: 5 }).map((_, index) => {
              return (
                <>
                  <tr>
                    <td className="py-4">Ali</td>
                    <td className="py-4">Active</td>
                    <td className="py-4">21-10-12</td>
                    <td className="py-4">$4000</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
