import bannerSlide from "/public/assets/images/industries/manufacturing/manufacturing-banner.png";
import customizationImage from "/public/assets/images/customization-img.png";
import ExecuteStrategies from "/public/assets/images/manufacturing/execute-strategies.png";
import strategicplan from "/public/assets/images/manufacturing/strategic-plan.png";
import datainsights from "/public/assets/images/manufacturing/data-insights.png";
import productionandsales from "/public/assets/images/manufacturing/productionandsales.png";
import customer from "/public/assets/images/manufacturing/customer.png";
import digitalreports from "/public/assets/images/manufacturing/digital-reports.png";
import Image from "next/image";

const fmcgData = {
  bannerData:
        {
            title: 'Optimise Your Retail Operations with ',
            HighlightTitle: 'FMCG Balanced Scorecard',
            Image: bannerSlide,
            desc:"Leverage our comprehensive FMCG Balanced Scorecard software equipped with advanced KPI dashboards to enhance operational efficiency, monitor Key Performance Indicators (KPIs), and improve retail management for sustainable growth. Stay agile in a competitive market by transforming data into actionable insights. "
          
           
        
      },
      StickyScrollContentTitle:{
        title: 'Transforming Retail Challenges into Opportunities: Why Data Point is Your Smartest Solution? ',
        content: "The Data Point Balanced Scorecard framework is the ultimate strategic management tool for the FMCG and retail industries, empowering organisations to align their objectives with Key Performance Indicators (KPIs) that drive performance and sustainable growth. "
      },
    StickyScrollContent:[
        {
          title: "KPI Software  ",
          description:
            "Data Point allows retailers to effortlessly track and analyse KPIs such as Sales Revenue, Inventory Turnover, Gross Margin Return on Investment (GMROI), and Customer Satisfaction Score (CSAT). By ensuring alignment with strategic goals, this software enhances operational efficiency and informs data-driven decision-making. ",
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
          title: "Strategic Alignment ",
          description:
            "Align your operational goals with your strategic vision by breaking them into actionable objectives. Ensure that every team member is focused on achieving the same organisational goals, fostering a collaborative environment. Key metrics to consider include Market Share Growth, Net Promoter Score (NPS), and Customer Retention Rate. ",
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
          title: "Operational Efficiency  ",
          description:
            "Optimise retail processes by integrating Lean management tools to minimise waste and streamline operations. Metrics such as Order Fulfillment Rate, Supply Chain Cycle Time, and Shrinkage Rate will drive significant improvements in productivity and overall performance, making your business more agile in a competitive landscape. ",
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
          title: "Quality and Customer Satisfaction ",
          description:
            "Enhance product quality and customer satisfaction through targeted KPIs like Product Defect Rate, On-Time Delivery, and Customer Effort Score (CES). Focusing on these metrics ensures your organisation remains competitive and responsive to customer needs, fostering loyalty and driving growth. ",
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
          title: "Reduction in Stockouts ",
          number: "42",
        },
        {
          title: "Annual Cost Savings ",
          number: "23",
        },
        {
          title: " Customer Satisfaction Improvement ",
          number: "12",
        },
      ],
      cardSectionTitle :{
            title: "How Do FMCG and Retail Companies use Balanced Scorecards to optimise Performance? "
      },
      cardData:[
        {
          title: "Optimise Sales and Performance ",
          icon: ExecuteStrategies,
          content:
            "Analyse, evaluate and visualise different KPIs in dynamic dashboards. Maximise sales and other processes' performance by continuously monitoring various KPIs. Achieve growth by executing proper sales culture. ",
        },
        {
          title: "Identify Customer Trends ",
          icon: strategicplan,
          content:
            "See customer trends, foresee and predict future trends. Make most of Digital Balanced Scorecard analytics to assess industry behaviour and plan accordingly. Analyse metrics and implement ways to improve customer experience. ",
        },
        {
          title: "Maximise Profitability",
          icon: datainsights,
          content:
            "Determine what adds value and what does not. Set separate KPIs to monitor processes. Track and evaluate KPIs regularly and analyse their performance. Initiate action plans to increase efficiency and maximise profitability. ",
        },
        {
          title: "Increase Efficiency ",
          icon: productionandsales,
          content:
            "Maximise efficiency of all processes within the organisation. Align organisational goals from top to bottom level. Monitor how well teams are performing, to achieve the set organisational goals. ",
        },       
        {
          title: "Dynamic Reports  ",
          icon: productionandsales,
          content:
            "Get precise and detailed reports on finance, customer, internal process and learning and growth. Compare and contrast with multiple reports and implement actions for further improvement.",
        },       
      ],
      formContents: {
        title:"Start your journey towards enhanced Retail Performance  ",
        desc:"Strategically align your Goals with the Digital Balanced Scorecard "
      },
      accordionItems:[
        {
          title: "What is a Balanced Scorecard, and how does it benefit FMCG and retail companies? ",
          content:
            "A Balanced Scorecard is a strategic management tool that helps organisations align the activities to their vision and strategy. It benefits FMCG and retail companies by providing a framework for tracking performance metrics across financial, customer, internal processes, and learning and growth perspectives, enabling data-driven decision-making. ",
        },
        {
          title: "What KPIs should FMCG and retail businesses track using the Balanced Scorecard? ",
          content:
            "FMCG and retail businesses should track KPIs such as sales revenue, inventory turnover, Customer Satisfaction Score (CSAT), Gross Margin Return On Investment (GMROI), and order fulfillment rate to monitor performance and drive continuous improvement. ",
        },
        {
          title:
            "Is it easy to implement a Balanced Scorecard in an FMCG or retail organisation?",
          content:
            "Yes, implementing a Balanced Scorecard can be streamlined with the right tools and frameworks. Data Point Digital Balanced Scorecard solution provides templates and guidance to facilitate the implementation process and ensure alignment with strategic goals. ",
        },
        {
          title: "Can I customise the Balanced Scorecard to fit my specific retail business needs?",
          content:
            "Absolutely! Data Point Digital Balanced Scorecard allows for customization, enabling you to select the frameworks and KPIs that align best with your unique business objectives and operational challenges. ",
        },
      ]

    }


    export default fmcgData;




  


    