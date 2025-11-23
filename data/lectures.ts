export interface LectureVideo {
  id: string;
  title: string;
  youtubeId: string;
  date?: string;
  programId: string;
}

export interface LectureProgram {
  id: string;
  title: string;
  schedule: string;
  description: string;
}

export const lecturePrograms: LectureProgram[] = [
  {
    id: "fiqhul-daleel",
    title: "FIQHUL DALEEL",
    schedule: "Every Friday on Radio Lagos 107.5 FM, at 4:30pm - 4:45pm",
    description: "Weekly radio program discussing Islamic jurisprudence and guidance from the Quran and Sunnah.",
  },
  {
    id: "weekly-halqah",
    title: "WEEKLY HALQAH",
    schedule: "Every Sunday at 11:30am - 1:00pm",
    description: "Regular study circle for in-depth Islamic learning and spiritual growth.",
  },
  {
    id: "couple-seminar",
    title: "COUPLE SEMINAR",
    schedule: "Once in a year",
    description: "Annual seminar focusing on building strong Islamic marriages and family relationships.",
  },
  {
    id: "imam-seminar",
    title: "IMAM SEMINAR",
    schedule: "Once in a year",
    description: "Annual gathering for Imams and Islamic leaders to enhance their knowledge and leadership skills.",
  },
  {
    id: "village-dawah",
    title: "VILLAGE DAWAH",
    schedule: "Yearly program",
    description: "Annual outreach program bringing Islamic knowledge to rural communities.",
  },
];

export const allVideos: LectureVideo[] = [
  { id: "1", title: "Understanding Islamic Jurisprudence - Part 1", youtubeId: "dQw4w9WgXcQ", programId: "fiqhul-daleel", date: "2024-01-05" },
  { id: "2", title: "Fiqh Principles - Part 2", youtubeId: "dQw4w9WgXcQ", programId: "fiqhul-daleel", date: "2024-01-12" },
  { id: "3", title: "Quranic Guidance in Daily Life", youtubeId: "dQw4w9WgXcQ", programId: "fiqhul-daleel", date: "2024-01-19" },
  { id: "4", title: "Fiqhul Daleel - Episode 4", youtubeId: "dQw4w9WgXcQ", programId: "fiqhul-daleel", date: "2024-01-26" },
  { id: "5", title: "Fiqhul Daleel - Episode 5", youtubeId: "dQw4w9WgXcQ", programId: "fiqhul-daleel", date: "2024-02-02" },
  
  { id: "6", title: "Weekly Halqah - Week 1", youtubeId: "dQw4w9WgXcQ", programId: "weekly-halqah", date: "2024-01-07" },
  { id: "7", title: "Weekly Halqah - Week 2", youtubeId: "dQw4w9WgXcQ", programId: "weekly-halqah", date: "2024-01-14" },
  { id: "8", title: "Weekly Halqah - Week 3", youtubeId: "dQw4w9WgXcQ", programId: "weekly-halqah", date: "2024-01-21" },
  { id: "9", title: "Weekly Halqah - Week 4", youtubeId: "dQw4w9WgXcQ", programId: "weekly-halqah", date: "2024-01-28" },
  { id: "10", title: "Weekly Halqah - Week 5", youtubeId: "dQw4w9WgXcQ", programId: "weekly-halqah", date: "2024-02-04" },
  
  { id: "11", title: "Couple Seminar 2024 - Building Strong Marriages", youtubeId: "dQw4w9WgXcQ", programId: "couple-seminar", date: "2024-03-15" },
  { id: "12", title: "Couple Seminar 2023 - Islamic Family Values", youtubeId: "dQw4w9WgXcQ", programId: "couple-seminar", date: "2023-03-10" },
  { id: "13", title: "Couple Seminar 2022 - Communication in Marriage", youtubeId: "dQw4w9WgXcQ", programId: "couple-seminar", date: "2022-03-12" },
  
  { id: "14", title: "Imam Seminar 2024 - Leadership in Islam", youtubeId: "dQw4w9WgXcQ", programId: "imam-seminar", date: "2024-06-20" },
  { id: "15", title: "Imam Seminar 2023 - Community Building", youtubeId: "dQw4w9WgXcQ", programId: "imam-seminar", date: "2023-06-18" },
  { id: "16", title: "Imam Seminar 2022 - Islamic Scholarship", youtubeId: "dQw4w9WgXcQ", programId: "imam-seminar", date: "2022-06-22" },
  
  { id: "17", title: "Village Dawah 2024 - Reaching Rural Communities", youtubeId: "dQw4w9WgXcQ", programId: "village-dawah", date: "2024-08-10" },
  { id: "18", title: "Village Dawah 2023 - Spreading the Message", youtubeId: "dQw4w9WgXcQ", programId: "village-dawah", date: "2023-08-15" },
  { id: "19", title: "Village Dawah 2022 - Community Engagement", youtubeId: "dQw4w9WgXcQ", programId: "village-dawah", date: "2022-08-12" },
];

