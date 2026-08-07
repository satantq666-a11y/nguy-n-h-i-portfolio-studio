/**
 * NỘI DUNG WEBSITE — sửa file này để cập nhật text, dự án, kỹ năng, liên hệ.
 */
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";

export const profile = {
  name: "Nguyễn Hải",
  role: "Cử nhân Truyền thông · Content & Media",
  greeting: "Xin chào, mình là Hải 👋",
  tagline: "Kể chuyện thương hiệu bằng nội dung có ích — và một chút hài hước.",
  email: "ndhai.workmail@gmail.com",
  phone: "0889 979 758",
  location: "Hà Nội, Việt Nam",
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/tofumother69/" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "YouTube", href: "https://youtube.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
};

export const skills = [
  "Brand Strategy",
  "Content Writing",
  "Research",
  "Social Media",
  "Copywriting",
  "Editorial",
  "Canva",
  "Photoshop",
  "Premiere Pro",
];

export type Project = {
  title: string;
  desc: string;
  tags: string[];
  image: string;
  youtube?: string;
};

export const mediaProjects: Project[] = [
  {
    title: "Chuyển Động 24H - Tiêu điểm: ”Khi làng xã cần, đất vàng cũng hiến”",
    desc: "Góp phần biên tập tiêu điểm 'Khi làng xã cần, đất vàng cũng hiến', phát sóng ngày 14/03/2025 trong chương trình Chuyển động 24H trên VTV1.",
    tags: ["Premiere Pro", "Video Editing", "Phóng sự"],
    image: work2,
    youtube: "https://www.youtube.com/watch?v=Oc_zhZmS-Hg",
  },
  {
    title: "CINE7: Chị Tư Hậu",
    desc: "Biên tập băng phỏng vấn và trích đoạn tái hiện cảnh phim trong 'Chị Tư Hậu', sử dụng chút thủ thuật nho nhỏ vintage trắng đen :) .",
    tags: ["Premiere Pro", "Video Editing", "Phim tài liệu"],
    image: work4,
    youtube: "https://www.youtube.com/watch?v=u4I3Q0E3YtQ",
  },
  {
    title: "Đồ họa MC dẫn - Vì Tầm Vóc Việt số tháng 04/2025”",
    desc: "Lên kịch bản, dựng đồ họa minh họa và biên tập phóng sự có MC dẫn của chương trình 'Vì Tầm Vóc Việt số tháng 04/2025'.",
    tags: ["Scriptwriting", "Editorial", "Canva"],
    image: work5,
    youtube: "https://www.youtube.com/watch?v=mHHHAgBdIYE",
  },
];

export const commsProjects: Project[] = [
  {
    title: "Truyền thông Happy Tết 2026 Festival”",
    desc: "Quản lý đội nhóm, phối hợp với đơn vị BlueVN Agency triển khai chiến dịch truyền thông dành cho sự Kiện Happy Tết 2026 dưới sự chỉ đạo của Sở Du lịch Hà Nội.",
    tags: ["Campaign", "Social Media", "Management"],
    image: work1,
    facebook: "https://www.facebook.com/happytet2024",
  },
  {
    title: "Case study branding: HCD Music Center",
    desc: "Xây dựng Nhận diện Thương hiệu và Kế hoạch Truyền thông Marketing cho HCD Music Center, đề xuất được đánh giá cao bởi giảng viên môn Branding Management và founder của HCD Music Center.",
    tags: ["Brand Strategy", "Case Study", "Brand Audit"],
    image: work3,
    link: "https://drive.google.com/file/d/1fRyeiajdaiUbbh6pN1dOWjPWUuLpFR_q/view?usp=sharing",
  },
  {
    title: "Content creator VTV SHOWS",
    desc: "Sáng tạo nội dung đa dạng cho fanpage VTV SHOWS - chuyên trang giải trí của VTV, trong giai đoạn tháng 1/2205 - 4/2025.",
    tags: ["Editorial", "Content", "Copywriting"],
    image: work6,
    facebook: "https://www.facebook.com/vtvshows",
  },
];

export const gallery = [
  { title: "Key visual sự kiện", image: work4, youtube: "" },
  { title: "Social media kit", image: work1, youtube: "" },
  {
    title: "Video reel 2025",
    image: work2,
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  { title: "Bộ nhận diện Cỏ Cây", image: work3, youtube: "" },
  {
    title: "Trailer podcast",
    image: work5,
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  { title: "Infographic báo cáo", image: work6, youtube: "" },
];

export const caseStudies = [
  {
    title: "Cỏ Cây Coffee — từ quán nhỏ thành điểm hẹn của người trẻ",
    problem: "Thương hiệu chưa có tính cách rõ ràng, khách quen chủ yếu là người đi ngang.",
    approach:
      "Phỏng vấn 15 khách hàng, dựng chân dung khách hàng, chốt brand key “chậm một nhịp”, viết lại tone of voice và bộ template social.",
    result: "Tương tác fanpage +180% sau 8 tuần, lượng khách check-in tăng đều mỗi cuối tuần.",
    tags: ["Brand Strategy", "Research", "Social Media"],
    image: work3,
  },
  {
    title: "Xanh Từ Việc Nhỏ — chiến dịch truyền thông môi trường",
    problem: "Thông điệp môi trường dễ bị xem là khô khan và xa vời với sinh viên.",
    approach:
      "Chuyển thông điệp thành thử thách 7 ngày, kết hợp video short, minigame và bộ ảnh do chính người tham gia đóng góp.",
    result: "1.200+ người tham gia thử thách, 40 video do cộng đồng tự sản xuất.",
    tags: ["Campaign", "Content Writing", "Community"],
    image: work1,
  },
  {
    title: "Bản tin nội bộ — kể chuyện dữ liệu dễ hiểu",
    problem: "Báo cáo truyền thông dài, khó đọc, ít người trong tổ chức theo dõi.",
    approach:
      "Chuẩn hoá cấu trúc bản tin, thêm infographic và phần “điều đáng chú ý tuần này” viết theo giọng thân thiện.",
    result: "Tỉ lệ mở bản tin tăng từ 32% lên 71% trong 3 tháng.",
    tags: ["Editorial", "Infographic", "Copywriting"],
    image: work6,
  },
];

export const education = [
  {
    period: "2021 — 2025",
    title: "Cử nhân Truyền thông",
    org: "Đại học (điền tên trường của bạn)",
    detail: "Chuyên đề: truyền thông thương hiệu, sản xuất nội dung số, nghiên cứu công chúng.",
  },
];

export const experience = [
  {
    period: "2024 — 2025",
    title: "Thực tập sinh Content & Social",
    org: "Agency truyền thông (điền tên)",
    detail: "Viết bài fanpage, lên ý tưởng chiến dịch nhỏ, phối hợp designer và editor.",
  },
  {
    period: "2023 — 2024",
    title: "Trưởng ban Nội dung — CLB Truyền Thông",
    org: "Câu lạc bộ sinh viên",
    detail: "Quản lý nhóm 8 thành viên, vận hành lịch nội dung và ấn phẩm cho 4 sự kiện lớn.",
  },
  {
    period: "2023",
    title: "Freelance Video Editor",
    org: "Dự án cá nhân",
    detail: "Dựng video ngắn cho các thương hiệu nhỏ và kênh cá nhân.",
  },
];

export const achievements = [
  "Top 5 cuộc thi ý tưởng truyền thông sinh viên 2024",
  "Chiến dịch “Xanh Từ Việc Nhỏ” đạt 1.200+ người tham gia",
  "Sản xuất hơn 60 ấn phẩm truyền thông trong 2 năm",
];
