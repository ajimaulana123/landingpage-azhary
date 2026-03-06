// Static data for eLKISI Landing Page
import { Teacher, PricingPlan, Testimonial, ComparisonRow, FAQ, ExamStage } from '../types'

export const CONTACT = {
  agung: {
    name: 'Agung',
    phone: '+6282231801953',
    whatsapp: 'https://wa.me/6282231801953'
  },
  amy: {
    name: 'Amy',
    phone: '+6285858359161',
    whatsapp: 'https://wa.me/6285858359161'
  },
  email: 'info@elkisi.com',
  addressEgypt: '6 Ibn Al Roumi, Al Hay as Sabea, Nasr City, Cairo Governorate 4441403, Mesir'
}

export const STATS = {
  alumni: '82+',
  successRate: '100%',
  experience: '5 Tahun'
}

export const CURRICULUM = {
  bahasaArab: [
    'Nahwu (Tata Bahasa)',
    'Sharaf (Morfologi)',
    'Qira\'ah (Membaca)',
    'Muhadatsah (Percakapan)',
    'Insya\' (Menulis)',
    'Balaghah (Retorika)'
  ],
  ilmuSyari: [
    'Ulumul Qur\'an',
    'Tafsir Qur\'an',
    'Tajwid',
    'Ulum Syar\'i'
  ]
}

export const DORMITORY_FACILITIES = {
  kamar: ['Kasur', 'Bantal', 'Sprei', 'Lemari pakaian'],
  bersama: ['Mesin cuci', 'Kompor'],
  lokasi: 'Dekat dengan akses kebutuhan harian mahasiswa di Kairo'
}

export const SCHOLARSHIP = {
  prestasi: {
    title: 'Beasiswa Prestasi',
    criteria: 'Santri dengan nilai terbaik di Ujian Mustawa dan Tahili',
    benefit: 'Gratis biaya asrama/sakan'
  },
  hafidz: {
    title: 'Beasiswa Hafidz/Hafidzah',
    criteria: '1 putra dan 1 putri penghafal 30 Juz (setelah tes verifikasi)',
    benefit: 'Gratis biaya asrama/sakan',
    responsibility: 'Menjadi Musyrif/Musyrifah untuk membimbing santri lain'
  }
}

export const PROGRAM_TIMELINE = [
  {
    step: 1,
    title: 'Pendaftaran & Pembinaan',
    description: 'Daftar program Online/Offline dan mulai pembelajaran intensif',
    duration: '6-12 bulan'
  },
  {
    step: 2,
    title: 'Ujian Tahdid Mustawa',
    description: 'Ujian penentuan level awal kemampuan bahasa Arab',
    cost: '$160'
  },
  {
    step: 3,
    title: 'Proses Kenaikan Tingkat',
    description: 'Naik level secara bertahap hingga level 7/Muadalah',
    cost: '$110 per ujian'
  },
  {
    step: 4,
    title: 'Ujian Tahili',
    description: 'Ujian akhir penyetaraan untuk masuk universitas',
    cost: '$160'
  },
  {
    step: 5,
    title: 'Pendaftaran Fakultas',
    description: 'Langsung daftar ke fakultas impian di Al-Azhar',
    duration: 'Setelah lulus Tahili'
  }
]

export const AFFILIATION = {
  name: 'Pusat Pengembangan Pendidikan Siswa Asing Al-Azhar',
  nameArabic: 'Markaz Tathwir',
  description: 'Program eLKISI berjalan di bawah naungan lembaga resmi Al-Azhar untuk menangani siswa asing',
  status: 'Terafiliasi & Diakui'
}

export const SCHEDULE = {
  session1: '16.00 - 17.00 WIB',
  session2: '20.00 - 21.00 WIB',
  days: 'Senin - Kamis'
}

