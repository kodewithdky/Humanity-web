import Layout from "../layout/Layout";
import ImageCard from "../components/ImageCard";
import societyCertificate from "../../src/assets/certificates/society_certificate.jpg";
import twelve_a from "../../src/assets/certificates/12A_certificate_page.jpg";
import eight_g from "../../src/assets/certificates/80G_certificate_pag.jpg";

const Certificate = () => {
  return (
    <Layout>
      <section className="py-12 sm:py-12 lg:py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl xl:text-5xl mb-6">
              Our goverment verified certificates!
            </h2>
            <p className="mb-4">
              We are creating a tool that helps you be more productive and
              efficient when building websites and webapps
            </p>
          </div>
          <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
            {/*  */}
            <ImageCard image={societyCertificate} />
            <ImageCard image={twelve_a} />
            <ImageCard image={eight_g} />
            {/*  */}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Certificate;
