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
      <div className="flex justify-around items-start gap-4">
        <div className="flex flex-col gap-4">
          <img src={enest} alt="enest" />
          <h3>Contact with us</h3>
          <h2>Email</h2>
          <h2>Talk to A Counsellor</h2>
        </div>
        <div className="flex flex-col gap-4">
          <h3>Quick Links</h3>
          <ul className="flex flex-col gap-4">
            <li>Program</li>
            <li>Test Series</li>
            <li>Skill Connect</li>
            <li>Expert Connect</li>
            <li>Study Abroad</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3>Company</h3>
          <ul className="flex flex-col gap-4">
            <li>About us</li>
            <li>Why choose us</li>
            <li>Policies</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3>Security</h3>
          <ul className="flex flex-col gap-4">
            <li>Report</li>
            <li>Trademark Notice</li>
            <li>Advertise with us</li>
            <li>Hwlp & Support</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3>Incubated by</h3>
          <img src={msme} alt="msme" />
          <img src={iima} alt="iima" />
        </div>
      </div>

      <div className="flex justify-around items-center my-10">
        <div className="flex flex-col gap-3 items-start">
          <p>Address</p>
          <p className="flex items-center justify-center gap-2"><span><img src={map} alt="map" /></span>Address link</p>
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
