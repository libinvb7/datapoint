import Accordion from '@/components/industries/Accordion';

const AccordionSection = () => {
    const accordionItems = [
        { title: 'What is the Balance Scorecard for a manufacturing company?', content: 'A Balanced Scorecard provides a framework for aligning business activities to the vision and strategy of the organisation, enhancing performance and decision-making in the manufacturing sector.' },
        { title: 'How can customise Data Point for my manufacturing processes?', content: 'Data Point offers flexible options for customising KPIs and metrics that align with the specific challenges and goals of your manufacturing operations. This ensures that your Balanced Scorecard is effectively designed to enhance performance and drive strategic success.' },
        { title: "How does Data Point's Balanced Scorecard software improve operational efficiency?", content: 'Data Point offers flexible options for customising KPIs and metrics that align with the specific challenges and goals of your manufacturing operations. This ensures that your Balanced Scorecard is effectively designed to enhance performance and drive strategic success.' },
        { title: 'What kind of support does Data Point offer after implementation?', content: 'Data Point offers flexible options for customising KPIs and metrics that align with the specific challenges and goals of your manufacturing operations. This ensures that your Balanced Scorecard is effectively designed to enhance performance and drive strategic success.' },
        
      ];
  return (
    <section className="mt-20">
      <div className="container ">
      <div className="flex justify-center items-center">
          <h2 className="text-primary mb-10 lg:max-w-[600px]">
          Your Questions, Answered!

          </h2>
        </div>
  <Accordion items={accordionItems} />
        </div>
    </section>
  )
}

export default AccordionSection