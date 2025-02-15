import Image from "next/image";
import integrations from "/public/assets/images/manufacturing/M3_integrations_all_integrations.png";

const CtaTwo = () => {
  return (
    <section className="mt-20">
      <div className="container">
        <div className="glass-bg p-5">
          <div className="flex justify-center items-center gap-10 flex-col  md:flex-row">
            <div className="w-full w-1/2 p-5">
              <Image src={integrations} />
            </div>
            <div className="w-full w-1/2">
              <h2 className="text-primary text-left py-5 text-5xl">
                Hassle free Data Point integrations
              </h2>
              <p className="text-xl">
                Connect Data Point to essential business tools, integrating ERP
                systems, project management software, and more to unify
                performance tracking seamlessly.
              </p>
              <button className="btn btn-primary my-5">Discover More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaTwo;
