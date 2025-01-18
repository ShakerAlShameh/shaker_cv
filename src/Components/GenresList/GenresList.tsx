import useGenres from "@/hook/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { Button, HStack, Image, Text } from "@chakra-ui/react";
import TextSkeleton from "../loading/TextSkeleton";
import useGameQueryStore from "@/hook/useGameQueryStore";

export default function GenresList() {
  const setGenreId = useGameQueryStore((e) => e.setGenreId);

  const { data, error, isLoading } = useGenres();
  if (isLoading) return <TextSkeleton />;
  return (
    <>
      {error && <Text>{error.message}</Text>}
      {data?.results.map((genre) => (
        <HStack key={genre.id}>
          <Image
            boxSize="50px"
            borderRadius={14}
            padding={1}
            fit={"cover"}
            src={getCroppedImageUrl(genre.image_background)}
          />
          <Button
            onClick={() => setGenreId(genre.id)}
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
