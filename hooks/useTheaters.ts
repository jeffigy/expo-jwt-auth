import { useQuery } from "@tanstack/react-query";
import { getTheaters } from "../api/theaterApi";

export const useTheatersQuery = () => {
  return useQuery({
    queryKey: ["theaters"],
    queryFn: () => getTheaters(),
  });
};
