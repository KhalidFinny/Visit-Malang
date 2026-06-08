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
    <section className="w-full min-h-screen bg-[#f5f4f0] text-black flex flex-col items-center justify-center px-10">
      
      <h1 className="text-[70px] font-black mb-16 tracking-tight text-balance">
        {t('activityList.title')}
      </h1>

      <div className="w-full max-w-5xl">
        {activities.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`/activity/${toSlug(item)}`)}
            className="flex justify-between items-center border-b border-black/40 py-6 cursor-pointer group"
          >
            <h2 className="text-3xl font-extrabold uppercase group-hover:translate-x-2 transition text-safe">
              {activityLabels[index]}
            </h2>

            <span className="text-sm uppercase tracking-widest opacity-70 group-hover:opacity-100">
              {t('activityList.viewMore')}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActivityList;