import type { CreateUser } from "@packages/models";
import { useMutation, useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api.ts";
import { queryClient } from "./client.ts";
import { keys } from "./keys.ts";

export const useUserListQuery = () =>
  useQuery({
    queryKey: keys.users_sample.list,
    queryFn: async () => {
      const { data, error } = await api.users.get();
      if (error) throw error;
      return data;
    },
  });

export const useUserCreateMutation = () =>
  useMutation({
    mutationFn: async (user: CreateUser) => {
      const { data, error } = await api.users.post(user);
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: keys.users_sample._,
      });
    },
  });

export const useUserDeleteMutation = () =>
  useMutation({
    mutationFn: async (id: string) => {
      const { data, error } = await api.users.delete({
        $query: {
          id,
        },
      });
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: keys.users_sample._,
      });
    },
  });
