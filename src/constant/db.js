import Google from '../images/icon/gg.png';
import Facebook from '../images/icon/fb.png';
import Instagram from '../images/icon/ig.png';

export default {
  salonName: 'Pho Queen',
  phone: '(345) 457-7057',
  address: {
    street: '9555 Spring Green Blvd, Suite E,',
    city: 'Katy',
    state: 'TX 77494',
    directionLink: 'https://maps.app.goo.gl/ipjTzsYZHuZcpETR7',
  },
  hours: [
    { dates: 'mon - sat', time: '11:00am - 9:00pm' },
    // {dates: "saturday", time: "9:30am - 7:30pm"},
    { dates: 'sat- sunday', time: '11:00pm - 9:00pm' },
  ],
  booking: '',
  map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13862.646764696341!2d-95.8145769!3d29.7005866!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864123904a9aeb33%3A0x1e6cfe18cfb73567!2sPho%20Queen!5e0!3m2!1sen!2sus!4v1695807361523!5m2!1sen!2sus",
  banner: {
    bannerTitle: 'Welcome to Pho Queen',
    bannerContent: 'We serve authentic Vietnamese dishes',
  },
  values: [
    {
      title: 'We have the best therapies',
      content:
        'Pho Queen promotes comfort, beauty, well-being, and health',
    },
    {
      title: 'Our Customers are happy',
      content:
        'We use ONLY the most trusted brands in the beauty industry. Our world-class products, services, and top technologies.',
    },
    {
      title: 'Highly qualified staff',
      content:
        ' Our staff was trained to follow a proper sanitization protocol that puts our customer’s cleanliness as the number one priority.',
    },
  ],
  facebook: {
    name: 'facebook.com/rivieranailspa.hoover',
    messenger: 'https://m.me/rivieranailspa.hoover',
  },
  social: [
    {
      name: '',
      icon: Facebook,
      link: 'https://www.facebook.com/',
    },
    {
      name: '',
      icon: Instagram,
      link: 'https://www.instagram.com/',
    },
    { name: '', icon: Google, link: 'https://maps.app.goo.gl/ipjTzsYZHuZcpETR7' },
  ],
  about: [
    {
      id: '1',
      content:'We built our spa salon by going above and beyond for each and everyone of our clients'
    },
    {
      id: '2',
      content: 'We are committed to help you capture the tranquility of serenity and dedicated to the enhancement of your natural beauty. We are working everyday to better meet your needs and see real beauty from your perspective.'
    },
    {
      id: '3',
      content: 'We offer a service that is different from others be the salon to provide 100% sanitary service. We committed to bring real Cleanliness, freshness and delights for extraordinary spa experience.'

    },
  ],
};
