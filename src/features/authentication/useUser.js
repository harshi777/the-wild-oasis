import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser() {
  const {
    isLoading,
    data: user,
    isFetching,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  console.log(user);
  const isAuthenticated = user?.role === "authenticated";
  console.log("FASF");
  console.log(isAuthenticated);
  return {
    isLoading,
    user,
    isAuthenticated,
    isFetching,
  };
}
