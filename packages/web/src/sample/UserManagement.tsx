import type { CreateUser } from "@packages/models";
import { useMutation, useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api.ts";
import { queryClient } from "@/lib/tanstack/client.ts";

const keys = {
  users: {
    list: ["users", "list"] as const,
  },
};

const useUserListQuery = () =>
  useQuery({
    queryKey: keys.users.list,
    queryFn: async () => {
      const { data, error } = await api.users.get();
      if (error) throw error;
      return data;
    },
  });

const useUserCreateMutation = () =>
  useMutation({
    mutationFn: async (user: CreateUser) => {
      const { data, error } = await api.users.post(user);
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: keys.users.list,
      });
    },
  });

const useUserDeleteMutation = () =>
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
    onSuccess: () => {},
  });

export default function UserManagement() {
  const { data, isLoading } = useUserListQuery();
  const createUser = useUserCreateMutation();
  const deleteUser = useUserDeleteMutation();

  return (
    <div>
      aaaaaa!!!!!!!!
      <h1>User Management</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data?.map((user) => (
            <li key={user.id}>
              {user.name}
              <button onClick={() => deleteUser.mutate(user.id)} type="button">
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          createUser.mutate({
            name: formData.get("name") as string,
          });
        }}
      >
        <input type="text" name="name" />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
