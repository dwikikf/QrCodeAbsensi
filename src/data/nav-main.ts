import { ChartGantt, ListChecks, Settings2, Database } from "lucide-react";

const data = {
  navMain: [
    {
      title: "Data Siswa",
      url: "#",
      icon: Database,
      items: [
        {
          title: "Tambah Data",
          url: "siswa",
        },
      ],
    },
    {
      title: "Absensi",
      url: "#",
      icon: ListChecks,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
      ],
    },
    {
      title: "Laporan",
      url: "#",
      icon: ChartGantt,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
      ],
    },
  ],
};

export default data;
