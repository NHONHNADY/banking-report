"use client";
// import { Logo } from '@/components/logo'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="relative flex flex-col-reverse">
        <div className="relative z-10 flex w-full max-w-[400px] flex-col items-center justify-center gap-4 md:w-1/2">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
            Welcom to Our App Your All-in-One Productivity Companion
          </h2>
        </div>

        <div>
          <p className="text-body">
            This modern mobile application is designed with user-centric
            functionality and a sleek, intuitive interface..{" "}
            <span className="text-title font-medium">
              It supports an entire ecosystem
            </span>{" "}
            — from products innovate.
          </p>
          <p>
            It supports an entire ecosystem — from products to the APIs and
            platforms helping developers and businesses innovate
          </p>
          <Button asChild size="lg">
            <Link href="/dashboard">
              <span className="btn-label">Go ot Product</span>
            </Link>
          </Button>
        </div>
        <div>
          <div className="mt-2 h-fit md:absolute">
            {/* <div
              aria-hidden
              className="bg-linear-to-l z-1 to-background absolute inset-0 hidden from-transparent to-55% md:block"
            ></div> */}
            <div className="border-border/50 relative rounded-2xl border border-dotted p-2 pl-10">
              <Image
                src="/all-Brandship.png"
                className="hidden rounded-[12px] dark:block"
                alt="partnership dark"
                width={1207}
                height={929}
              />
              <Image
                src="/all-Brandship.png"
                className="rounded-[12px] shadow dark:hidden"
                alt="partnership light"
                width={1207}
                height={929}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
