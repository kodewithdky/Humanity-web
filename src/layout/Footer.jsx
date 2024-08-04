import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoHome, IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import logo from "../assets/logo/nhws-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-zinc-50 text-center text-surface/75 dark:bg-neutral-700 dark:text-white/75 lg:text-left">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-white/10 lg:justify-between">
        <div className="me-12 hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div className="flex justify-center">
          <Link
            to="https://www.facebook.com/profile.php?id=61550911495716&mibextid=avESrC"
            className="me-6"
            target="_blank"
          >
            <FaFacebookF />
          </Link>
          <Link
            to="https://twitter.com/NamskarHumanity?s=08"
            className="me-6 "
            target="_blank"
          >
            <FaXTwitter />
          </Link>
          <Link
            to="https://www.youtube.com/channel/UC6N0h0YRexgJKT38IRbYUvw"
            className="me-6"
            target="_blank"
          >
            <FaYoutube />
          </Link>
          <Link
            to="https://www.instagram.com/namaskarhumanity/"
            className="me-6"
            target="_blank"
          >
            <FaInstagram />
          </Link>
          <Link
            to="https://www.linkedin.com/company/101342918/admin/feed/posts/"
            className="me-6"
            target="_blank"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            to="https://whatsapp.com/channel/0029VaAnhuGGE56oOK8q5h24"
            className=""
            target="_blank"
          >
            <FaWhatsapp />
          </Link>
        </div>
      </div>
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <span className="me-3">
                <img src={logo} alt="logo" height="50" width="50" />
              </span>
              Namaskar Humanity
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Services
            </h6>
            <p className="mb-4">
              <Link to="#">To create a world</Link>
            </p>
            <p className="mb-4">
              <Link to="#"> Food & Shelter</Link>
            </p>
            <p className="mb-4">
              <Link to="#">Helth</Link>
            </p>
            <p>
              <Link to="#">Other</Link>
            </p>
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Help me
            </h6>
            <p className="mb-4">
              <Link to="#">Work with me</Link>
            </p>
            <p className="mb-4">
              <Link to="#">Inform me</Link>
            </p>
            <p className="mb-4">
              <Link to="#">Donate</Link>
            </p>
            <p>
              <Link to="#">Help</Link>
            </p>
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <span className="me-3">
                <IoHome />
              </span>
              RBL Ratapur, 229316
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <span className="me-3">
                <MdEmail />
              </span>
              help@humanity.org
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <span className="me-3">
                <IoCall />
              </span>
              +91 8953273123
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <span className="me-3">
                <IoCall />
              </span>
              +91 8953283123
            </p>
          </div>
        </div>
      </div>
      {/*Copyright section*/}
      <div className="bg-black/5 p-6 text-center">
        <span>&copy; 2024 Copyright:&nbsp;</span>
        <Link className="font-semibold" to="https://tw-elements.com/">
          Namaskar Humanity
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
