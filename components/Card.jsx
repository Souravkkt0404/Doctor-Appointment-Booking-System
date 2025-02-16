import { Button } from "@mui/material";
import Image from "next/image";

const DoctorCard = ({ image, name, description }) => {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-2xl p-5 text-center">
      <div className="flex justify-center">
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>
      <h2 className="text-xl font-semibold mt-3">{name}</h2>
      <hr className="w-20 border-t-2 border-gray-300 my-3 mx-auto" />
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <div className="flex justify-center gap-4">
        <Button className="px-4 py-2 bg-blue-500 text-gray-800 rounded-lg hover:bg-blue-600">
          View Profile
        </Button>
        <Button className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400">
          Contact
        </Button>
      </div>
    </div>
  );
};

export default DoctorCard;
