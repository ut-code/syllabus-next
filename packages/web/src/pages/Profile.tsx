import { authClient } from "@/lib/auth-client";

export default function Profile() {
  const { data: session } = authClient.useSession();
  const username = session?.user.name;
  return (
    <div>
      {username ? <div>Hello {username}</div> : <div>Who are you?</div>}
    </div>
  );
}
