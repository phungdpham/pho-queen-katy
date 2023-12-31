import GoogleMap from '../src/components/common/googleMap';
import HeaderBanner from '../src/components/common/headerBanner';
import ContactUs from '../src/components/ContactUs';
import Layout from '../src/components/layout';
import aboutBanner from "../src/images/homeBanner.jpg"


function Contact() {
  return (
    <Layout>
      <main>
        <HeaderBanner title="Our Location" pageBanner={aboutBanner} />
        <ContactUs />
        {/* <GoogleMap /> */}
      </main>
    </Layout>
  );
}

export default Contact;
