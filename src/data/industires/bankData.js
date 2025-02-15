import bannerSlide from "/public/assets/images/industries/manufacturing/manufacturing-banner.png";
import customizationImage from "/public/assets/images/customization-img.png";
import ExecuteStrategies from "/public/assets/images/manufacturing/execute-strategies.png";
import strategicplan from "/public/assets/images/manufacturing/strategic-plan.png";
import datainsights from "/public/assets/images/manufacturing/data-insights.png";
import productionandsales from "/public/assets/images/manufacturing/productionandsales.png";
import customer from "/public/assets/images/manufacturing/customer.png";
import digitalreports from "/public/assets/images/manufacturing/digital-reports.png";
import Image from "next/image";

const bankData = {
  bannerData:
        {
            title: 'Transform your Banking Operations with ',
            HighlightTitle: 'a Strategic Balanced Scorecard',
            Image: bannerSlide,
            desc:"Leverage our comprehensive Banking Balanced Scorecard software with advanced KPI dashboards to enhance operational efficiency, monitor Key Performance Indicators, and improve financial management for sustainable growth in the banking sector."
          
           
        
      },
      StickyScrollContentTitle:{
        title: 'Transforming Banking Challenges into Opportunities: Why Data Point is your Smartest Solution?',
        content: "A Balanced Scorecard (BSC) is a strategic management tool that enables banks to align financial and non-financial KPIs, driving performance in areas like financial growth, customer satisfaction, operational efficiency, and risk management."
      },
    StickyScrollContent:[
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
      counterTitle:{
        title: "Driving Efficiency and Performance Gains with Data Point",
      },
      counterData:[
        {
          title: "Reduction in Operational Delays",
          number: "30",
        },
        {
          title: "Annual Cost Savings ",
          number: "20",
        },
        {
          title: " Increase in Customer Satisfaction ",
          number: "15",
        },
      ],
      cardSectionTitle :{
            title: "How Can the Balanced Scorecard Revolutionise your Banking Operations?"
      },
      cardData:[
        {
          title: "Consistent Decision Making",
          icon: ExecuteStrategies,
          content:
            "Make the right decisions, every single time. Easily analyse perspectives and their Key Performance Indicators to make the correct decisions. Let everyone be well informed about the decisions that are being made.",
        },
        {
          title: "Easy Collaboration of Data",
          icon: strategicplan,
          content:
            "Collaborate data from different departments with much ease. Consolidated view of departmental data helps top level management make better decisions. Take data-driven decisions and make strategic planning and management is easier.",
        },
        {
          title: "Monitor and Enhance Performance",
          icon: datainsights,
          content:
            "Monitor and enhance business performance using financial and non-financial data. By measuring performance, the organisation will realise where they are now and what needs to be done to achieve the long or short term goals.",
        },
        {
          title: "Auto-Generated Reports",
          icon: productionandsales,
          content:
            "Download digital reports and summaries in a click! Gather meaningful insights, to improve business performance. Precise and detailed reports to align actions with organisational strategy goals.",
        },       
      ],
      formContents: {
        title:"Begin your journey towards enhanced Banking Performance",
        desc:"Align your strategies effectively with the Digital Balanced Scorecard."
      },
      accordionItems:[
        {
          title: "What is a Balanced Scorecard in banking?",
          content:
            "The Balanced Scorecard is a strategic management framework that helps banks align their activities with their strategic vision by measuring performance across financial and non-financial metrics, enhancing decision-making and operational efficiency.",
        },
        {
          title: "What types of KPIs should banks include in their Balanced Scorecard?",
          content:
            "Banks should consider KPIs such as Return on Assets (ROA), Net Interest Margin (NIM), customer retention rate, operational efficiency metrics, and compliance indicators to measure their performance comprehensively.",
        },
        {
          title:
            "Banks should consider KPIs such as Return on Assets (ROA), Net Interest Margin (NIM), customer retention rate, operational efficiency metrics, and compliance indicators to measure their performance comprehensively.",
          content:
            "The Balanced Scorecard ensures that all levels of management work towards common strategic objectives by aligning day-to-day operations with the bank's vision, mission, and overall goals.",
        },
        {
          title: "Can I customise the Balanced Scorecard framework to fit my bank's specific needs?",
          content:
            "Yes, the Balanced Scorecard framework is flexible and can be tailored to meet the unique requirements of your bank, allowing you to focus on the most relevant KPIs and strategic objectives for your organisation",
        },
      ]

    }


    export default bankData;




  


    