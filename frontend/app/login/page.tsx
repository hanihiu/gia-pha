import type { Metadata } from "next";
import {
  BookOpenText,
  CircleUserRound,
  KeyRound,
  Landmark,
  LockKeyhole,
  LogIn,
  Mail,
  Sparkles,
  UsersRound,
} from "lucide-react";

import { siteConfig } from "@/app/config";
import { loginFieldNames } from "@/app/login/loginSchema";
import AppLink from "@/components/ui/AppLink";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Checkbox from "@/components/ui/Checkbox";
import Container from "@/components/ui/container";
import Form from "@/components/ui/Form";
import FormField from "@/components/ui/FormField";
import Input from "@/components/ui/Input";
import { MotionDiv } from "@/components/ui/MotionBlock";

export const metadata: Metadata = {
  title: "Đăng nhập",
  description: "Đăng nhập vào Gia Phả bằng Google hoặc Facebook.",
};

const providers = [
  {
    name: "Google",
    href: "/auth/google",
    icon: CircleUserRound,
    mark: "G",
    className: "border-stone-200 bg-white text-stone-900 hover:bg-stone-50",
  },
  {
    name: "Facebook",
    href: "/auth/facebook",
    icon: UsersRound,
    mark: "f",
    className: "border-[#1b4f9c] bg-[#1b4f9c] text-white hover:bg-[#163f7c]",
  },
];

