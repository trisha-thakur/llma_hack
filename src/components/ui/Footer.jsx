import React from "react";

export const profiles = [
  {
    id: 1,
    name: "Trisha",
    designation: "Frontend Dev",
    image: "https://avatars.githubusercontent.com/u/107291403?v=4",
  },
  {
    id: 2,
    name: "Divyanshu",
    designation: "Backend Dev",
    image: "https://avatars.githubusercontent.com/u/91051053?v=4",
  },
  {
    id: 3,
    name: "Mathangy",
    designation: "ML Dev",
    image: "https://avatars.githubusercontent.com/u/34826479?v=4",
  },
  {
    id: 4,
    name: "Aryan",
    designation: "ML Dev",
    image: "https://avatars.githubusercontent.com/u/75358720?v=4",
  },
];

const Footer = () => {
  return (
    <footer className=" bg-gray-900py-6 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl w-full">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className="flex flex-col items-center text-center bg-black-900 shadow-lg rounded-lg p-3 transition-transform hover:scale-105"
          >
            <img
              src={profile.image}
              alt={profile.name}
              className="w-20 h-20 rounded-full object-cover mb-3 border-2 border-gray-700"
            />
            <h4 className="text-base font-semibold text-white">{profile.name}</h4>
            <p className="text-xs text-gray-400">{profile.designation}</p>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
