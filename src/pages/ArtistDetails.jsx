import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Error, Loader } from "../components";
import { useGetArtistDetailsQuery } from "../redux/services/spotify";

const ArtistDetails = () => {
  const { id } = useParams();
  const {
    data: artistData,
    isFetching: isFetchingArtistData,
    error,
  } = useGetArtistDetailsQuery(id);

  if (isFetchingArtistData)
    return <Loader title={"Loading artist details..."} />;
  if (error) <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={id} artistData={artistData} />
      <p className="text-gray-400 text-base my-1">
        Here showuld be artist details
      </p>
    </div>
  );
};

export default ArtistDetails;
