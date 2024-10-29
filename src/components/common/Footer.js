import Image from "next/image";
import Datapoint from "/public/assets/images/Datapoint_logo.png";
import lts from "/public/assets/images/lts-logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="footer-bg pt-[300px]">
      <div className="container">
        <div className="flex flex-wrap justify-center relative top-50">
          <div className="  w-full md:w-1/5 flex flex-col justify-center ">
            <div className="py-2">
              <Link href="/">
                <Image
                  src={Datapoint}
                  className="bg-white rounded-lg p-2"
                  alt="data point logo"
                  width={150}
                  height={50}
                />
              </Link>
              <Link href="/">
                <Image
                  src={lts}
                  className="pt-3"
                  alt="data point logo"
                  width={150}
                  height={50}
                />
              </Link>
            </div>
            <div className="py-2">
              <h3 className="text-white ">
                Powered by
                <span className="block font-bold">
                  Lean transition Solutions
                </span>
              </h3>
            </div>
            <div className="py-2">
              <h3 className="text-white font-bold ">Contact Us</h3>
              <p className="text-white">
                The Old Vicarage, Pershore Road, Upton Snodsbury, Worcester,
                Worcestershire, WR7 4NR, United Kingdom.
              </p>
            </div>
          </div>
          <div className="  w-full md:w-4/5 ">
            <div className="flex px-5">
              <div className="w-1/5">
                <div className="py-2">
                  <h3 className="text-white font-bold ">Contact Us</h3>
                </div>
                <Link href="/" className="text-white block py-2">
                  Interactive Dashboards
                </Link>
                <Link href="/" className="text-white block py-2">
                  Keep Track of KPIs
                </Link>
                <Link href="/" className="text-white block py-2">
                  Mobility & Global Accessibility
                </Link>
                <Link href="/" className="text-white block py-2">
                  Dynamic Report
                </Link>
                <Link href="/" className="text-white block py-2">
                  MES & ERP Integration
                </Link>
                <Link href="/" className="text-white block py-2">
                  Hoshin Kanri X Matrix
                </Link>
                <Link href="/" className="text-white block py-2">
                  SMART KPIS
                </Link>
                <Link href="/" className="text-white block py-2">
                  Project Tracker
                </Link>
                <Link href="/" className="text-white block py-2">
                  Advanced Features
                </Link>
              </div>
              <div className="w-1/5">
                <div className="py-2">
                  <h3 className="text-white font-bold ">Solutions</h3>
                </div>
                <Link href="/" className="text-white block py-2">
                  SQCDP
                </Link>
                <Link href="/" className="text-white block py-2">
                  SQCPL
                </Link>
                <Link href="/" className="text-white block py-2">
                  SQDCPS
                </Link>
                <Link href="/" className="text-white block py-2">
                  ESQDCP
                </Link>
                <Link href="/" className="text-white block py-2">
                  SQDCL
                </Link>
                <Link href="/" className="text-white block py-2">
                  SQDCPSI
                </Link>
                <Link href="/" className="text-white block py-2">
                  EQDCPS
                </Link>
                <Link href="/" className="text-white block py-2">
                  SheQCPLDCPS
                </Link>
                <Link href="/" className="text-white block py-2">
                  FCIL
                </Link>
              </div>
              <div className="w-1/5">
                <div className="py-2">
                  <h3 className="text-white font-bold ">Industries</h3>
                </div>
                <Link href="/" className="text-white block py-2">
                  Manufacturing
                </Link>
                <Link href="/" className="text-white block py-2">
                  Automotive
                </Link>
                <Link href="/" className="text-white block py-2">
                  Healthcare
                </Link>
                <Link href="/" className="text-white block py-2">
                  Energy
                </Link>
                <Link href="/" className="text-white block py-2">
                  Electronics
                </Link>
                <Link href="/" className="text-white block py-2">
                  FMCG & Retail
                </Link>
                <Link href="/" className="text-white block py-2">
                  Banking
                </Link>
              </div>
              <div className="w-1/5">
                <div className="py-2">
                  <h3 className="text-white font-bold ">Resources</h3>
                </div>
                <Link href="/" className="text-white block py-2">BSC Blogs</Link>
                <Link href="/" className="text-white block py-2">BSC History</Link>
                <Link href="/" className="text-white block py-2">BSC FAQ</Link>
                <Link href="/" className="text-white block py-2">BSC Videos</Link>
                <Link href="/" className="text-white block py-2">BSC Case Studies</Link>
                <Link href="/" className="text-white block py-2">BSC Resource Hub</Link>
                
              </div>
              <div className="w-1/5">
                <h2 className="text-white text-3xl font-bold">
                  Let's talk about your<br></br>project.
                  <div>
                  <button className='btn mt-3'>Get a Demo</button>

                  </div>
                </h2>
              </div>
            </div>
            <div className="flex">
                
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
