import GoogleMap from '../src/components/common/googleMap';
import HeaderBanner from '../src/components/common/headerBanner';
import Layout from '../src/components/layout';
import LocationBanner from "../src/images/menuBanner.jpeg"

function Location() {
  return (
    <Layout>
      <main>
        <HeaderBanner
        title="Our Location" 
        content="9417 Katy Freeway, Houston, TX 77024" 
        pageBanner={LocationBanner}
        />
        <GoogleMap />
      </main>
    </Layout>
  );
}

export default Location;
