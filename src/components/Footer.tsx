import appstore from "../assets/appstore.png";
import gplay from "../assets/gplay.png";
import insta from "../assets/insta.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import utube from "../assets/utube.svg";
import enest from "../assets/Enest.png";
import msme from "../assets/msme.png";
import iima from "../assets/iima.svg";
import map from "../assets/map.svg";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-8 py-10 px-16 ">
        <div className="flex flex-col gap-4">
          <img src={enest} alt="enest" className="w-24 md:w-32" />
          <h3 className="font-semibold">Contact with us</h3>
          <h2 className="text-sm md:text-base">Email</h2>
          <h2 className="text-sm md:text-base">Talk to A Counsellor</h2>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            {[
              "Program",
              "Test Series",
              "Skill Connect",
              "Expert Connect",
              "Study Abroad",
            ].map((link) => (
              <li key={link} className="text-sm md:text-base">
                {link}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold">Company</h3>
          <ul className="flex flex-col gap-2">
            {["About us", "Why choose us", "Policies", "Privacy Policy"].map(
              (link) => (
                <li key={link} className="text-sm md:text-base">
                  {link}
                </li>
              )
            )}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold">Security</h3>
          <ul className="flex flex-col gap-2">
            {[
              "Report",
              "Trademark Notice",
              "Advertise with us",
              "Help & Support",
            ].map((link) => (
              <li key={link} className="text-sm md:text-base">
                {link}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold">Incubated by</h3>
          <img src={msme} alt="msme" className="w-24 md:w-32" />
          <img src={iima} alt="iima" className="w-24 md:w-32" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-around items-center my-10 gap-4">
        <div className="flex flex-col gap-3 items-start">
          <p>Address</p>
          <p className="flex items-center justify-center gap-2">
            <span>
              <img src={map} alt="map" />
            </span>
            Address link
          </p>
        </div>
        <div className="flex gap-4">
          <img src={gplay} alt="playstore" />
          <img src={appstore} alt="appstore" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <p>Lets get social:</p>
          <div className="flex gap-2">
            <img src={insta} alt="insta" />
            <img src={utube} alt="utube" />
            <img src={twitter} alt="twitter" />
            <img src={linkedin} alt="linkedin" />
          </div>
        </div>
      </div>
      <div className="h-16 bg-[#3A1757] flex justify-center items-center text-white">
        <h3>Copyrights © AgriVision4U Pvt. Ltd. 2024</h3>
      </div>
    </div>
  );
};

export default Footer;
