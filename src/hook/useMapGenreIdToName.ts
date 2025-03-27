interface GenreItem {
  id: number;
  name: string;
}

const useMapGenreIdtoName = (
  genreId: number[] = [],
  genres: GenreItem[] = []
) => {
  const genreMap = genreId?.map((genreId: number) => {
    const genre = genres.find((genre) => genre.id === genreId);
    return {
      name: genre?.name || "",
      id: genreId,
    };
  });

  return genreMap;
};

export default useMapGenreIdtoName;
