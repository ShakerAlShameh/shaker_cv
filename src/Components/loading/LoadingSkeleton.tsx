import { Card, Skeleton } from "@chakra-ui/react";
import { SkeletonText } from "../ui/skeleton";

export default function LoadingSkeleton() {
  const itemsLoading = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {itemsLoading.map((e) => (
        <Card.Root key={e} borderRadius={12}>
          <Skeleton height="300px" />
          <SkeletonText margin={1} noOfLines={3} />
        </Card.Root>
      ))}
    </>
  );
}
