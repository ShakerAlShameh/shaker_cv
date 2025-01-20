import useGameTrailers from "@/hook/useGameTrailers";
import useScreenShort from "@/hook/useScreenShort";
import getCroppedImageUrl from "@/services/image-url";
import { GridItem, Image, SimpleGrid } from "@chakra-ui/react";

interface Props {
  gameId: string | number;
}

export default function ScreenShorts({ gameId }: Props) {
  const { data, isLoading } = useScreenShort(gameId);
  const { data: videoData } = useGameTrailers(gameId);
  if (isLoading) return <>Loading.....</>;
  return (
    <>
      {videoData?.results[0] && (
        <video
          style={{ padding: "8px" }}
          controls
          autoPlay
          src={videoData?.results[0].data[480]}
        />
      )}

      <SimpleGrid columns={2} paddingY={2}>
        {data?.results.map((e) => (
          <GridItem key={e.id}>
            <Image
              padding={2}
              src={getCroppedImageUrl(e.image)}
              alt={`Image${e.id}`}
            />
          </GridItem>
        ))}
      </SimpleGrid>
    </>
  );
}
