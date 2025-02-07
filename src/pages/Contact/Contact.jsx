import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="m-10">
      <h2 className="text-3xl text-center font-semibold">
        Let's get connected
      </h2>

      <div className=" flex justify-between">
        <div>sdfsdfsadf</div>

        <div className="card bg-base-100 mt-10 w-6/12  shadow-2xl">
          <form className="card-body w-full p-10">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-bold">You Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-bold">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
              <label
                className="label-text mt-2 text-xl font-bold"
                for="w3review"
              >
                Write your Masege
              </label>
              <textarea
                className="border mt-1 rounded-md p-2"
                id="w3review"
                name="w3review"
                rows="4"
                cols="50"
                placeholder="Write you masege here.."
              ></textarea>
            </div>
            <div className=" mt-6">
              <button className="btn ">Send Masege</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
