import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { activitiesData } from "./ActivitiesData";

const ACTIVITIES = ['Nature Seeker', 'Fun & Entertainment', 'Heritage', 'Culinary', 'Hidden Gem'] as const;
const ACTIVITY_KEYS: string[] = [
  'activity.categories.natureSeeker',
  'activity.categories.funEntertainment',
  'activity.categories.heritage',
  'activity.categories.culinary',
  'activity.categories.hiddenGem',
];

const ActivityList = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const activities = [...ACTIVITIES];
  const activityLabels = ACTIVITY_KEYS.map(key => t(key));

  const toSlug = (text: string) =>
    text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "").replace(/-+/g, "-");

  const handleNavigate = (item: string) => {
    const slug = toSlug(item);
    // Preload hero images before navigating so they're cached
    const category = activitiesData[slug];
    if (category) {
      category.places.forEach(p => {
        const img = new Image();
        img.src = p.heroImage;
      });
    }
    navigate(`/activity/${slug}`);
  };

  return (
    <section className="w-full bg-[#f5f4f0] text-[#2D221F] flex flex-col items-center justify-center py-10 md:py-14 px-4 sm:px-8 md:px-12 lg:px-16 border-b border-premium-black/5">
      
      <h1 className="text-3xl sm:text-5xl md:text-7xl text-editorial font-black mb-10 md:mb-16 tracking-tight text-center uppercase max-w-full text-balance leading-none">
        {t('activityList.title')}
      </h1>

      <div className="w-full max-w-[1400px] xl:max-w-[1700px] mx-auto">
        {activities.map((item, index) => (
          <div
            key={index}
            onClick={() => handleNavigate(item)}
            className="flex justify-between items-center border-b border-[#2D221F]/15 hover:border-[#2D221F]/30 py-6 sm:py-7 cursor-pointer group gap-4 transition-all duration-300"
          >
            <h2 className="text-editorial text-xl sm:text-3xl md:text-4xl xl:text-5xl uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-300 leading-snug">
              {activityLabels[index]}
            </h2>

            <div className="flex items-center gap-2 group-hover:text-[#A3B18A] transition-colors duration-300">
              <span className="text-swiss text-sm sm:text-sm uppercase tracking-[0.25em] opacity-70 group-hover:opacity-100 shrink-0 whitespace-nowrap hidden sm:inline">
                {t('activityList.viewMore')}
              </span>
              <svg 
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300 stroke-[#2D221F] group-hover:stroke-[#A3B18A]" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActivityList;
