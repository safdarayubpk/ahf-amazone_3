import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId } = await auth();

  // If the user is not authenticated, redirect them to the sign-in page
  if (!userId) {
    redirect("/sign-in?redirect_url=/dashboard");
  }

  const user = await currentUser();

  return (
    <main className="container mx-auto py-10">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-4">Welcome, {user?.firstName ?? "user"}!</p>
    </main>
  );
} 