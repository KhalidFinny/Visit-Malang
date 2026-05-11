import React from "react";
import { useParams, useNavigate } from "react-router-dom";

type HistoryData = {
  title: string;
  description: string;
  content: string;
  image: string;
};

const historyData: Record<string, HistoryData> = {
  "the-hidden-story-behind-colorful-village": {
    title: "The Hidden Story Behind Colorful Village",
    description:
      "What looks like a vibrant tourist spot today actually started from an unexpected transformation.",
    image: "/bromo.jpg",
    content:
      "Kampung Warna-Warni Jodipan dulunya merupakan kawasan kumuh yang kurang diperhatikan. Perubahan besar dimulai ketika sekelompok mahasiswa memiliki ide untuk mengubah wajah kampung tersebut menjadi lebih menarik melalui warna.\n\nDengan dukungan perusahaan cat dan partisipasi warga, seluruh rumah dicat dengan warna-warna cerah. Transformasi ini tidak hanya memperbaiki tampilan visual, tetapi juga mengubah kehidupan ekonomi masyarakat.\n\nNamun, di balik keindahan tersebut, terdapat tantangan dalam menjaga kebersihan dan keseimbangan antara kehidupan warga dan pariwisata."
  },

  "from-slum-to-global-attraction": {
    title: "From Slum to Global Attraction",
    description:
      "Once considered an overlooked area, this village became one of Indonesia’s most iconic destinations.",
    image: "/bromo.jpg",
    content:
      "Awalnya kawasan ini tidak dikenal dan bahkan dihindari oleh banyak orang. Namun dengan sentuhan kreativitas dan semangat komunitas, kawasan ini berubah menjadi destinasi wisata global.\n\nMedia sosial berperan besar dalam memperkenalkan tempat ini ke dunia. Dalam waktu singkat, jumlah pengunjung meningkat drastis.\n\nPerubahan ini membawa dampak positif sekaligus tantangan dalam pengelolaan wisata yang berkelanjutan."
  }
};

const HistoryDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const data = slug ? historyData[slug] : null;

  if (!data) {
    return <div className="text-white p-10">Story not found</div>;
  }

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">

      {/* HERO */}
      <div className="relative h-[70vh] w-full overflow-hidden">

        <img
          src={data.image}
          alt={data.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-transparent" />

        {/* BACK ICON ONLY */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 border border-white/10 hover:bg-black/60 transition"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
        </button>

        {/* TEXT (NOW ALIGNED) */}
        <div className="absolute bottom-16 left-0 right-0">
          <div className="max-w-3xl mx-auto px-6">
            <h1 className="text-[clamp(32px,5vw,64px)] font-semibold leading-tight tracking-tight">
              {data.title}
            </h1>

            <p className="text-white/60 mt-4 text-[15px]">
              {data.description}
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-3xl mx-auto px-6 py-20">

        <div className="space-y-8">
          {data.content.split("\n\n").map((para, i) => (
            <p
              key={i}
              className="text-white/70 text-[16px] leading-[1.9]"
            >
              {para}
            </p>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-20 pt-10 border-t border-white/10 text-center">
          <p className="text-white/30 text-sm mb-6">
            Explore more stories to discover the hidden side of Malang.
          </p>

          <button
            onClick={() => navigate("/history")}
            className="px-6 py-2 border border-white/20 rounded-full text-sm text-white/70 hover:text-white hover:border-white/40 transition"
          >
            Back to History
          </button>
        </div>

      </div>
    </div>
  );
};

export default HistoryDetail;