export const TEACHERS: Teacher[] = [
  {
    name: "Syaikh Ahmad Abdul Adzim",
    title: "Musyrif 'Am (Pengawas Umum)",
    education: "Lulusan Fakultas Ushuluddin Al-Azhar",
    bio: "Pengawas umum program dengan pengalaman 15+ tahun mengajar santri internasional. Spesialis dalam menyederhanakan konsep Balaghah dan gramatikal Arab yang kompleks dengan metode yang mudah dipahami.",
    expertise: ["Balaghah", "Nahwu", "Sharaf", "Hiwar Fushah"]
  },
  {
    name: "Syaikh Farid Musthofa",
    title: "Pakar Ulumul Qur'an & Qira'ah",
    education: "Lulusan Fakultas Darul Ulum Al-Azhar • Sanad Qira'ah",
    bio: "Native speaker dengan sanad Qira'ah resmi. Spesialis dalam pengajaran Ulumul Qur'an, Tafsir, dan Tajwid dengan metode yang sistematis dan mendalam. Ahli dalam membimbing santri menguasai bacaan Al-Qur'an dengan tartil.",
    expertise: ["Ulumul Qur'an", "Tafsir", "Qira'ah", "Tajwid"]
  },
  {
    name: "Syaikh Magdy Ali",
    title: "Pakar Ilmu Syar'i & Ulum Syar'i",
    education: "Lulusan Al-Azhar University",
    bio: "Pembimbing utama untuk Ujian Mustawa Bahasa Arab dan pendamping intensif persiapan Ujian Tahili (Ujian akhir masuk fakultas). Menggunakan pendekatan keilmuan yang mendalam dan sistematis untuk memastikan santri siap menghadapi ujian Al-Azhar.",
    expertise: ["Ulum Syar'i", "Ujian Mustawa", "Ujian Tahili", "Insya'"]
  }
]

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Program Online",
    description: "Belajar dari Indonesia via Zoom",
    price: "Rp 250rb",
    period: "/bulan",
    featured: false,
    features: [
      "Kelas live via Zoom 4x seminggu",
      "Senin-Kamis: 16.00-17.00 & 20.00-21.00 WIB",
      "Materi Utama: Nahwu, Sharaf, Qira'ah, Muhadatsah, Insya', Balaghah",
      "Materi Penunjang: Ulumul Qur'an, Tafsir, Tajwid, Ulum Syar'i",
      "Akses rekaman kelas selamanya",
      "Modul digital lengkap",
      "Bimbingan persiapan tes Al-Azhar",
      "Konsultasi via WhatsApp",
      "Sertifikat kelulusan"
    ]
  },
  {
    name: "Program Offline (Tatap Muka)",
    description: "Belajar intensif di Mesir + Full Support",
    price: "Rp 500rb",
    period: "/bulan + Biaya Keberangkatan",
    featured: true,
    features: [
      "Semua benefit program Online",
      "Kelas tatap muka di Kairo",
      "Halaqah & Talaqqi langsung dengan Masyayikh",
      "Makan 3x sehari (Rp 30rb/hari)",
      "Biaya keberangkatan: Rp 25-28 juta*",
      "Termasuk: Tiket pesawat PP, visa, legalisir dokumen",
      "Fasilitas asrama: Kasur, bantal, sprei, lemari, mesin cuci, kompor",
      "Jemput bandara + pendampingan registrasi kampus",
      "Pengurusan kartu mahasiswa",
      "City tour & rihlah ilmiah ke situs bersejarah Kairo",
      "Pendampingan tahun pertama di Mesir",
      "Jaminan lulus 100%",
      "Networking dengan 82+ alumni"
    ]
  }
]

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ahmad Fauzi",
    faculty: "Fakultas Syariah, Al-Azhar",
    year: "Alumni 2024",
    quote: "Dari NOL bahasa Arab ke lulus ujian Al-Azhar dalam 10 bulan! Alhamdulillah, berkat bimbingan Syaikh Ahmad dan tim eLKISI, saya langsung diterima di Fakultas Syariah. Hemat Rp 35 juta dibanding teman yang ikut I'dad Lughawi!"
  },
  {
    name: "Fatimah Azzahra",
    faculty: "Fakultas Darul Ulum, Al-Azhar",
    year: "Alumni 2025",
    quote: "Program eLKISI benar-benar all-in-one. Dari belajar bahasa, urus visa, booking asrama, sampai jemput bandara semua dibantu. Orang tua saya sangat terbantu dan tenang. Worth every penny!"
  },
  {
    name: "Muhammad Rizki",
    faculty: "Fakultas Ushuluddin, Al-Azhar",
    year: "Alumni 2024",
    quote: "Metode pengajaran Syaikh Farid sangat efektif. Dalam 10 bulan kemampuan bahasa Arab saya meningkat drastis dari pemula total. Lulus tes Al-Azhar dengan nilai 87/100 - di atas rata-rata!"
  }
]

