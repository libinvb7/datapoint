import TabsNew from './TabsNew'
import TabsSection from './TabsSection'

const FeatureSection = () => {
  return (
    <section className=" mt-20 px-6  "  >
      <div className="container">
        <div className="flex justify-center items-center gap-10">
          <h2 className="text-primary mb-10 lg:max-w-[700px]">
          See how Data Point unifies strategic
          insights across your organisation
          </h2>
        </div>
        
          {/* <TabsSection /> */}
          <TabsNew />
       
      </div>
    </section>
  )
}

export default FeatureSection