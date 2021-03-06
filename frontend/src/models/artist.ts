import { TrackImage, randomTrackImage } from "./trackImage"
export type Artist = {
  followers: number;
  genres: string[];
  mainArtist: string;
  featuredArtists: string[];
  popularity: number;
  images: TrackImage[];
};

export const randomArtist = (): Artist => {
  return {
    followers: 0,
    genres: [""],
    mainArtist: "",
    featuredArtists: [""],
    popularity: 0,
    images: [randomTrackImage()],
  };
};
