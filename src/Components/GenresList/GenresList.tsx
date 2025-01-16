import useGenres, { Genres } from "@/hook/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { Button, HStack, Image, Text } from "@chakra-ui/react";
import TextSkeleton from "../loading/TextSkeleton";

interface Param {
  selectedGenre: (genre: Genres) => void;
}

export default function GenresList({ selectedGenre }: Param) {
  const { data, error, loading } = useGenres();
  if (loading) return <TextSkeleton />;
  return (
    <>
      {error && <Text>{error}</Text>}
      {data.map((genre) => (
        <HStack key={genre.id}>
          <Image
            boxSize="50px"
            borderRadius={14}
            padding={1}
            fit={"cover"}
            src={getCroppedImageUrl(genre.image_background)}
          />
          <Button
            onClick={() => selectedGenre(genre)}
            variant={"surface"}
            type="button"
          >
            {genre.name}
          </Button>
        </HStack>
      ))}
    </>
  );
}