export default function LoginPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8efe0] text-[#24150f]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,_rgba(196,147,56,0.22),_transparent_28%),radial-gradient(circle_at_80%_8%,_rgba(125,23,21,0.18),_transparent_30%),linear-gradient(135deg,_#fff9ed_0%,_#f2dfbd_50%,_#ead0a1_100%)]" />
      <div className="absolute inset-x-0 top-0 h-3 bg-gradient-to-r from-[#8f1918] via-[#d8a73d] to-[#8f1918]" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(90deg,_rgba(95,42,24,0.08)_1px,_transparent_1px),linear-gradient(0deg,_rgba(95,42,24,0.08)_1px,_transparent_1px)] bg-[size:28px_28px]" />

      <Container className="relative z-10 flex min-h-screen items-center py-10 sm:py-14">
        <MotionDiv className="w-full" preset="scaleIn">
          <Card
            as="section"
            variant="auth"
            className="grid overflow-hidden lg:grid-cols-[1.05fr_0.95fr]"
          >
          <div className="relative min-h-[18rem] overflow-hidden bg-[#7f1816] p-8 text-[#fff7df] sm:p-10 lg:min-h-[42rem]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,_rgba(255,218,117,0.35),_transparent_24%),linear-gradient(180deg,_rgba(255,255,255,0.1)_0%,_transparent_38%,_rgba(52,13,11,0.35)_100%)]" />
            <div className="absolute left-1/2 top-16 h-56 w-56 -translate-x-1/2 rounded-full border border-[#e2be63]/50 bg-[#d9a642]/15" />
            <div className="absolute bottom-0 left-0 right-0 h-44 bg-[repeating-linear-gradient(90deg,_rgba(255,236,169,0.2)_0_1px,_transparent_1px_22px)]" />

            <div className="relative flex h-full flex-col justify-between gap-12">
              <AppLink href="/" variant="brand">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#f4d482]/70 bg-[#f7d679] text-sm font-bold text-[#6e1413] shadow-sm">
                  GP
                </span>
                <span>
                  <span className="block text-sm font-semibold tracking-[0.2em] uppercase text-[#f4d482]">
                    {siteConfig.name}
                  </span>
                  <span className="block text-sm text-[#ffe9ad]/80">
                    Gia phong trong một chạm
                  </span>
                </span>
              </AppLink>

              <MotionDiv className="max-w-xl" delay={0.08}>
                <p className="text-sm font-semibold tracking-[0.24em] uppercase text-[#f4d482]">
                  <Landmark className="mr-2 inline h-4 w-4" aria-hidden="true" />
                  Cung đình Huế
                </p>
                <h1 className="mt-5 font-serif text-4xl leading-tight font-semibold sm:text-5xl lg:text-6xl">
                  Lưu giữ phả hệ trong không gian trang nhã.
                </h1>
                <p className="mt-5 max-w-lg text-base leading-8 text-[#fff0bd]/88">
                  Đăng nhập để tiếp tục dựng cây gia phả, ghi chép thế thứ và
                  kết nối các nhánh họ trong một giao diện lấy cảm hứng từ sắc
                  son, vàng kim và hoa văn cung đình.
                </p>
              </MotionDiv>

              <MotionDiv
                className="grid grid-cols-3 gap-3 text-center text-xs font-semibold tracking-[0.18em] text-[#ffe9ad]/80 uppercase"
                delay={0.16}
              >
                <span className="rounded-full border border-[#f4d482]/30 px-3 py-2">
                  <BookOpenText className="mx-auto mb-1 h-4 w-4" aria-hidden="true" />
                  Gia lễ
                </span>
                <span className="rounded-full border border-[#f4d482]/30 px-3 py-2">
                  <UsersRound className="mx-auto mb-1 h-4 w-4" aria-hidden="true" />
                  Tộc phả
                </span>
                <span className="rounded-full border border-[#f4d482]/30 px-3 py-2">
                  <Sparkles className="mx-auto mb-1 h-4 w-4" aria-hidden="true" />
                  Ký ức
                </span>
              </MotionDiv>
            </div>
          </div>

          <div className="flex items-center p-6 sm:p-10 lg:p-12">
            <div className="w-full">
              <MotionDiv className="mx-auto max-w-md" delay={0.12}>
                <p className="text-sm font-semibold tracking-[0.24em] text-[#8f1918] uppercase">
                  <KeyRound className="mr-2 inline h-4 w-4" aria-hidden="true" />
                  Đăng nhập
                </p>
                <h2 className="mt-3 font-serif text-3xl font-semibold text-[#24150f] sm:text-4xl">
                  Chào mừng trở lại
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#76614b]">
                  Chọn tài khoản xã hội để vào không gian quản lý gia phả của
                  bạn. Các bước xác thực sẽ được xử lý bởi nhà cung cấp đăng
                  nhập tương ứng.
                </p>

                <div className="mt-8 space-y-3">
                  {providers.map((provider) => {
                    const ProviderIcon = provider.icon;

                    return (
                      <AppLink
                        key={provider.name}
                        href={provider.href}
                        className={provider.className}
                        variant="button"
                      >
                        <ProviderIcon className="h-5 w-5" aria-hidden="true" />
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-current/10 font-serif text-lg">
                          {provider.mark}
                        </span>
                        <span>Tiếp tục với {provider.name}</span>
                      </AppLink>
                    );
                  })}
                </div>

                <div className="my-8 flex items-center gap-4">
                  <span className="h-px flex-1 bg-[#dec58f]" />
                  <span className="text-xs font-semibold tracking-[0.18em] text-[#9a876b] uppercase">
                    hoặc
                  </span>
                  <span className="h-px flex-1 bg-[#dec58f]" />
                </div>

                <Form>
                  <FormField
                    htmlFor="email"
                    icon={<Mail className="h-4 w-4" aria-hidden="true" />}
                    label="Email"
                  >
                    <Input
                      autoComplete="email"
                      className="mt-2"
                      id="email"
                      name={loginFieldNames.email}
                      placeholder="ten@email.com"
                      required
                      type="email"
                      variant="auth"
                    />
                  </FormField>

                  <FormField
                    htmlFor="password"
                    icon={<LockKeyhole className="h-4 w-4" aria-hidden="true" />}
                    label="Mật khẩu"
                  >
                    <Input
                      autoComplete="current-password"
                      className="mt-2"
                      id="password"
                      minLength={8}
                      name={loginFieldNames.password}
                      placeholder="Nhập mật khẩu"
                      required
                      type="password"
                      variant="auth"
                    />
                  </FormField>

                  <div className="flex flex-col gap-3 text-sm text-[#76614b] sm:flex-row sm:items-center sm:justify-between">
                    <label className="inline-flex items-center gap-2">
                      <Checkbox name={loginFieldNames.remember} />
                      Ghi nhớ đăng nhập
                    </label>
                    <AppLink href="/forgot-password" variant="text">
                      Quên mật khẩu?
                    </AppLink>
                  </div>

                  <Button fullWidth type="submit">
                    <LogIn className="mr-2 inline h-4 w-4" aria-hidden="true" />
                    Đăng nhập
                  </Button>
                </Form>

                <p className="mt-7 text-center text-sm text-[#76614b]">
                  Chưa có tài khoản?{" "}
                  <AppLink href="/register" variant="text">
                    Tạo tài khoản
                  </AppLink>
                </p>
              </MotionDiv>
            </div>
          </div>
          </Card>
        </MotionDiv>
      </Container>
    </main>
  );
}
