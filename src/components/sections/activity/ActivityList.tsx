import { useNavigate } from "react-router-dom";

const activities = [
  "Nature Seeker",
  "Fun & Entertainment",
  "Heritage",
  "Coworking Space",
  "Hidden Gem",
];

const ActivityList = () => {
  const navigate = useNavigate();

  const toSlug = (text: string) =>
    text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

  return (
    <section className="w-full min-h-screen bg-[#F2E9E4] text-black flex flex-col items-center justify-center px-10">
      
      <h1 className="text-[70px] font-black mb-16 tracking-tight">
        INFORMATION
      </h1>

      <div className="w-full max-w-5xl">
        {activities.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`/activity/${toSlug(item)}`)}
            className="flex justify-between items-center border-b border-black/40 py-6 cursor-pointer group"
          >
            <h2 className="text-3xl font-extrabold uppercase group-hover:translate-x-2 transition">
              {item}
            </h2>

            <span className="text-sm uppercase tracking-widest opacity-70 group-hover:opacity-100">
              view more
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActivityList;