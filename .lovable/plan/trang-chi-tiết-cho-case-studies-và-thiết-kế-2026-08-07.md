# Trang chi tiết cho Case Studies và Thiết kế

Mục tiêu: bấm vào một thẻ ở tab **Case studies** hoặc **Thiết kế** sẽ mở một trang con riêng, cùng phong cách giấy kẻ ô, hiển thị mô tả dài hơn, hình ảnh và danh sách link (YouTube / Facebook / Google Drive / website).

## Sẽ làm gì

1. **Chuẩn hoá dữ liệu trong `src/lib/site-data.ts`**
   - Thêm `slug` cho từng case study và từng mục gallery (ví dụ `hcd-music-center`).
   - Thêm mảng `links: { label, href, type }[]` với `type` là `youtube | facebook | drive | web`, thay cho các field lẻ `youtube`, `facebook`, `link` đang dùng chưa nhất quán (hiện `commsProjects` gán `facebook`/`link` nhưng type `Project` chưa khai báo → dễ lỗi type).
   - Thêm các trường nội dung dài: `body` (các đoạn văn), `gallery` (ảnh phụ, tuỳ chọn).
   - Giữ nguyên các trường cũ đang dùng để trang danh sách không bị vỡ.

2. **Hai route động mới**
   - `src/routes/case-studies.$slug.tsx` → URL `/case-studies/<slug>`
   - `src/routes/thiet-ke.$slug.tsx` → URL `/thiet-ke/<slug>`
   - Mỗi trang: ảnh bìa, tiêu đề, tag, khối Vấn đề / Cách làm / Kết quả (case study) hoặc mô tả (thiết kế), khối "Liên kết" liệt kê các link với icon tương ứng, nút "← Quay lại".
   - Slug không tồn tại → `notFound()` với trang thông báo thân thiện.
   - `head()` riêng cho từng trang: title, description, og:title, og:description lấy từ dữ liệu (tốt cho SEO và khi share link).

3. **Component dùng lại `src/components/detail-page.tsx`**
   - Một component `DetailLinks` render danh sách link + icon (YouTube, Facebook, Drive, Globe từ lucide-react) để hai route dùng chung, tránh lặp code.

4. **Cập nhật trang danh sách**
   - `src/routes/case-studies.tsx`: bọc mỗi thẻ bằng `<Link to="/case-studies/$slug" params={{ slug }}>`, thêm hiệu ứng hover nhẹ và nhãn "Xem chi tiết →".
   - `src/routes/thiet-ke.tsx`: mỗi ô gallery trở thành link tới trang con; icon YouTube hiện tại chuyển thành chỉ dấu, việc mở link để trang chi tiết lo.
   - Tuỳ chọn: làm tương tự cho `du-an` nếu bạn muốn — mình chưa làm ở bước này để giữ thay đổi gọn.

## Hướng dẫn bạn sửa nội dung về sau

- Tất cả nội dung vẫn nằm trong **`src/lib/site-data.ts`**. Thêm một dự án mới = thêm một object vào `caseStudies` hoặc `gallery`, có `slug` (chữ thường, không dấu, nối bằng `-`) và mảng `links`.
- Không cần tạo file route mới cho mỗi dự án: route động tự sinh trang từ `slug`.
- Mình sẽ chèn phần chú thích ngay trong file dữ liệu, ghi rõ trường nào hiện ở trang danh sách và trường nào hiện ở trang chi tiết.

## Ghi chú kỹ thuật

- Dùng file-based routing của TanStack Router: `case-studies.$slug.tsx` với `createFileRoute("/case-studies/$slug")`, đọc slug bằng `Route.useParams()`.
- Vì `src/routes/case-studies.tsx` là leaf route (không có `<Outlet />`), trang con là route em cùng cấp — không cần đổi file cha.
- Link ngoài mở tab mới với `target="_blank" rel="noreferrer"`.
