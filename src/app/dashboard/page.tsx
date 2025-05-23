import { redirect } from "next/navigation";

export default function DasboardPage() {
  const isLoggedIn = true; // Replace with actual authentication logic
  if (isLoggedIn) {
    return redirect("/dashboard/overviews");
  } else {
    return redirect("/auth/login");
  }
}
