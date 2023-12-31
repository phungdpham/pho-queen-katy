import Head from 'next/head';
import Footer from '../footer';
import Header from '../header';
import { motion } from 'framer-motion';
import MobileButton from '../common/mobileBtn';
import AppointmentBtn from '../common/appointmentBtn';

function Layout({ children, homePage }) {
  return (
    <>
      {/* <Head>
        <title>Palazzio Nail Lounge</title>
        <meta name="nail salon" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <Header homePage={homePage} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="min-h-screen  bg-gradient-to-r from-zinc-900 to-zinc-800">{children}</div>
      </motion.div>
      {/* <AppointmentBtn /> */}
      {/* <MobileButton /> */}
      <Footer />
    </>
  );
}

export default Layout;
