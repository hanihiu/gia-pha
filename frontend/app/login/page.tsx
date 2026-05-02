import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Dang nhap",
};

type InputFieldProps = {
  id: string;
  label: string;
  placeholder: string;
  type?: "email" | "password";
};

function InputField({
  id,
  label,
  placeholder,
  type = "text" as "email" | "password",
}: InputFieldProps) {
  return (
    <label
      className="flex w-full flex-col gap-2 text-sm text-[#0c1421]"
      htmlFor={id}
    >
      <span className="font-medium tracking-[0.01em]">{label}</span>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className="h-12 rounded-xl border border-[#d4d7e3] bg-[#f7fbff] px-4 text-base text-[#0c1421] outline-none transition placeholder:text-[#8897ad] focus:border-[#1e4ae9] focus:ring-4 focus:ring-[#1e4ae9]/10 sm:h-14"
      />
    </label>
  );
}

type SocialButtonProps = {
  href: string;
  label: string;
  variant: "google" | "facebook";
};

function SocialButton({ href, label, variant }: SocialButtonProps) {
  const icon =
    variant === "google" ? (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6">
        <path
          fill="#EA4335"
          d="M12 10.2v3.9h5.42c-.23 1.26-.96 2.33-2.05 3.05l3.32 2.57c1.93-1.78 3.05-4.4 3.05-7.53 0-.72-.06-1.42-.18-2.1H12Z"
        />
        <path
          fill="#34A853"
          d="M12 22c2.75 0 5.06-.91 6.74-2.47l-3.32-2.57c-.92.62-2.1.99-3.42.99-2.63 0-4.85-1.78-5.65-4.17l-3.43 2.64A9.99 9.99 0 0 0 12 22Z"
        />
        <path
          fill="#4A90E2"
          d="M6.35 13.78a5.99 5.99 0 0 1 0-3.56L2.92 7.58a10 10 0 0 0 0 8.84l3.43-2.64Z"
        />
        <path
          fill="#FBBC05"
          d="M12 6.05c1.5 0 2.86.52 3.92 1.53l2.94-2.94C17.05 2.96 14.74 2 12 2A9.99 9.99 0 0 0 2.92 7.58l3.43 2.64C7.15 7.83 9.37 6.05 12 6.05Z"
        />
      </svg>
    ) : (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-6 w-6 fill-[#1877F2]"
      >
        <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.03 4.39 11.02 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.09 24 18.1 24 12.07Z" />
      </svg>
    );

  return (
    <Link
      href={href}
      className="flex h-12 items-center justify-center gap-3 rounded-xl bg-[#f3f9fa] px-4 text-base font-medium text-[#313957] transition hover:bg-[#eaf4f5] sm:flex-1"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}

export default function LoginPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.94),transparent_24%),linear-gradient(180deg,#fffdfa_0%,#f5efe4_100%)] text-[#0c1421]">
      <Container className="flex min-h-screen items-center py-6 sm:py-8 lg:py-10">
        <section className="grid w-full items-center gap-6 rounded-4xl border border-black/5 bg-white/88 p-4 shadow-[0_30px_80px_rgba(30,29,26,0.08)] backdrop-blur sm:p-6 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-8 lg:p-8">
          <div className="order-1 overflow-hidden rounded-3xl lg:order-2 lg:h-[min(78vh,680px)]">
            <Image
              src="/login-art.png"
              alt="Floral still life artwork"
              width={894}
              height={1192}
              priority
              className="h-45 w-full rounded-3xl object-cover object-center sm:h-60 lg:h-full"
            />
          </div>

          <div className="order-2 flex justify-center lg:order-1">
            <div className="w-full max-w-97 py-2 sm:py-4 lg:py-8">
              <div className="space-y-4 sm:space-y-5">
                <div className="space-y-4">
                  <h1 className="font-serif text-4xl leading-none tracking-[-0.03em] text-[#0c1421] sm:text-[3rem] lg:text-[3.35rem]">
                    Welcome Back{" "}
                    <span className="font-sans text-[0.85em]">👋</span>
                  </h1>
                  <p className="max-w-[30ch] text-[15px] leading-7 text-[#313957] sm:text-lg">
                    Today is a new day. It&apos;s your day. You shape it. Sign
                    in to start managing your projects.
                  </p>
                </div>

                <form className="space-y-5 sm:space-y-6">
                  <div className="space-y-4 sm:space-y-5">
                    <InputField
                      id="email"
                      label="Email"
                      placeholder="Example@email.com"
                      type="email"
                    />
                    <InputField
                      id="password"
                      label="Password"
                      placeholder="At least 8 characters"
                      type="password"
                    />
                  </div>

                  <div className="flex justify-end">
                    <Link
                      href="/login/forgot-password"
                      className="text-sm font-medium text-[#1e4ae9] transition hover:text-[#1237b7]"
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <button
                    type="submit"
                    className="flex h-12 w-full items-center justify-center rounded-xl bg-[#162d3a] px-4 text-base font-medium text-white transition hover:bg-[#122530] sm:h-14 sm:text-xl"
                  >
                    Sign in
                  </button>
                </form>

                <div className="space-y-4 pt-1 sm:space-y-5 sm:pt-2">
                  <div className="flex items-center gap-4 text-sm text-[#294957] sm:text-base">
                    <span className="h-px flex-1 bg-[#dbe4ea]" />
                    <span className="whitespace-nowrap">Or sign in with</span>
                    <span className="h-px flex-1 bg-[#dbe4ea]" />
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-1 xl:grid-cols-2">
                    <SocialButton
                      href="/auth/google"
                      label="Google"
                      variant="google"
                    />
                    <SocialButton
                      href="/auth/facebook"
                      label="Facebook"
                      variant="facebook"
                    />
                  </div>
                </div>

                <p className="pt-1 text-center text-base leading-7 text-[#313957] sm:text-lg">
                  Don&apos;t you have an account?{" "}
                  <Link
                    href="/signup"
                    className="font-medium text-[#1e4ae9] transition hover:text-[#1237b7]"
                  >
                    Sign up
                  </Link>
                </p>

                <p className="pt-6 text-center text-sm tracking-[0.08em] text-[#959cb6] sm:pt-10">
                  © 2023 ALL RIGHTS RESERVED
                </p>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
