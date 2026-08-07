/**
 * NỘI DUNG WEBSITE — sửa file này để cập nhật text, dự án, kỹ năng, liên hệ.
 *
 * QUY ƯỚC:
 * - `slug`: chữ thường, không dấu, nối bằng "-". Đây là đường dẫn trang con,
 *   ví dụ slug "hcd-music-center" => /case-studies/hcd-music-center
 * - `links`: danh sách liên kết ngoài hiện ở trang chi tiết
 *   (type: "youtube" | "facebook" | "drive" | "web").
 * - `desc` / `problem` / `approach` / `result`: hiện ở CẢ trang danh sách và chi tiết.
 * - `body`: các đoạn văn dài, CHỈ hiện ở trang chi tiết.
 * - `images`: ảnh phụ, CHỈ hiện ở trang chi tiết (tuỳ chọn).
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

export type LinkType = "youtube" | "facebook" | "drive" | "web";

export type SiteLink = {
  label: string;
  href: string;
  type: LinkType;
};

export type Project = {
  title: string;
  desc: string;
  tags: string[];
  image: string;
  links?: SiteLink[];
};

export const mediaProjects: Project[] = [
  {
    title: "Chuyển Động 24H - Tiêu điểm: ”Khi làng xã cần, đất vàng cũng hiến”",
    desc: "Góp phần biên tập tiêu điểm 'Khi làng xã cần, đất vàng cũng hiến', phát sóng ngày 14/03/2025 trong chương trình Chuyển động 24H trên VTV1.",
    tags: ["Premiere Pro", "Video Editing", "Phóng sự"],
    image: work2,
    links: [
      {
        label: "Xem trên YouTube",
        href: "https://www.youtube.com/watch?v=Oc_zhZmS-Hg",
        type: "youtube",
      },
    ],
  },
  {
    title: "CINE7: Chị Tư Hậu",
    desc: "Biên tập băng phỏng vấn và trích đoạn tái hiện cảnh phim trong 'Chị Tư Hậu', sử dụng chút thủ thuật nho nhỏ vintage trắng đen :) .",
    tags: ["Premiere Pro", "Video Editing", "Phim tài liệu"],
    image: work4,
    links: [
      {
        label: "Xem trên YouTube",
        href: "https://www.youtube.com/watch?v=u4I3Q0E3YtQ",
        type: "youtube",
      },
    ],
  },
  {
    title: "Đồ họa MC dẫn - Vì Tầm Vóc Việt số tháng 04/2025”",
    desc: "Lên kịch bản, dựng đồ họa minh họa và biên tập phóng sự có MC dẫn của chương trình 'Vì Tầm Vóc Việt số tháng 04/2025'.",
    tags: ["Scriptwriting", "Editorial", "Canva"],
    image: work5,
    links: [
      {
        label: "Xem trên YouTube",
        href: "https://www.youtube.com/watch?v=mHHHAgBdIYE",
        type: "youtube",
      },
    ],
  },
];

export const commsProjects: Project[] = [
  {
    title: "Truyền thông Happy Tết 2026 Festival”",
    desc: "Quản lý đội nhóm, phối hợp với đơn vị BlueVN Agency triển khai chiến dịch truyền thông dành cho sự Kiện Happy Tết 2026 dưới sự chỉ đạo của Sở Du lịch Hà Nội.",
    tags: ["Campaign", "Social Media", "Management"],
    image: work1,
    links: [
      {
        label: "Fanpage Happy Tết",
        href: "https://www.facebook.com/happytet2024",
        type: "facebook",
      },
    ],
  },
  {
    title: "Case study branding: HCD Music Center",
    desc: "Xây dựng Nhận diện Thương hiệu và Kế hoạch Truyền thông Marketing cho HCD Music Center, đề xuất được đánh giá cao bởi giảng viên môn Branding Management và founder của HCD Music Center.",
    tags: ["Brand Strategy", "Case Study", "Brand Audit"],
    image: work3,
    links: [
      {
        label: "Xem bản đề xuất (Google Drive)",
        href: "https://drive.google.com/file/d/1fRyeiajdaiUbbh6pN1dOWjPWUuLpFR_q/view?usp=sharing",
        type: "drive",
      },
    ],
  },
  {
    title: "Content creator VTV SHOWS",
    desc: "Sáng tạo nội dung đa dạng cho fanpage VTV SHOWS - chuyên trang giải trí của VTV, trong giai đoạn tháng 1/2205 - 4/2025.",
    tags: ["Editorial", "Content", "Copywriting"],
    image: work6,
    links: [
      { label: "Fanpage VTV SHOWS", href: "https://www.facebook.com/vtvshows", type: "facebook" },
    ],
  },
];

export type GalleryItem = {
  slug: string;
  title: string;
  desc: string;
  image: string;
  tags?: string[];
  body?: string[];
  images?: string[];
  links?: SiteLink[];
};

export const gallery: GalleryItem[] = [
  {
    slug: "key-visual-su-kien",
    title: "Key visual sự kiện",
    desc: "Bộ key visual cho sự kiện văn hoá: poster chính, backdrop và standee.",
    image: work4,
    tags: ["Canva", "Photoshop", "Key visual"],
    body: [
      "Key visual được xây dựng từ tinh thần “vui, gần gũi, dễ nhớ”: bảng màu pastel, hình khối bo tròn và typography monospace cho phần tiêu đề.",
      "Bộ ấn phẩm gồm poster chính, backdrop sân khấu, standee chỉ dẫn và template ảnh đăng fanpage.",
    ],
    images: [work1, work5],
    links: [{ label: "Fanpage sự kiện", href: "https://www.facebook.com/", type: "facebook" }],
  },
  {
    slug: "social-media-kit",
    title: "Social media kit",
    desc: "Bộ template đăng bài cho fanpage: ảnh bìa, ảnh vuông, story và carousel.",
    image: work1,
    tags: ["Canva", "Social Media", "Template"],
    body: [
      "Mục tiêu là để đội nội dung tự đăng bài đúng nhận diện mà không cần designer hỗ trợ từng post.",
      "Kit gồm 12 template chia theo dạng nội dung: thông báo, kiến thức, hậu trường và tương tác.",
    ],
    links: [
      {
        label: "Xem bộ template (Google Drive)",
        href: "https://drive.google.com/",
        type: "drive",
      },
    ],
  },
  {
    slug: "video-reel-2025",
    title: "Video reel 2025",
    desc: "Reel tổng hợp các sản phẩm video đã dựng trong năm 2025.",
    image: work2,
    tags: ["Premiere Pro", "Video Editing"],
    body: [
      "Reel dài 90 giây, tổng hợp phóng sự, phỏng vấn và các đoạn đồ hoạ minh họa đã thực hiện.",
    ],
    links: [
      { label: "Xem reel trên YouTube", href: "https://www.youtube.com/", type: "youtube" },
    ],
  },
  {
    slug: "bo-nhan-dien-co-cay",
    title: "Bộ nhận diện Cỏ Cây",
    desc: "Logo, bảng màu, typography và ứng dụng nhận diện cho Cỏ Cây Coffee.",
    image: work3,
    tags: ["Brand Strategy", "Brand Identity"],
    body: [
      "Nhận diện lấy cảm hứng từ brand key “chậm một nhịp”: nét vẽ tay, màu xanh lá nhạt và giấy kraft.",
      "Ứng dụng gồm menu, ly giấy, tem dán và bộ ảnh social.",
    ],
    images: [work6],
    links: [
      {
        label: "Xem brand guideline (Google Drive)",
        href: "https://drive.google.com/",
        type: "drive",
      },
    ],
  },
  {
    slug: "trailer-podcast",
    title: "Trailer podcast",
    desc: "Trailer giới thiệu series podcast: kịch bản, dựng hình và đồ hoạ chữ.",
    image: work5,
    tags: ["Scriptwriting", "Premiere Pro"],
    body: [
      "Trailer 45 giây với nhịp cắt nhanh, phụ đề động và nhạc nền tươi để phù hợp nền tảng short-form.",
    ],
    links: [
      { label: "Xem trailer trên YouTube", href: "https://www.youtube.com/", type: "youtube" },
    ],
  },
  {
    slug: "infographic-bao-cao",
    title: "Infographic báo cáo",
    desc: "Chuyển báo cáo truyền thông dài thành infographic một trang dễ đọc.",
    image: work6,
    tags: ["Editorial", "Infographic", "Canva"],
    body: [
      "Số liệu được nhóm thành 3 câu chuyện chính, mỗi phần chỉ giữ lại một biểu đồ và một kết luận ngắn.",
    ],
    links: [{ label: "Xem bản đầy đủ", href: "https://drive.google.com/", type: "drive" }],
  },
];

export type CaseStudy = {
  slug: string;
  title: string;
  problem: string;
  approach: string;
  result: string;
  tags: string[];
  image: string;
  body?: string[];
  images?: string[];
  links?: SiteLink[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "co-cay-coffee",
    title: "Cỏ Cây Coffee — từ quán nhỏ thành điểm hẹn của người trẻ",
    problem: "Thương hiệu chưa có tính cách rõ ràng, khách quen chủ yếu là người đi ngang.",
    approach:
      "Phỏng vấn 15 khách hàng, dựng chân dung khách hàng, chốt brand key “chậm một nhịp”, viết lại tone of voice và bộ template social.",
    result: "Tương tác fanpage +180% sau 8 tuần, lượng khách check-in tăng đều mỗi cuối tuần.",
    tags: ["Brand Strategy", "Research", "Social Media"],
    image: work3,
    body: [
      "Giai đoạn 1 — Nghiên cứu: phỏng vấn sâu 15 khách hàng và quan sát hành vi tại quán vào 3 khung giờ khác nhau.",
      "Giai đoạn 2 — Định vị: chốt brand key “chậm một nhịp”, viết lại tone of voice thân thiện và bớt trang trọng.",
      "Giai đoạn 3 — Triển khai: bộ template social, lịch nội dung 8 tuần và hướng dẫn chụp ảnh cho nhân viên quán.",
    ],
    images: [work1],
    links: [
      { label: "Fanpage Cỏ Cây", href: "https://www.facebook.com/", type: "facebook" },
      {
        label: "Brand book (Google Drive)",
        href: "https://drive.google.com/",
        type: "drive",
      },
    ],
  },
  {
    slug: "xanh-tu-viec-nho",
    title: "Xanh Từ Việc Nhỏ — chiến dịch truyền thông môi trường",
    problem: "Thông điệp môi trường dễ bị xem là khô khan và xa vời với sinh viên.",
    approach:
      "Chuyển thông điệp thành thử thách 7 ngày, kết hợp video short, minigame và bộ ảnh do chính người tham gia đóng góp.",
    result: "1.200+ người tham gia thử thách, 40 video do cộng đồng tự sản xuất.",
    tags: ["Campaign", "Content Writing", "Community"],
    image: work1,
    body: [
      "Thử thách 7 ngày được thiết kế để mỗi ngày chỉ mất 5 phút, giúp người tham gia không bỏ giữa chừng.",
      "Nội dung chạy song song trên fanpage và TikTok, cùng bộ hashtag riêng để gom bài của cộng đồng.",
    ],
    links: [
      { label: "Fanpage chiến dịch", href: "https://www.facebook.com/", type: "facebook" },
      { label: "Playlist video", href: "https://www.youtube.com/", type: "youtube" },
    ],
  },
  {
    slug: "ban-tin-noi-bo",
    title: "Bản tin nội bộ — kể chuyện dữ liệu dễ hiểu",
    problem: "Báo cáo truyền thông dài, khó đọc, ít người trong tổ chức theo dõi.",
    approach:
      "Chuẩn hoá cấu trúc bản tin, thêm infographic và phần “điều đáng chú ý tuần này” viết theo giọng thân thiện.",
    result: "Tỉ lệ mở bản tin tăng từ 32% lên 71% trong 3 tháng.",
    tags: ["Editorial", "Infographic", "Copywriting"],
    image: work6,
    body: [
      "Bản tin được rút từ 6 trang xuống 1 trang, mỗi số chỉ giữ 3 con số quan trọng nhất.",
      "Thêm mục “điều đáng chú ý tuần này” để biến số liệu thành một câu chuyện ngắn ai cũng đọc được.",
    ],
    links: [
      { label: "Bản tin mẫu (Google Drive)", href: "https://drive.google.com/", type: "drive" },
    ],
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
