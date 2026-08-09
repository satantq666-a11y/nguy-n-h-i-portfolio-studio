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
import atvtv1 from "@/assets/atvtv1.png";
import atvtv2 from "@/assets/atvtv2.png";
import avatar1 from "@/assets/avatar1.png";

import cd24_1 from "@/assets/cd24_1.png";
import cd24_2 from "@/assets/cd24_2.jpg";

import cine7_1 from "@/assets/cine7_1.png";
import cine7_2 from "@/assets/cine7_2.png";
import cine7_3 from "@/assets/cine7_3.png";

import hcd1 from "@/assets/hcd1.png";

import highlight1 from "@/assets/highlight1.jpg";
import highlight2 from "@/assets/highlight2.png";
import highlight3 from "@/assets/highlight3.png";
import highlight4 from "@/assets/highlight4.jpg";
import highlight5 from "@/assets/highlight5.jpg";
import highlight6 from "@/assets/highlight6.jpg";

import ltm1 from "@/assets/ltm1.png";

import ptb1 from "@/assets/ptb1.png";

import thumb_atvtv from "@/assets/thumb_atvtv.png";
import thumb_cd24h from "@/assets/thumb_cd24h.jpg";
import thumb_cine7 from "@/assets/thumb_cine7.webp";
import thumb_hcdmc from "@/assets/thumb_hcdmc.jpg";
import thumb_ltm from "@/assets/thumb_ltm.png";
import thumb_ptb from "@/assets/thumb_ptb.png";
import thumb_queviet from "@/assets/thumb_queviet.jpg";
import thumb_vnvk from "@/assets/thumb_vnvk.jpg";
import thumb_vtvv from "@/assets/thumb_vtvv.jpg";

import vtt1 from "@/assets/vtt1.jpg";
import vtt2 from "@/assets/vtt2.jpg";
import vtt3 from "@/assets/vtt3.jpg";

