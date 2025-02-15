import bannerSlide from "/public/assets/images/industries/manufacturing/manufacturing-banner.png";
import customizationImage from "/public/assets/images/customization-img.png";
import importantmetrics from "/public/assets/images/icons/important-metrics.png";
import realtimetracking from "/public/assets/images/icons/real-time-tracking.png";
import visualmanagement from "/public/assets/images/icons/visual-management.png";
import Image from "next/image";

const fcilData = {
  bannerData: {
    title: "FCIL Balanced Scorecard ",
    HighlightTitle: " A Complete Framework for Operational Excellence ",
    Image: bannerSlide,
    desc: "Drive business success by balancing financial health, customer satisfaction, process efficiency, and growth.  ",
  },
  cardSectionTitle: {
    title: "What are the Four Perspectives of Balanced Scorecard? ",
    desc: " The balanced scorecard (BSC) is a strategic performance management tool that identifies and improves various internal business or organisational functions and their outcomes. It translates the mission and vision of organisations into measurable actions. The balanced scorecard is anchored on four perspectives: Finance, Customer, Internal Process, Learning & Growth. Analysing these perspectives will enable the top-level management to make meaningful decisions that shape the organisation's future. ",
  },
  cardData: [
    {
      title: "Optimised Business Performance",
      icon: visualmanagement,
      content:
        " The FCIL framework enhances financial oversight, customer satisfaction, and internal process efficiency. ",
    },
    {
      title: "Customer-Centric Approach",
      icon: realtimetracking,
      content:
        "FCIL helps organisations focus on improving customer satisfaction and retention. ",
    },
    {
      title: "Continuous Improvement",
      icon: importantmetrics,
      content:
        "FCIL promotes ongoing innovation and workforce development to drive business growth. ",
    },
  ],

  StickyScrollContentTitle: {
    title: "Exploring the FCIL Metrics ",
    content:
      "Understand how the FCIL Balanced Scorecard enhances business outcomes. ",
  },
  StickyScrollContent: [
    {
      title: "Finance",
      description:
        "Keep track of revenue, costs, and profitability to make strategic financial decisions. ",
      content: (
        <Image
          src={customizationImage}
          width={1000}
          className="w-full"
          alt="linear board demo"
        />
      ),
    },
    {
      title: "Internal Business Processes",
      description:
        "Enhance process efficiency to reduce waste and improve output. ",
      content: (
        <Image
          src={customizationImage}
          width={1000}
          className="w-full"
          alt="linear board demo"
        />
      ),
    },
    {
      title: "Learning & Growth",
      description: "Support employee development and innovation for sustained business growth. ",
      content: (
        <Image
          src={customizationImage}
          width={1000}
          className="w-full"
          alt="linear board demo"
        />
      ),
    },       
  ],
  counterTitle: {
    title: "Achieve Measurable Results with the FCIL Balanced Scorecard  ",
  },
  counterData: [
    {
      title: " increase in financial performance ",
      number: "25",
    },
    {
      title: "  improvement in customer satisfaction",
      number: "30",
    },
    {
      title: " faster internal processes   ",
      number: "20",
    },
  ],

  formContents: {
    title: "Request a Demo of the FCIL Balanced Scorecard",
    desc: "Learn how our solution can align your business for success in finance, customer satisfaction, and process optimisation. ",
  },
  accordionItems: [
    {
      title: "How does the FCIL Balanced Scorecard improve financial performance? ",
      content:
        "It helps track critical financial metrics and provides insights for optimising resource allocation and cost management. ",
    },
    {
      title: "How does the Customer perspective enhance customer satisfaction?",
      content:"By continuously monitoring customer feedback, the scorecard enables businesses to adapt and improve customer service strategies.  ",
    },
    {
      title: "What internal business processes does the scorecard track? ",
      content:
        "The scorecard focuses on optimising processes related to operational efficiency, quality control, and supply chain management.  ",
    },
    {
      title: "How does the Learning & Growth perspective support innovation?",
      content:
        "It helps organisations foster employee development and innovation, leading to long-term growth and competitive advantage. ",
    },
  ],
  
};

export default fcilData;
