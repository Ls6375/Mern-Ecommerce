import React from "react";

const Newsletter = () => {

	const onSubmitHandler = (event) => {
		event.preventDefault();
		
	}

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off{" "}
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
        commodi at obcaecati laboriosam iste ullam sint ipsam quos! Aliquid,
        numquam.
      </p>
      <form className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
        <input
          type="email"
          id="UserEmail"
          placeholder="Enter your email"
          className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />
        <button
          className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
          type="submit"
        >
          <span className="absolute inset-0 border border-black group-active:border-gray-900"></span>
          <span className="block text-white border border-black bg-black px-12 py-3 transition-transform active:border-gray-900 active:bg-gray-900 group-hover:-translate-x-1 group-hover:-translate-y-1">
            Subscribe
          </span>
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
