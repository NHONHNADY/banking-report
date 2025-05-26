"use client";
// import { Logo } from '@/components/logo'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="py-4 md:py-16 lg:py-24 px-0">
      <div className="relative flex flex-col items-center justify-center gap-8 px-4 md:flex-row md:px-8 lg:px-16">
        <div className="relative z-10 flex w-full max-w-[600px] flex-col items-center justify-center gap-4 md:w-1/2">
          <div className="flex w-full flex-col-reverse">
            <h4 className="relative z-10 max-w-xl text-4xl font-small lg:text-5xl">
              Welcom to Our App Your All-in-One Productivity Companion
            </h4>
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
            <div className="mt-4 flex w-full flex-col justify-items-start gap-4 md:flex-row">
              <Button
                asChild
                size="lg"
                className="relateive mt-4  flex flex-col justify-center-relative"
              >
                <Link href="/dashboard">
                  <span className="btn-label">Go ot Product</span>
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="relateive mt-4  flex flex-col justify-center-relative"
              >
                <Link href="/dashboard">
                  <span className="btn-label">Learn mores</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-2 flex flex-row items-center justify-center gap-4 md:mt-0 md:w-1/2">
          <Image
            src="/all-Brandship.png"
            className="rounded-(--radius) z-1 relative hidden border dark:block"
            alt="partnership dark"
            width={920}
            height={720}
          />
          <Image
            src="/all-Brandship.png"
            className="rounded-(--radius) z-1 relative border dark:hidden"
            alt="partnership light"
            width={920}
            height={720}
          />
        </div>
      </div>
    </section>
  );
}
