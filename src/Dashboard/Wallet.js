import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Helmet } from 'react-helmet-async';

const Wallet = () => {
  return (
    <div className="p-5">
      <Helmet>
        <title>My Wallet - Deciders LMS</title>
      </Helmet>
      <p className="text-2xl mb-5">Account Balance</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pb-11 border-b-2">
        <div className="max-w-sm cs-card-shadow text-center py-10 bg-white rounded-sm">
          <p className="text-xl font-semibold mb-4">Current Account</p>
          <h1 className="text-2xl font-bold text-[#2366B5]">5,400 BDT</h1>
        </div>
        <div className="max-w-sm cs-card-shadow text-center py-10 bg-white rounded-sm">
          <p className="text-xl font-semibold mb-4">Withdrawed</p>
          <h1 className="text-2xl font-bold text-[#2366B5]">10,200 BDT</h1>
        </div>
        <div className="max-w-sm cs-card-shadow text-center py-10 bg-white rounded-sm">
          <p className="text-xl font-semibold mb-4">Withdraw Request</p>
          <h1 className="text-2xl font-bold text-[#2366B5]">0,000 BDT</h1>
        </div>
      </div>
      <div className="mt-14">
        <p className="text-2xl mb-7">Transactions</p>
        <div>
          <div className=" overflow-x-auto rounded-sm">
            <table className="w-full text-sm text-left">
              <thead className="text-white bg-[#2366B5]">
                <tr>
                  <th className="px-6 py-4">Type</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Details</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4">Balance</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-6 py-4">
                    <button className="bg-[#f5919d] text-[#D0021B] px-4 rounded-full font-semibold"><small>Debit</small></button>
                  </td>
                  <td className="px-6 py-4">11/20/20</td>
                  <td className="px-6 py-4">Sub Box Restaurant</td>
                  <td className="px-6 py-4">70 BDT</td>
                  <td className="px-6 py-4">5,400 GHC</td>
                  <td className="px-6 py-4"><BiDotsVerticalRounded /></td>
                </tr>

                <tr>
                  <td className="px-6 py-4">
                    <button className="bg-[#b2ddb1] text-[#0A9707] px-4 rounded-full font-semibold"><small>Credit</small></button>
                  </td>
                  <td className="px-6 py-4">10/15/20</td>
                  <td className="px-6 py-4">Salary</td>
                  <td className="px-6 py-4">4,500 BDT</td>
                  <td className="px-6 py-4">5,330 GHC</td>
                  <td className="px-6 py-4"><BiDotsVerticalRounded /></td>
                </tr>
                <tr>
                  <td className="px-6 py-4">
                    <button className="bg-[#99a8b8] text-[#2366B5] px-4 rounded-full font-semibold"><small>Transfer</small></button>
                  </td>
                  <td className="px-6 py-4">10/10/20</td>
                  <td className="px-6 py-4">Transfer from Savings</td>
                  <td className="px-6 py-4">1000 BDT</td>
                  <td className="px-6 py-4">6,300 GHC</td>
                  <td className="px-6 py-4"><BiDotsVerticalRounded /></td>
                </tr>

                <tr>
                  <td className="px-6 py-4">
                    <button className="bg-[#f5919d] text-[#D0021B] px-4 rounded-full font-semibold"><small>Debit</small></button>
                  </td>
                  <td className="px-6 py-4">9/27/20</td>
                  <td className="px-6 py-4">Palace Supermarket</td>
                  <td className="px-6 py-4">250 BDT</td>
                  <td className="px-6 py-4">6,050 GHC</td>
                  <td className="px-6 py-4"><BiDotsVerticalRounded /></td>
                </tr>

                <tr>
                  <td className="px-6 py-4">
                    <button className="bg-[#f5919d] text-[#D0021B] px-4 rounded-full font-semibold"><small>Debit</small></button>
                  </td>
                  <td className="px-6 py-4">9/25/20</td>
                  <td className="px-6 py-4">Pan And Cook</td>
                  <td className="px-6 py-4">56 BDT</td>
                  <td className="px-6 py-4">5,994 GHC</td>
                  <td className="px-6 py-4"><BiDotsVerticalRounded /></td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
