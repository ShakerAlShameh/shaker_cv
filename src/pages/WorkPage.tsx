import { SimpleGrid, Image } from "@chakra-ui/react";
import { useParams } from "react-router";
import { urlImages } from "./url-images";

interface ImageItem {
  id: number;
  image: string;
}

interface Images {
  health: ImageItem[];
  mac: ImageItem[];
  sarwaran: ImageItem[];
  zer: ImageItem[];
  tsc: ImageItem[];
}

const WorkPage = () => {
  const { slug } = useParams<{ slug?: keyof Images }>();
  const images: Images = urlImages;

  const currentImages = slug && images[slug] ? images[slug] : images.health;

  return (
    <SimpleGrid padding={3} gap={4} columns={[1, 5, 9]}>
      {currentImages.map((image) => (
        <Image
          key={image.id}
          _hover={{ transform: "scale(1.03)", transition: ".13s ease-in" }}
          overflow="hidden"
          borderRadius={12}
          fit={"cover"}
          src={image.image}
        />
      ))}
    </SimpleGrid>
  );
};

export default WorkPage;
