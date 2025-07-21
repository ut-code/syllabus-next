import { authClient } from "@/lib/auth-client";

export default function SignIn() {
  const handleClick = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        // Use an absolute path for the callbackURL to prevent redirecting to the server.
        callbackURL: `${import.meta.env.PUBLIC_WEB_URL}/profile`,
      });
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <div>
      <button type="button" onClick={handleClick} className="btn btn-primary">
        sign in with google
      </button>
    </div>
  );
}
