"use client";
import { useParams, usePathname, useSearchParams } from "next/navigation";

export default function AccontPage() {
  const params = useParams<{ account: string }>();
  const pathname = usePathname();
  const searchparams = useSearchParams();
  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <h1 className="text-2xl font-bold">
          Acount Overview: {params.account}
        </h1>
        <h1 className="text-2xl font-bold">PathName: {pathname}</h1>
        <h1 className="text-2xl font-bold">
          SearchParam: {searchparams.get("id")}
        </h1>
        <p className="mt-4 text-muted-foreground">
          This is the overview page of the dashboard.
        </p>
      </div>
    </div>
  );
}
