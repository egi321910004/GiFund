import React from "react";
import Navbar from "../../../components/Navbar";
import datadummy from "../../../services/dummy";
import CardComponent from "../../../components/Card";
import avatar1 from "../../../assets/a1.jpg";
import avatar2 from "../../../assets/a2.jpg";
import avatar3 from "../../../assets/a3.png";
import avatar4 from "../../../assets/a5.png";
import avatar5 from "../../../assets/a10.png";
interface DataDummyItem {
  title: string;
  subtitle: string;
  image: string;
  content: string;
  avatar: string;
}
export default function index() {
  const dumyService = [
    {
      title: "Bantuan Covid-19",
      subtitle: "@nikeardiana",
      image: avatar1,
      content:
        "Bantuan Dana suntik vaksin Covid-19 di desa terpencil daerah bandung selatan",
      avatar: avatar1,
    },
    {
      title: "Pengobatan Darurat",
      subtitle: "@maurikusuma",
      image: avatar2,
      content:
        "Bantuan Dana darurat untuk pengobatan pasien yang terkena penyakit langka",
      avatar: avatar2,
    },
    {
      title: "Konsultasi Psikologi",
      subtitle: "@karenasari",
      image: avatar4,
      content:
        "Bantuan Dana untuk konsultasi psikologi bagi korban bencana alam di daerah sulawesi selatan",
      avatar: avatar4,
    },
    {
      title: "Terapi Rutin",
      subtitle: "@mbeliamelia",
      image: avatar5,
      content:
        "Bantuan Dana untuk terapi rutin pasien yang terkena penyakit kanker",
      avatar: avatar5,
    },
    {
      title: "Bantuan Darurat",
      subtitle: "@sohibahmad",
      image: avatar3,
      content:
        "Bantuan Dana untuk korban bencana alam di daerah kalimantan timur",
      avatar: avatar3,
    },
  ];
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        {dumyService.map((data: DataDummyItem, index: number) => (
          <CardComponent key={index} {...data} />
        ))}
      </div>
    </div>
  );
}