export const COMPARISON_DATA: ComparisonRow[] = [
  {
    aspect: "Durasi Persiapan",
    mandiri: "1-2 tahun (I'dad Lughawi)",
    elkisi: "6-12 bulan (Matrikulasi)"
  },
  {
    aspect: "Biaya Persiapan",
    mandiri: "Rp 30-40 juta",
    elkisi: "Rp 15-35 juta"
  },
  {
    aspect: "Tingkat Kelulusan",
    mandiri: "60-70% (tidak pasti)",
    elkisi: "100% (terbukti!)"
  },
  {
    aspect: "Pengurusan Visa",
    mandiri: "Urus sendiri (ribet!)",
    elkisi: "Full handling oleh tim"
  },
  {
    aspect: "Pencarian Asrama",
    mandiri: "Cari sendiri di Mesir",
    elkisi: "Dibantu booking dari Indo"
  },
  {
    aspect: "Pendampingan",
    mandiri: "Tidak ada",
    elkisi: "Sampai tahun pertama"
  },
  {
    aspect: "Pengajar",
    mandiri: "Tidak jelas kualitasnya",
    elkisi: "Native speaker expert"
  },
  {
    aspect: "Konsultasi",
    mandiri: "Bayar lagi",
    elkisi: "Gratis selamanya"
  }
]

export const FAQS: FAQ[] = [
  {
    question: "Apakah program ini legal dan diakui Al-Azhar?",
    answer: "Ya, program kami adalah persiapan mandiri yang sah. Lulusan kami mengikuti tes masuk resmi Al-Azhar dan diterima di berbagai fakultas. Kami bukan lembaga resmi Al-Azhar, tapi partner persiapan terpercaya dengan track record 100% kelulusan."
  },
  {
    question: "Berapa biaya hidup di Mesir per bulan?",
    answer: "Biaya hidup di Kairo berkisar Rp 2-3 juta/bulan (termasuk makan, transportasi, dan kebutuhan sehari-hari). Asrama mahasiswa sekitar Rp 500rb-1 juta/bulan. Total estimasi Rp 2,5-4 juta/bulan tergantung gaya hidup."
  },
  {
    question: "Apakah ada jaminan uang kembali jika tidak lulus?",
    answer: "Kami sangat yakin dengan metode kami (track record 100% lulus). Namun jika Anda mengikuti program dengan disiplin penuh, hadir minimal 90% kelas, dan tidak lulus tes Al-Azhar, kami akan refund 50% biaya program. Ini komitmen kami!"
  },
  {
    question: "Kapan pendaftaran dibuka dan berapa kuotanya?",
    answer: "Pendaftaran angkatan 2026 dibuka mulai Januari 2026. Kuota sangat terbatas hanya 30 santri per angkatan untuk menjaga kualitas pengajaran. First come first served. Sudah 18 kursi terisi!"
  },
  {
    question: "Apakah bisa cicil pembayaran?",
    answer: "Ya! Kami menyediakan skema cicilan 3x tanpa bunga untuk program Offline. Cicilan 1: saat daftar, Cicilan 2: bulan ke-4, Cicilan 3: bulan ke-8. Hubungi tim kami untuk simulasi cicilan."
  },
  {
    question: "Apa bedanya dengan kursus bahasa Arab biasa?",
    answer: "Kursus biasa hanya mengajar bahasa Arab umum. Program kami KHUSUS dirancang untuk standar ujian Al-Azhar dengan materi Nahwu, Sharaf, Balaghah, dan latihan soal ujian tahun-tahun sebelumnya. Plus pendampingan visa dan asrama!"
  },
  {
    question: "Apakah orang tua bisa ikut ke Mesir?",
    answer: "Bisa! Banyak orang tua yang menemani anaknya di tahun pertama. Kami bisa bantu carikan penginapan dekat kampus dan memberikan informasi lengkap tentang kehidupan di Kairo untuk keluarga."
  },
  {
    question: "Bagaimana jika saya tidak punya basic bahasa Arab sama sekali?",
    answer: "Tidak masalah! Program kami dimulai dari level dasar. Kami punya placement test untuk menentukan level Anda. Bahkan santri yang mulai dari nol bisa lulus dengan metode intensif kami dalam 12 bulan."
  }
]

