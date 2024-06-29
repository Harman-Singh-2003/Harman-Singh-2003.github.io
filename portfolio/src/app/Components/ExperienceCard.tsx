import React from "react";

interface Props {
  // Define the props for your component here
}

const ExperienceCard: React.FC<Props> = (props) => {
  // Implement your component logic here

  return (
    // JSX code for your component goes here
    <div className=" bg-slate-300 p-4 flex">
      <div className="bg-yellow-500 size-40">Image</div>
      <div className="pl-4 flexflex-col flex-grow">
        <div className="bg-indigo-800 flex justify-between items-center">
          <div>
            <div className="text-xl">Company</div>
            <div className="text-lg">Position</div>
          </div>
          <div className="text-sm">Date</div>
        </div>
        <div className="bg-green-800">Description</div>
      </div>
    </div>
  );
};

export default ExperienceCard;
