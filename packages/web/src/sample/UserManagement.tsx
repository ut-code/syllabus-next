import {
  useUserCreateMutation,
  useUserDeleteMutation,
  useUserListQuery,
} from "@/lib/tanstack/users.sample.ts";

export default function UserManagement() {
  const { data, isLoading } = useUserListQuery();
  const createUser = useUserCreateMutation();
  const deleteUser = useUserDeleteMutation();

  return (
    <div className="max-w-150 mx-auto">
      <h1 className="text-2xl font-bold text-center my-4">User Management</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className="list">
          {data?.map((user) => (
            <li className="list-row" key={user.id}>
              <span className="list-col-grow p-2 align-middle">
                {user.name}
              </span>
              <button
                type="button"
                className="btn btn-error"
                onClick={() => deleteUser.mutate(user.id)}
                disabled={deleteUser.isPending}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
      <form
        className="flex p-4 gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          createUser.mutate(
            {
              name: formData.get("name") as string,
            },
            {
              onSuccess: () => {
                const inputEl = document.getElementById(
                  "form-input-name",
                ) as HTMLInputElement;
                inputEl.value = "";
              },
            },
          );
        }}
      >
        <input
          id="form-input-name"
          type="text"
          name="name"
          className="flex-grow input input-bordered"
          required
        />
        <button
          type="submit"
          className="btn btn-primary"
          disabled={createUser.isPending}
        >
          Create
        </button>
      </form>
    </div>
  );
}
