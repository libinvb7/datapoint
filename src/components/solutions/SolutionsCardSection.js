import importantmetrics from "/public/assets/images/icons/important-metrics.png";
import realtimetracking from "/public/assets/images/icons/real-time-tracking.png";
import visualmanagement from "/public/assets/images/icons/visual-management.png";
import SolutionCard from "./SolutionCard";

const cardData = [
  {
    title: "Lean Manufacturing Visual Management",
    icon: visualmanagement,
    content:
      "Enhance operational transparency and decision-making with a visual approach to manufacturing management.",
  },
  {
    title: "Real-Time Production Tracking",
    icon: realtimetracking,
    content:
      "Get instant insights into your shop floor performance across key metrics like SQDCP.",
  },
  {
    title: "Continuous Improvement Metrics",
    icon: importantmetrics,
    content:
      "Use real-time data to track, analyse, and improve KPIs consistently.",
  },
];

const SolutionsCard = () => {
  return (
    <section className=" mt-20 px-6  pb-20">
      <div className="container">
        <div className="  flex justify-center items-center  flex-col">
          <div className="max-w-[800px] text-center">
            <h2 className="text-primary pb-3">
              What is SQCDP? A Comprehensive Visual Management System
            </h2>
          </div>
          <p className="text-center max-w-[900px]">
            SQCDP is a lean manufacturing tool that stands for Safety, Quality,
            Delivery, Cost, and People. This visual management system tracks and
            displays performance in real time, empowering teams to drive
            continuous improvement and align with strategic goals.
          </p>
        </div>

        <div className="flex flex-wrap justify-center pt-[50px]">
          {cardData.map((data, index) => (
            <div
              className="w-full lg:w-1/3 md:w-1/2 px-2 mb-4 flex justify-center items-center mb-16 solution-card"
              key={index}
            >
              <SolutionCard data={data} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsCard;