export const EXAM_STAGES: ExamStage[] = [
  {
    stage: 1,
    title: "Tahdid Mustawa",
    subtitle: "Ujian Penempatan Level",
    cost: "$160",
    duration: "30 hari bimbel",
    description: "Menentukan level awal Anda"
  },
  {
    stage: 2,
    title: "Kenaikan Tingkat",
    subtitle: "Ujian Naik Level",
    cost: "$110",
    duration: "30 hari bimbel",
    description: "Naik ke level berikutnya (hingga level 7)"
  },
  {
    stage: 3,
    title: "Ujian Muadalah/Tahili",
    subtitle: "Ujian Akhir Penyetaraan Masuk Fakultas",
    cost: "$160",
    duration: "40 hari bimbel",
    description: "Langsung masuk fakultas!",
    isFinal: true
  }
]

export const EXAM_COSTS = {
  tahdidMustawa: {
    cost: '$160',
    includes: 'Bimbel 30 hari',
    description: 'Pendaftaran & Ujian Penempatan Level'
  },
  kenaikanTingkat: {
    cost: '$110',
    includes: 'Bimbel 30 hari',
    description: 'Ujian Naik Level (per ujian)'
  },
  tahili: {
    cost: '$160',
    includes: 'Bimbel 40 hari',
    description: 'Ujian Muadalah/Tahili (Ujian Akhir)'
  },
  sertifikat: {
    cost: '$20',
    description: 'Sertifikat Kelulusan'
  }
}

export const LIVING_COSTS = {
  asrama: 'Rp 500rb - 1 juta/bulan',
  makanHarian: 'Rp 30.000/hari',
  kebutuhanHarian: 'Rp 2-3 juta/bulan',
  totalEstimasi: 'Rp 2,5-4 juta/bulan'
}

export const PROBLEM_LIST = [
  "Harus ikut I'dad Lughawi 1 tahun di Mesir (biaya ~Rp 30-40 juta)",
  "Tidak ada jaminan lulus tes masuk fakultas",
  "Urus visa, asrama, dan administrasi sendiri",
  "Risiko gagal dan harus pulang ke Indonesia",
  "Total waktu tempuh bisa 5-6 tahun untuk S1"
]

export const SOLUTION_LIST = [
  "Matrikulasi intensif 6-12 bulan, langsung masuk fakultas",
  "Tingkat kelulusan 100% (track record terbukti)",
  "Full handling: visa, asrama, pendampingan tahun pertama",
  "Hemat waktu 1 tahun dan biaya puluhan juta",
  "Lulus S1 tepat waktu dalam 4 tahun"
]
