import Layout from "../layout/Layout";
import nine from "../../src/assets/wallpaper/9.jpg";
import education from "../../src/assets/wallpaper/1.jpg";
import awareness from "../../src/assets/wallpaper/11.jpg";
import helth from "../../src/assets/wallpaper/15.jpg";
import { Link } from "react-router-dom";
import { Carousel } from "flowbite-react";

const Home = () => {
  return (
    <Layout
      title={"Humanity -Home"}
      description={"This home page of Namaskar Humanity"}
      keywords={"help, educate, donate"}
    >
      <section>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel>
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
              alt="..."
            />
          </Carousel>
        </div>
      </section>
      <section>
        <div className="relative bg-gradient-to-r h-screen  overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={nine}
              alt="svg"
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
            <h2 className="text-5xl font-bold leading-tight mb-4 text-green-500">
              Welcome to Namskar Humanity
            </h2>
            <p className="text-lg text-white mb-8">
              Namaskar Humanity is an NGO dedicated to providing education and
              health services to underprivileged communities. Our website serves
              as a platform to spread awareness and connect individuals with our
              mission.
            </p>
            <p className="text-lg text-white mb-8">
              At Namaskar Humanity, we are on a mission to make a positive
              impact on people's lives by providing essential services in the
              areas of health, education, and awareness. Our dedicated team of
              volunteers and professionals is committed to creating a better
              world for all.
            </p>
            <Link
              to="/donate"
              className="bg-green-400 text-gray-900 hover:bg-blue-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="relative bg-gradient-to-r h-[50vh] overflow-hidden">
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
            <h2 className="text-5xl font-bold leading-tight mb-2">
              Our Vision
            </h2>
            <p className="text-lg mb-8 mx-2">
              Our vision is to build a society where every individual has access
              to quality healthcare, education, and the knowledge they need to
              lead healthier, more fulfilling lives. We believe that by
              empowering people with information and support, we can create a
              brighter future for generations to come.
            </p>
            <Link
              to="/donate"
              className="bg-green-400 text-gray-900 hover:bg-blue-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Education
            </h2>
            <p className="mb-8 leading-relaxed">
              Education is the key to unlocking opportunities and breaking the
              cycle of poverty. Namaskar Humanity is dedicated to promoting
              education by providing resources, scholarships, and support to
              students in need. We believe that education is a fundamental
              right, not a privilege.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={education}
            />
          </div>
        </div>
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 max-sm:hidden max-md:hidden ">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={awareness}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h2 className="title-font sm:text-4xl text-3xl mb-4 mx-4 font-medium text-gray-900">
              Awareness
            </h2>
            <p className="mb-8 leading-relaxed mx-4">
              Awareness is the first step towards change. We organize awareness
              campaigns on various social and environmental issues, such as
              hygiene, sanitation, climate change, and more. Our goal is to
              raise awareness and inspire action in our communities.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 lg:hidden md:hidden">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={awareness}
            />
          </div>
        </div>
        <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Healthcare
            </h2>
            <p className="mb-8 leading-relaxed">
              We are passionate about improving the overall health and
              well-being of communities. Through various health initiatives,
              medical camps, and awareness programs, we strive to ensure that
              everyone has access to healthcare services and information that
              can save lives.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={helth}
            />
          </div>
        </div>
      </section>
      <section></section>
      <section>
        <div className="relative bg-gradient-to-r h-[50vh] overflow-hidden">
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
            <h2 className="text-5xl font-bold leading-tight mb-2">
              Register to become volunteer
            </h2>
            <p className="text-lg mb-8">
              Are you ready to make a difference? Join us in our journey to
              create a better world. Together, we can make a positive impact on
              the lives of countless individuals.
            </p>
            <Link
              to="/register-as-volunteer"
              className="bg-green-400 text-gray-900 hover:bg-blue-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="relative bg-gradient-to-r h-[50vh] overflow-hidden">
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
            <h2 className="text-5xl font-bold leading-tight mb-2">
              Get Involved
            </h2>
            <p className="text-lg mb-8">
              Are you ready to make a difference? Join us in our journey to
              create a better world. Together, we can make a positive impact on
              the lives of countless individuals.
            </p>
            <Link
              to="/donate"
              className="bg-green-400 text-gray-900 hover:bg-blue-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
