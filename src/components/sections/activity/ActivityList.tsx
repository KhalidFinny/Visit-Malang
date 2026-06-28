import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const ACTIVITIES = ['Nature Seeker', 'Fun & Entertainment', 'Heritage', 'Coworking Space', 'Hidden Gem'] as const;
const ACTIVITY_KEYS: string[] = [
  'activity.categories.natureSeeker',
  'activity.categories.funEntertainment',
  'activity.categories.heritage',
  'activity.categories.coworking',
  'activity.categories.hiddenGem',
];

const ActivityList = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const activities = [...ACTIVITIES];
  const activityLabels = ACTIVITY_KEYS.map(key => t(key));

  const toSlug = (text: string) =>
    text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

  return (
    <section className="w-full min-h-screen bg-[#f5f4f0] text-black flex flex-col items-center justify-center px-4 sm:px-10 py-16">
      
      <h1 className="text-4xl sm:text-6xl md:text-[70px] font-black mb-12 md:mb-16 tracking-tight text-center uppercase max-w-full text-balance leading-none">
        {t('activityList.title')}
      </h1>

      <div className="w-full max-w-5xl px-2 sm:px-0">
        {activities.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`/activity/${toSlug(item)}`)}
            className="flex justify-between items-center border-b border-black/40 py-5 cursor-pointer group gap-4"
          >
            <h2 className="text-xl sm:text-3xl font-extrabold uppercase group-hover:translate-x-2 transition text-safe leading-snug">
              {activityLabels[index]}
            </h2>

            <span className="text-xs sm:text-sm uppercase tracking-widest opacity-70 group-hover:opacity-100 shrink-0 whitespace-nowrap">
              {t('activityList.viewMore')}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActivityList;