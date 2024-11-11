import bannerSlide from "/public/assets/images/industries/manufacturing/manufacturing-banner.png";
import customizationImage from "/public/assets/images/customization-img.png";
import importantmetrics from "/public/assets/images/icons/important-metrics.png";
import realtimetracking from "/public/assets/images/icons/real-time-tracking.png";
import visualmanagement from "/public/assets/images/icons/visual-management.png";
import Image from "next/image";

const sqdcpData = {
  bannerData: {
    title: "Streamline your Shop Floor with ",
    HighlightTitle: "SQCDP Board Visual Management Software",
    Image: bannerSlide,
    desc: "Maximise productivity and optimise shop floor operations with a digital SQCDP board designed for real-time performance tracking.",
  },
  cardSectionTitle: {
    title: "What is SQCDP? A Comprehensive Visual Management System",
    desc: "SQCDP is a lean manufacturing tool that stands for Safety, Quality, Delivery, Cost, and People. This visual management system tracks and displays performance in real time, empowering teams to drive continuous improvement and align with strategic goals.",
  },
  cardData: [
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
  ],

  StickyScrollContentTitle: {
    title:
      "Visualise and Manage Key Performance Metrics: SQDCP",
    content:
      "Track and improve your manufacturing processes with detailed visual insights across Safety, Quality, Delivery, Cost, and People.",
  },
  StickyScrollContent: [
    {
      title: "Strategic Planning",
      description:
        "Balanced Scorecard serves as a crucial tool for banks to define and communicate their vision, mission, and strategic objectives. It ensures alignment across all levels of the organisation, driving cohesive efforts toward common goals.",
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
      title: "Customer Focus",
      description:
        "The framework enhances customer relationship management by measuring key aspects such as customer satisfaction, loyalty, and retention. This focus ultimately improves service delivery and strengthens client relationships.",
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
      title: "Risk Management",
      description:
        "This tool assesses financial risks and ensures compliance with regulations, allowing banks to maintain stability and proactively mitigate potential threats.",
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
      title: "Financial Sustainability",
      description:
        "By measuring key metrics such as Return on Assets (ROA) and Net Interest Margin (NIM), the Balanced Scorecard helps banks ensure long-term financial health and growth.",
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
    title: "Driving Efficiency and Performance Gains with Data Point",
  },
  counterData: [
    {
      title: "improvement in shop floor productivity",
      number: "20",
    },
    {
      title: "reduction in operational costs ",
      number: "15",
    },
    {
      title: "faster decision-making through real-time data",
      number: "30",
    },
  ],

  formContents: {
    title: "Get in Touch with Us for your Customised SQDCP Demo !",
    desc: "Discover how our SQCDP Board Visual Management Software can revolutionise your shop floor performance.",
  },
  accordionItems: [
    {
        title: "What is the Balance Scorecard for a manufacturing ?",
        content:
          "A Balanced Scorecard provides a framework for aligning business activities to the vision and strategy of the organisation, enhancing performance and decision-making in the manufacturing sector.",
      },
      {
        title: "How can customise Data Point for my manufacturing processes?",
        content:
          "Data Point offers flexible options for customising KPIs and metrics that align with the specific challenges and goals of your manufacturing operations. This ensures that your Balanced Scorecard is effectively designed to enhance performance and drive strategic success.",
      },
      {
        title:
          "How does Data Point's Balanced Scorecard software improve operational efficiency?",
        content:
          "Data Point offers flexible options for customising KPIs and metrics that align with the specific challenges and goals of your manufacturing operations. This ensures that your Balanced Scorecard is effectively designed to enhance performance and drive strategic success.",
      },
      {
        title: "What kind of support does Data Point offer after implementation?",
        content:
          "Data Point offers flexible options for customising KPIs and metrics that align with the specific challenges and goals of your manufacturing operations. This ensures that your Balanced Scorecard is effectively designed to enhance performance and drive strategic success.",
      },
  ],
  learnMoreTitle:{
    title: "Learn More about SQCDP Boards",
  },
  learnmoreContent:[
    {
        title: "How do you use a SQCDP board? ",
        link:  "",
    },
    {
        title: "Driving continuous improvement with SQDCP... ",
        link:  "",
    },
    {
        title: "Streamline Operations with SQCDP Board Visual Manage... ",
        link:  "",
    },
    {
        title: "SQDCP Template  ",
        link:  "",
    },
    {
        title: "What is SQDCPE? ",
        link:  "",
    },
    {
        title: "How can SQDCP boards be utilised to promote continu... ",
        link:  "",
    },
  ]
};

export default sqdcpData;
