import type { User } from "@packages/models";
import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "@/lib/tanstack/client.ts";
import { sampleUser } from "@/services/user/mock_data.ts";
import { keys } from "@/lib/tanstack/keys";

// TODO: use backend to persist data
let currentUser = sampleUser;

export const useCurrentUserQuery = () => {
  return useQuery({
    queryKey: keys.users.currentUser,
    queryFn: async () => {
      // TODO: fetch actual user
      await new Promise((resolve) => setTimeout(resolve, 500));
      return currentUser;
    },
  });
};

export const useUpdateUserMutation = () => {
  return useMutation({
    mutationFn: async (data: User) => {
      currentUser = data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: keys.users.currentUser,
      });
    },
  });
};
