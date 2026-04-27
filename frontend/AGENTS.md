# Frontend Agent Guide

## Phạm vi

- Tài liệu này chỉ áp dụng cho frontend Next.js app của repo.
- Phạm vi chính: `app/`, `components/`, `hooks/`, `types/`, `utils/`, `public/`.
- Ngoài phạm vi mặc định: `docs/`, SQL schema, migration, seed, CI, hạ tầng deploy. Chỉ đụng vào khi task nói rõ.

## Snapshot kỹ thuật

- Next.js 16 với App Router.
- React 19.
- TypeScript `strict`.
- Tailwind CSS v4.
- Supabase SSR/client helpers nằm trong `utils/supabase/`.
- UI đang dùng nhiều `lucide-react` và `framer-motion`.

## Cách làm việc trong repo này

1. Đọc route và component liên quan trước khi sửa.
2. Mặc định ưu tiên Server Component trong `app/**`.
3. Chỉ thêm `"use client"` khi thật sự cần state, effect, browser API, event handler, animation tương tác, hoặc context client.
4. Fetch auth và dữ liệu ở server bằng `utils/supabase/queries.ts` khi có thể.
5. Dùng `redirect()` ở server; dùng `useRouter()` ở client.
6. Component chỉ dùng cho một route thì colocate ngay trong route đó.
7. Component dùng lại từ 2 nơi trở lên thì đặt vào `components/`.
8. Giữ nguyên ngôn ngữ thiết kế hiện tại: nền sáng, tông `stone/amber`, heading serif, card bo tròn, motion nhẹ, responsive trước.
9. Tất cả text tiếng Việt phải lưu đúng UTF-8, không để lỗi font/encoding.
10. Mọi file mới phải theo `RULES.md`.

## Bản đồ kiến trúc frontend

- `app/`
  - Route, `page.tsx`, `layout.tsx`, `loading.tsx`, `globals.css`, `config.ts`.
  - Có thể chứa component route-local như `app/setup/CopyButton.tsx`.
- `app/actions/`
  - Server actions dùng `"use server"`.
- `components/`
  - Shared UI và dashboard components.
- `hooks/`
  - Reusable hooks như `usePanZoom`.
- `types/`
  - Shared domain types. Các field map trực tiếp DB đang giữ `snake_case`.
- `utils/`
  - Helper thuần, parser, transform, formatter.
- `utils/supabase/`
  - Ranh giới Supabase client/server/query.

## Rule ra quyết định nhanh

- Cần `useState`, `useEffect`, `navigator`, `window`, `document`, drag/zoom, modal local state, context client:
  - Dùng Client Component.
- Cần auth guard, cookies, server fetch, redirect trước khi render:
  - Dùng Server Component hoặc Server Action.
- Chỉ một route dùng:
  - Đặt file trong route folder.
- Nhiều route hoặc layout dùng:
  - Đặt trong `components/`, `hooks/`, `types/`, hoặc `utils/`.
- Logic truy cập Supabase phía browser:
  - Dùng `createClient()` từ client helper.
- Logic truy cập Supabase phía server:
  - Dùng `getSupabase()` hoặc helper trong `utils/supabase/queries.ts`.

## Checklist trước khi hoàn tất

- Import nội bộ dùng alias `@/`.
- Không tạo client boundary thừa.
- Không chuyển field DB từ `snake_case` sang `camelCase` trong shared types nếu chưa có chủ đích lớn hơn.
- Không đổi tên route segment tùy tiện.
- Không tạo top-level folder frontend mới nếu cấu trúc hiện tại đã đủ.
- Nếu thêm UI mới, kiểm tra cả desktop lẫn mobile.