import vtvv1 from "@/assets/vtvv1.png";
import vtvv2 from "@/assets/vtvv2.png";

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
    image: highlight1,
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
    image: highlight2,
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
    image: highlight3,
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
    image: highlight4,
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
    image: highlight5,
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
    image: highlight6,
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
    slug: "chuyen-dong-24h",
    title: "Chuyển Động 24H",
    desc: "Tham gia vào quá trình sản xuất các phóng sự của chương trình Chuyển Động 24h, phát sóng trên VTV1, Đài Truyền hình Việt Nam.",
    image: thumb_cd24h,
    tags: ["Premiere Pro", "Canva", "Phóng sự"],
    body: [
      "Đề tài các phóng sự đa dạng, bao gồm hai nhóm chính là phóng sự xã hội và phóng sự văn hóa.",
      "Tham gia vào quá trình ghi hình, phỏng vấn hiện trường.",
      "Biên tập, chỉnh sửa các phóng sự, bao gồm Tiêu điểm.",
      "Biên dịch, phiên dịch tiếng Anh khi phỏng vấn đối tượng nước ngoài.",
      "Văn phong, phong cách cân bằng giữa việc phù hợp với tiêu chuẩn của kênh truyền hình nhà nước, vừa giữ được nhịp độ trẻ trung, phù hợp với đinh hướng của chương trình." ,
    ],
    images: [cd24_1,cd24_2],
    links: [
  {
    label: "Tiêu điểm: Khi làng xã cần, đất vàng cũng hiến",
    href: "https://www.youtube.com/watch?v=ppW6KAdkfw8",
    type: "youtube",
  },
  {
    label: "Tiêu điểm: Độc thân ngày Valentine",
    href: "https://www.youtube.com/watch?v=xerxTb0yShE",
    type: "youtube",
  },
  {
    label: "Phóng sự: Tết Việt Tết Phố",
    href: "https://www.facebook.com/share/v/18Ns2xoKW1/",
    type: "facebook",
  },
],
  },
  {
    slug: "vnvk",
    title: "Việt Nam Vui Khỏe",
    desc: "‘Việt Nam vui khỏe’ - chương trình hợp tác bởi VTV và Vinamilk - có được sự quan tâm của đông đảo khán giả.",
    image: thumb_vnvk,
    tags: ["Premiere Pro", "Phóng sự"],
    body: [
      "Chương trình 'Việt Nam vui khỏe' là cuốn cẩm nang sức khỏe toàn diện về thể chất và tinh thần cho các thế hệ trong gia đình Việt, được lên sóng VTV1 vào 20h05 mỗi ngày.",
      "Tham gia vào quá trình ghi hình, phỏng vấn hiện trường.",
      "Lên kịch bản, biên tập, chỉnh sửa các phóng sự phỏng vấn.",
    ],
    links: [
  {
    label: "Việt Nam Vui Khỏe ngày 27/02/2025",
    href: "https://www.youtube.com/watch?v=UZVvxe3GaX0",
    type: "youtube",
  },
  {
    label: "Việt Nam Vui Khỏe ngày 28/02/2025",
    href: "https://www.youtube.com/watch?v=M9Vz4NIPn48",
    type: "youtube",
  },
  {
    label: "Việt Nam Vui Khỏe ngày 15/03/2025",
    href: "https://www.youtube.com/watch?v=8GEvDeri6pA",
    type: "youtube",
  },
   {
    label: "Việt Nam Vui Khỏe ngày 20/03/2025",
    href: "https://www.youtube.com/watch?v=MQ1_ljuueVI",
    type: "youtube",
  },   
],
  },
  {
    slug: "cine7",
    title: "CINE7 - Ký ức phim Việt",
    desc: " là chương trình truyền hình về điện ảnh trên kênh VTV3 của Đài Truyền hình Việt Nam. Chương trình phát sóng các tác phẩm điện ảnh nổi tiếng trong nước và quốc tế với sự dẫn dắt, bình luận từ các chuyên gia và khách mời yêu phim.",
    image: thumb_cine7,
    tags: ["Premiere Pro", "Video Editing"],
    body: [
      "Chương trình sẽ ôn lại những tác phẩm vang bóng một thời của điện ảnh Cách mạng Việt Nam.",
      "Biên tập các đoạn phỏng vấn. Sử dụng thủ thuật để tái hiện lại các trích đoạn phim của điện ảnh Cách mạng Việt Nam.",
    ],
    images: [cine7_1, cine7_2, cine7_3],
    links: [
      {
    label: "CINE7: Chị Tư Hậu",
    href: "https://www.youtube.com/watch?v=u4I3Q0E3YtQ",
    type: "youtube",
  },
   {
    label: "CINE7: Mùi Cỏ Cháy",
    href: "https://www.youtube.com/watch?v=gNJN-LqIAMs",
    type: "youtube",
  }, 
    ],
  },
  {
    slug: "vtvv",
    title: "Vì Tầm Vóc Việt",
    desc: "“Vì tầm vóc Việt” đưa ra những vấn đề thời sự về lứa tuổi học đường, với những phân tích, bình luận sâu sắc của các chuyên gia đầu ngành trong lĩnh vực giáo dục, y tế…",
    image: thumb_vtvv,
    tags: ["Premiere Pro", "Video Editing", "Canva", "Greenscreen"],
    body: [
      "Sử dụng các công cụ thiết kế để dựng nên phóng sự MC dẫn với đồ họa minh họa cho phóng sự phông xanh (greenscreen).",
    ],
    images: [vtvv1, vtvv2],
    links: [
      {
        label: "Phóng sự MC dẫn: Vì Tầm Vóc Việt số tháng 04/2025",
        href: "https://www.youtube.com/watch?v=mHHHAgBdIYE",
        type: "youtube",
      },
      {
        label: "Phóng sự MC dẫn: Vì Tầm Vóc Việt số tháng 05/2025",
        href: "https://www.youtube.com/watch?v=gL5_1tjwzL4",
        type: "youtube",
      },
    ],
  },
  {
    slug: "atvtv",
    title: "Bộ khung nhận diện Ấn tượng VTV",
    desc: "Bộ khung Ấn tượng VTV được ra mắt để phù hợp với định hướng mới cho fanpage Ấn tượng VTV",
    image: thumb_atvtv,
    tags: ["Design", "Photoshop"],
    body: [
      "Bộ khung Ấn tượng VTV 1.0 được ra mắt để phù hợp với định hướng mới cho fanpage, chuyển định hướng từ mỗi năm hoạt động một lần vào lúc trao giải VTV Adwards sang chia sẻ những khoảnh khắc ấn tượng trong các chương trình hàng ngày trên sóng VTV",
      "Tiếp nối phiên bản trước, bộ Khung nhận diện Ấn tượng VTV 2.0 được ra mắt với phong cách công nghệ hiện đại, với yêu cầu đổi mới trong kỷ nguyên vươn mình.",
      "Hai bộ khung được sử dụng trên fanpage 'Ấn tượng VTV' từ 03/2025 đến 01/2026", 
    ],
    images: [atvtv1, atvtv2],
    links: [
      {
        label: "Bộ khung Ấn tượng VTV 1.0",
        href: "https://drive.google.com/drive/folders/11e3WQmBiaZliPIaWS_cOMqYqaVAkGPgw?usp=drive_link",
        type: "drive",
      },
      {
        label: "Bộ khung Ấn tượng VTV 2.0",
        href: "https://drive.google.com/drive/folders/1X9mAu5Qmj6OyMqH5mU6zifCYmAXCJecj?usp=sharing",
        type: "drive",
      },
    ],
  },
  {
    slug: "ptbtayphuong",
    title: "Photobook 'Chùa Tây Phương'",
    desc: "Dự án là bài tập cuối môn của môn PFD201 - Nhiếp ảnh.",
    image: thumb_ptb,
    tags: ["Editorial", "Photographic", "InDesign"],
    body: [
      "Đây là một dự án kết hợp giữa hai kỹ năng - nhiếp ảnh và biên tập hình ảnh.",
      "Những hình ảnh được chụp tại Chùa Tây Phương. Chùa Tây Phương (tên chữ là Sùng Phúc tự 崇福寺) là một ngôi chùa được xây trên đỉnh đồi Câu Lâu thuộc xã Tây Phương, thành phố Hà Nội.",
      "Chụp bởi thiết bị iPhone Xs Max, biên tập, dàn trang bởi phần mềm Adobe InDesign.",
    ],
    images: [ptb1],
    links: [{ label: "Xem bản đầy đủ", href: "https://drive.google.com/file/d/18ymFaR6-C3Gdtp4PUqVZqOr9pzquf9sn/view", type: "drive" }],
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
    slug: "hcdmc",
    title: "Case study branding: HCD Music Center",
    problem: "HCD Music Center chuẩn bị ra mắt trung tâm đào tạo âm nhạc mới nhưng chưa có hệ thống nhận diện thương hiệu thống nhất, định vị rõ ràng và kế hoạch truyền thông bài bản để cạnh tranh trên thị trường giáo dục âm nhạc.",
    approach:
      "Thực hiện Brand Audit kết hợp nghiên cứu thị trường, khách hàng và đối thủ; xây dựng chiến lược định vị thương hiệu, bộ nhận diện mới và kế hoạch Integrated Marketing Communication (IMC) nhằm phát triển Brand Equity cho HCD Music Center.",
    result: "Đề xuất hoàn chỉnh bao gồm: Định vị thương hiệu với POPs, PODs và Brand Positioning.; Bộ nhận diện thương hiệu (logo, slogan, brand mantra, brand statement); Chiến lược Marketing Mix (4P) và chiến dịch truyền thông 'Your Sound. Your Story' nhằm tăng nhận diện thương hiệu và thu hút học viên trong giai đoạn ra mắt.",
    tags: ["Brand Strategy", "Brand Audit", "Research", "Social Media"],
    image: thumb_hcdmc,
    body: [
      "Giai đoạn 1 — Xác định vấn đề: Phân tích hiện trạng thương hiệu, thị trường và mục tiêu phát triển của HCD Music Center.",
      "Giai đoạn 2 — Nghiên cứu: Thu thập dữ liệu sơ cấp và thứ cấp; phân tích khách hàng, đối thủ, SWOT, POPs/PODs.",
      "Giai đoạn 3 — Đánh giá: Xác định khoảng trống trong nhận diện thương hiệu, truyền thông và trải nghiệm khách hàng.",
      "Giai đoạn 4 — Đề xuất giải pháp: Xây dựng định vị thương hiệu, hệ thống nhận diện, chiến lược Marketing và kế hoạch truyền thông tích hợp.",
    ],
    images: [hcd1],
    links: [
      { label: "Fanpage Cỏ Cây", href: "https://www.facebook.com/", type: "facebook" },
      {
        label: "Báo cáo Đề xuất Xây dựng thương hiệu HCD Music Center",
        href: "https://drive.google.com/file/d/1fRyeiajdaiUbbh6pN1dOWjPWUuLpFR_q/view?usp=drive_link",
        type: "drive",
      },
    ],
  },
  {
    slug: "leutrenmay",
    title: "Chiến dịch truyền thông dự án du lịch 'Lều Trên Mây - Ba Vì'",
    problem: "Ba Vì có tiềm năng du lịch lớn nhưng hình ảnh truyền thông còn cũ, chưa thu hút hiệu quả nhóm khách hàng trẻ. Dự án 'Lều Trên Mây' được xây dựng nhằm làm mới hình ảnh Ba Vì và tăng sức hấp dẫn trên các nền tảng số.",
    approach:
      "Thực hiện nghiên cứu thị trường, khảo sát hành vi khách hàng, phân tích đối thủ và xây dựng chiến dịch truyền thông đa nền tảng (Facebook, TikTok) với chiến lược Content-led, kết hợp sản xuất nội dung, MV quảng bá và hoạt động tương tác cộng đồng.",
    result: "Xây dựng hoàn chỉnh chiến dịch truyền thông với hệ thống nhận diện, content pillar, kế hoạch triển khai 3 giai đoạn và triển khai thực tế trên Facebook, TikTok. Chiến dịch đạt các mục tiêu về nhận diện, tương tác và tạo được sự lan tỏa đối với nhóm khách hàng trẻ.",
    tags: ["Campaign", "Content Writing", "Community"],
    image: thumb_ltm,
    body: [
      "Dự án thuộc phạm vi hai môn học Multimedia Production Project và Content Strategy for Professionals. Nghiên cứu thị trường và hành vi khách hàng để xây dựng chiến dịch truyền thông số cho dự án du lịch Lều Trên Mây – Ba Vì, phát triển chiến lược nội dung đa nền tảng và triển khai chiến dịch thực tế nhằm nâng cao nhận diện điểm đến.",
      "Bước 1: Xác định vấn đề: Phân tích tiềm năng du lịch Ba Vì, nghiên cứu thị trường và nhu cầu của khách hàng mục tiêu.",
      "Bước 2: Nghiên cứu giải pháp: Khảo sát người dùng, phân tích đối thủ, SWOT và xây dựng chân dung khách hàng (Persona).",
      "Bước 3: Lập kế hoạch & triển khai: Xây dựng Big Idea, Key Message, Content Pillar, kế hoạch nội dung, timeline và sản xuất các sản phẩm truyền thông.",
      "Bước 4: Đánh giá kết quả: Theo dõi hiệu quả Facebook và TikTok, so sánh KPI với mục tiêu, tổng kết bài học và đề xuất cải thiện.",
    ],
    images: [ltm1],
    links: [
      { label: "Báo cáo dự án chiến dịch truyền thông 'Lều trên mây'", href: "https://drive.google.com/file/d/1BfNjR9Ll-eTXxK3gnvLTY-9p421Szivd/view?usp=sharing", type: "drive" },
    ],
  },
  {
    slug: "queviettea",
    title: "Dự án 'Sống chậm lại- Nghĩ khác đi' dành cho sản phẩm Trà gạo lứt Quê Việt",
    problem: "Thương hiệu Trà gạo lứt Quê Việt chưa tạo được sự khác biệt trong truyền thông và cần một chiến dịch giúp kết nối với giới trẻ, truyền tải giá trị về lối sống cân bằng và thói quen sống lành mạnh.",
    approach:
      "Thực hiện nghiên cứu khách hàng mục tiêu, insight, hành vi tiếp nhận truyền thông và phân tích đối thủ. Từ đó xây dựng chiến dịch Transmedia với thông điệp 'Sống chậm lại – Nghĩ khác đi', triển khai đồng bộ trên eMagazine, Podcast/YouTube và Facebook.",
    result: "Hoàn thiện chiến dịch truyền thông đa nền tảng bao gồm Big Idea, Content Plan, hệ thống nội dung cho từng kênh và các sản phẩm truyền thông xuyên suốt, giúp truyền tải hình ảnh thương hiệu nhất quán và tăng khả năng tiếp cận nhóm khách hàng mục tiêu.",
    tags: ["Editorial", "Infographic", "Copywriting"],
    image: thumb_queviet,
    body: [
       "Dự án là case study thuộc phạm vi môn học Transmedia Storytelling. Nghiên cứu insight khách hàng và hành vi truyền thông để xây dựng chiến dịch Transmedia cho Trà gạo lứt Quê Việt, phát triển storytelling và hệ thống nội dung đa nền tảng nhằm tăng nhận diện thương hiệu và lan tỏa thông điệp sống lành mạnh.",
      "Bước 1: Xác định vấn đề: Phân tích thương hiệu, mục tiêu dự án và bối cảnh thị trường.",
      "Bước 2: Nghiên cứu giải pháp: Phân tích insight, chân dung khách hàng, hành vi truyền thông và đối thủ.",
      "Bước 3: Xây dựng chiến dịch: Phát triển Big Idea, storytelling, content plan và lựa chọn hệ sinh thái kênh truyền thông (eMagazine, Podcast/YouTube, Facebook).",
      "Bước 4: Hoàn thiện & đánh giá: Thiết kế các sản phẩm truyền thông, xây dựng kế hoạch triển khai và đánh giá hiệu quả của chiến dịch.",
    ],
    links: [
      { label: "Báo cáo Dự án 'Sống chậm lại- Nghĩ khác đi'", 
       href: "https://drive.google.com/file/d/1FKvPKTiJHoqsrzp_QYpxgULMbQO1PSbO/view?usp=drive_link", 
       type: "drive" },
    ],
  },
];

