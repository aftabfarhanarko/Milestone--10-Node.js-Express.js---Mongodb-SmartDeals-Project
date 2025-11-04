import React from "react";
import { Link } from "react-router";

const NoProducat = () => {
  return (
    <div className="hero bg-base-100 h-[400px] ">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-2xl md:text-4xl font-bold">No Producat Found</h1>
          <p className="py-6">
          "Please create a product first — once it’s created, your product will appear here."
          </p>
          <Link to="/creatProducat">
          <button className="btn btn-primary">Creat Producat Now</button>
           </Link>
        </div>
      </div>
    </div>
  );
};

export default NoProducat;
