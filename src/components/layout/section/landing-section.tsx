"use client";
// import { Logo } from '@/components/logo'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="m-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
          Welcom to Our App Your All-in-One Productivity Companion
        </h2>
        <div className="relative">
          <div className="relative z-10 space-y-4 md:w-1/2">
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
            {/* <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Zap className="size-4" />
                  <h3 className="text-sm font-medium">Faaast</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  It supports an entire helping developers and innovate.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Cpu className="size-4" />
                  <h3 className="text-sm font-medium">Powerful</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  It supports an entire helping developers and businesses.
                </p>
              </div>
            </div> */}
          </div>
          <div className="mt-12 h-fit md:absolute md:-inset-y-12 md:inset-x-0 md:mt-0 md:px-2">
            <div
              aria-hidden
              className="bg-linear-to-l z-1 to-background absolute inset-0 hidden from-transparent to-55% md:block"
            ></div>
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
