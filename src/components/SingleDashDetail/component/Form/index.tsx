import React from "react";

const index = () => {
  return (
    <div className="m-6 ">
      <form>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-7 lg:w-[75%]">
          <div className="mb-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="Name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="Name"
              type="text"
              name="Name"
              value={"Jane Doe"}
              disabled
            />
          </div>
          <div className="mb-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="email"
              type="email"
              name="email"
              value={"janedoe@gmail.com"}
              disabled
            />
          </div>
          <div className="mb-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="PhoneNumber"
            >
              Phone Number
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="PhoneNumber"
              type="tel"
              name="PhoneNumber"
              value={"234567899022"}
              disabled
            />
          </div>
          <div className="mb-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="FarmName"
            >
              Farm Name
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="FarmName"
              type="text"
              name="FarmName"
              value={"Vinfarm"}
              disabled
            />
          </div>
          <div className="mb-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="SubscriptionPlan"
            >
              Subscription plan
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="SubscriptionPlan"
              type="text"
              name="SubscriptionPlan"
              value={"Professional"}
              disabled
            />
          </div>
          <div className="mb-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="SubscriptionStatus"
            >
              Subscription status
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="SubscriptionStatus"
              type="text"
              name="SubscriptionStatus"
              value={"Active"}
              disabled
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default index;
