import useData from "./useData";

export interface PlatformFilter {
  id: number;
  name: string;
  slug: string;
}

const usePlatformFilter = () =>
  useData<PlatformFilter>("platforms/lists/parents");

export default usePlatformFilter;
