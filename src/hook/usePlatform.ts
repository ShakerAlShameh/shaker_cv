import usePlatformFilter from "./usePlatformFilter";

export const usePlatform = (id?: number) => {
  const { data } = usePlatformFilter();
  return data?.results.find((p) => p.id === id);
};
