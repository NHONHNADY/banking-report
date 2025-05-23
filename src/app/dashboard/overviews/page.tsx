"use client";
import { useParams } from "next/navigation";

export default function OverviewPage() {
  const params = useParams<{ account: string }>();
  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <h1 className="text-2xl font-bold">Overview: {params.account}</h1>
        <p className="mt-4 text-muted-foreground">
          This is the overview page of the dashboard.
        </p>
      </div>
    </div>
  );
}
