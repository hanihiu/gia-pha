# Frontend Rules

## Phạm vi

- Chỉ áp dụng cho frontend Next.js app của repo này.
- Tập trung vào `app/`, `components/`, `hooks/`, `types/`, `utils/`, `public/`.

## 1. Code Rules

- Ưu tiên Server Component cho `page.tsx` và `layout.tsx`.
- Chỉ dùng `"use client"` khi có tương tác thật sự cần state, effect, browser API, client context, hoặc animation phía client.
- Data fetching, auth guard, và redirect nên làm ở server trước khi render.
- Server action đặt trong `app/actions/*.ts` khi dùng chung; nếu chỉ thuộc một route thì có thể colocate trong route đó.
- Import nội bộ luôn ưu tiên alias `@/`.
- React component file thường dùng `default export`.
- Hook, helper, action function ưu tiên `named export`.
- Props của component phải có type rõ ràng. Nếu props là public API của component, đặt `interface <ComponentName>Props`.
- Không dùng `any` nếu chưa thật sự bất khả kháng.
- Tránh nhét quá nhiều business logic trực tiếp trong JSX. Config list, transform, helper nên kéo lên đầu file hoặc tách sang `utils/`.
- `utils/` không chứa JSX.
- Tránh tạo Supabase client bừa bãi:
  - Client side dùng `utils/supabase/client`.
  - Server side dùng `utils/supabase/server` hoặc `utils/supabase/queries`.
- Dùng `Link` cho điều hướng nội bộ.
- Dùng `Image` cho ảnh local/managed khi hợp lý.
- Giữ responsive ngay từ đầu, không làm bản desktop trước rồi bỏ quên mobile.
- Text tiếng Việt phải lưu đúng UTF-8. Không commit text bị lỗi encoding.
- Nếu có style dùng lại nhiều lần, ưu tiên reusable utility trong `app/globals.css` hoặc trích component thay vì copy-paste dài.

## 2. Naming Rules

### File và component

- Shared component: `PascalCase.tsx`
  - Ví dụ: `DashboardHeader.tsx`, `MemberDetailModal.tsx`
- Route-local component trong `app/**`: vẫn dùng `PascalCase.tsx`
  - Ví dụ: `app/setup/CopyButton.tsx`
- Hook: `useSomething.ts`
  - Ví dụ: `usePanZoom.ts`
- Helper/util file:
  - Ưu tiên `camelCase.ts` hoặc `SomethingHelpers.ts`
  - Ví dụ: `dateHelpers.ts`, `treeHelpers.ts`, `eventHelpers.ts`
- Supabase adapter file:
  - Dùng tên chức năng rõ ràng như `client.ts`, `server.ts`, `queries.ts`
- Config file:
  - Dùng tên ngắn, số ít, rõ nghĩa như `config.ts`

### Route và folder

- Route segment dùng `kebab-case`
  - Ví dụ: `missing-db-config`
- Dynamic route dùng chuẩn Next.js
  - Ví dụ: `[id]`
- File đặc biệt của App Router phải đúng chuẩn framework:
  - `page.tsx`
  - `layout.tsx`
  - `loading.tsx`

### Biến, function, type

- Component, type, interface, context, provider: `PascalCase`
- Biến, function, object thường: `camelCase`
- Boolean luôn bắt đầu bằng `is`, `has`, `can`, hoặc `show`
  - Ví dụ: `isAdmin`, `canEdit`, `showAvatar`
- Event handler dùng `handle...`
  - Ví dụ: `handleSubmit`, `handleCopy`
- Setter theo chuẩn React `set...`
  - Ví dụ: `setShowAvatar`
- Server action và helper thao tác dữ liệu dùng `verb + noun`
  - Ví dụ: `deleteMemberProfile`, `getProfile`, `computeEvents`
- Props interface đặt theo tên component
  - Ví dụ: `FooterProps`, `LandingHeroProps`
- Shared domain types dùng `PascalCase`
  - Ví dụ: `Profile`, `Person`, `Relationship`
- Field map trực tiếp từ database giữ nguyên `snake_case`
  - Ví dụ: `full_name`, `is_active`, `created_at`

### Legacy note

- Repo hiện có file `utils/styleHelprs.ts` là tên cũ bị typo.
- Không tạo thêm tên kiểu typo này. File mới phải dùng tên đúng chính tả, ví dụ `styleHelpers.ts`.

## 3. Folder Structure Rules

### `app/`

- Chứa route và file đặc biệt của App Router.
- Mỗi route chỉ nên chứa:
  - `page.tsx`
  - `layout.tsx`
  - `loading.tsx`
  - Component/local helper chỉ phục vụ riêng route đó
- Không biến `app/` thành nơi chứa shared component toàn cục.

### `app/actions/`

- Chứa server actions tái sử dụng cho nhiều route hoặc nhiều component.
- File action đặt theo domain dữ liệu, ví dụ:
  - `member.ts`
  - `user.ts`
  - `data.ts`

### `components/`

- Chứa shared UI/component dùng lại ở nhiều nơi.
- Giữ flat structure như hiện tại nếu số file vẫn còn dễ tìm.
- Khi một domain tăng quá nhiều file liên quan chặt chẽ, mới tách subfolder theo domain.
- Không tạo folder mơ hồ kiểu `misc`, `common2`, `temp`.

### `hooks/`

- Chỉ chứa reusable custom hooks.
- Không đặt component vào đây.

### `types/`

- Chứa shared TypeScript types/interface.
- Không đẩy props type dùng riêng cho 1 component vào `types/` nếu không tái sử dụng.

### `utils/`

- Chứa helper thuần, formatter, mapper, parser, thuật toán, adapter.
- Không chứa JSX hoặc component.
- Tách integration-specific code vào subfolder chuyên biệt như `utils/supabase/`.

### `public/`

- Chứa static asset public của Next.js.

## 4. Quy tắc đặt file mới

- Tạo page mới:
  - Đặt ở `app/<route>/page.tsx`
- Tạo layout riêng cho 1 vùng:
  - Đặt ở `app/<route>/layout.tsx`
- Tạo loading state cho route:
  - Đặt ở `app/<route>/loading.tsx`
- Tạo component chỉ dùng cho 1 route:
  - Colocate trong route folder đó
- Tạo component dùng lại:
  - Đặt ở `components/`
- Tạo hook dùng lại:
  - Đặt ở `hooks/`
- Tạo shared type:
  - Đặt ở `types/`
- Tạo helper thuần:
  - Đặt ở `utils/`

## 5. Ưu tiên nhất quán với codebase hiện tại

- Ưu tiên đi theo cấu trúc đang có hơn là refactor lớn để “đẹp lý thuyết”.
- Chỉ tách file hoặc di chuyển thư mục khi có lợi ích rõ ràng: dễ đọc hơn, tái sử dụng hơn, hoặc giảm coupling.
- Không áp convention mới nếu nó làm lệch mạnh khỏi frontend hiện tại mà không có lý do đủ mạnh.
