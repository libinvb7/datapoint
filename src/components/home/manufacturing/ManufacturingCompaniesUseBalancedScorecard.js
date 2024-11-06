import ExecuteStrategies from "/public/assets/images/manufacturing/execute-strategies.png";
import strategicplan from "/public/assets/images/manufacturing/strategic-plan.png";
import datainsights from "/public/assets/images/manufacturing/data-insights.png";
import productionandsales from "/public/assets/images/manufacturing/productionandsales.png";
import customer from "/public/assets/images/manufacturing/customer.png";
import digitalreports from "/public/assets/images/manufacturing/digital-reports.png";
import IndustryCard from "@/components/industries/IndustryCard";



const cardData=[
  {
      "title": "Achieve strategic planning",
      "icon":ExecuteStrategies,
      "content":"Data Point enhances organisational performance by aligning KPIs with strategic objectives across various levels, fostering a high-performance culture",
  },
  {
      "title": "Execute strategies effectively",
      "icon":strategicplan,
      "content": "Implement and assess your initiatives using the Digital Balanced Scorecard to ensure alignment with strategic goals.",
  },
  {
      "title": "Transform data into insights",
      "icon":datainsights,
      "content": "Analyse departmental data effortlessly to gain valuable insights with automated reports, ensuring you stay on top of your KPIs.",
  },
  {
      "title": "Optimise production and sales",
      "icon":productionandsales,
      "content": "Continuously monitor KPIs to enhance production planning and sales, enabling organizations to anticipate demand and fulfill it promptly.",
  },
  {
      "title": "Enhance customer satisfaction",
      "icon":customer,
      "content": "Visualise strategy maps and analyse KPIs to align processes with strategic goals, focusing on metrics like on-time delivery and quality that matter most to customers",
  },
  {
      "title": "Customisable digital reportsd",
      "icon":digitalreports,
      "content":"Access a variety of digital reports tailored to monitor overall performance, generating insights from real-time data.",
      
  }
]


const ManufacturingCompaniesUseBalancedScorecard = () => {
  return (
    <section className="px-6 industry-section pt-52 "  >
      
    <div className="container">
      <div className="flex justify-center items-center gap-10">
        <h2 className="text-primary text-[#fff] mb-10 lg:max-w-[700px]">
        How do manufacturing companies
        use balanced scorecards?
        </h2>
      </div>
      
      <div className="flex flex-wrap justify-center">
        {
          cardData.map((data,index)=>(
<div className="w-full lg:w-1/3 md:w-1/2 px-2 mb-4 flex justify-center items-center mb-16" key={index}>
  <IndustryCard data={data}/>
</div>

          ))
        }

</div>

        
     
    </div>
  </section>
  )
}

export default ManufacturingCompaniesUseBalancedScorecard