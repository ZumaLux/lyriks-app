import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongCard = ({ song, isPlaying, activeSong, data, i }) => {
  const handlePauseClick = () => {};
  const handlePlayClick = () => {};

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center hover:bg-black/80 group-hover:flex  ${
            activeSong?.title === song.title ? "flex" : "hidden"
          }`}
        >
          <PlayPause
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img alt="song_img" src={song.album.cover[0].url} />
      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/songs/${song?.key}`}>{song.name}</Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          {song.artists?.map((artist, i) => (
            <span key={artist.id}>
              <Link to={song.artists ? `/artists/${artist.id}` : "/top-artists"}>
                {artist.name}
                {song.artists.length > i + 1 && ", "}
              </Link>
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default SongCard;
