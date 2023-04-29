import { Link } from "react-router-dom";
import reactLogoTemp from "../assets/logo.svg";

const DetailsHeader = ({ artistId, artistData, songData }) => {
  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />
      <div className="absolute inset-0 flex items-center">
        <img
          src={
            songData?.images?.coverart
              ? songData?.images?.coverart.replace("{w}", "500").replace("{h}", "500")
              : reactLogoTemp
          }
          alt="art"
          className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
        />

        <div className="ml-5">
          <p className="text-white text-lg ">{songData?.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;
