import { Stack, Skeleton, HStack } from "@chakra-ui/react";
import { SkeletonText } from "../ui/skeleton";

export default function TextSkeleton() {
  const itemsLoading = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <Stack>
      {itemsLoading.map((e) => (
        <HStack key={e} borderRadius={12}>
          <Skeleton height="30xp" />
          <SkeletonText margin={1} noOfLines={3} />
        </HStack>
      ))}
    </Stack>
  );
}