export const education = [
  {
    period: "2022 — 2026",
    title: "Cử nhân Quản trị kinh doanh",
    org: "Đại học FPT",
    detail: "Chuyên ngành: Truyền thông Đa phương tiện - PR",
  },
];

export const experience = [
  {
    period: "01/2026 - 04/2026",
    title: "Leader Đồ án chuyên ngành: Tổ chức sự kiện Happy Tết 2026 tại Hoàng Thành Thăng Long",
    org: "Sở Du lịch Hà Nội & BLUEVN Agency",
    detail: "Quản lý đội nhóm, viết bài fanpage, lên ý tưởng chiến dịch truyền thông, phối hợp với agency để đạt được hiệu quả truyền thông theo yêu cầu.",
  },
  {
    period: "05/2025 - 12/2025",
    title: "Leader các nhóm môn học",
    org: "FPT University",
    detail: "Quản lý nhóm 5-6 thành viên cho các dự án môn học chuyên ngành truyền thông .",
  },
  {
    period: "01/2025 - 04/2025",
    title: "Biên tập viên, Content Creator, Video Editor",
    org: "Phòng Văn hóa - VTV24, VTV - Đài Truyền hình Việt Nam",
    detail: "Intern tại VTV với nhiều kinh nghiệm thực tế học hỏi được.",
    images: [vtt1, vtt2, vtt3],
  },
];

export const achievements = [
  "Tác giả tham luận 'Ethical AI in Public relations: Building a contextual framework for transparency and accountability in Vietnam' được xuất bản trong Kỷ yếu Hội thảo khoa học 'A new dawn for media education: Navigating AI and advandcing national aspirations' (ISBN: 978-604-45-2379-8), 2025.",
  "Sinh viên giỏi 5 kỳ liên tiếp",
  "Sản xuất hơn 60 ấn phẩm truyền thông trong 2 năm",
];
