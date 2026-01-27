export interface ContactDetails {
  phone: string;
  phoneDisplay: string;
  email: string;
  address: string;
  maps: {
    embedUrl: string;
    link: string;
  };
  whatsapp: {
    number: string;
    message: string;
    url: string;
  };
  social?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}

export const contactDetails: ContactDetails = {
  phone: '+971568977404',
  phoneDisplay: '+971 56 897 7404',
  email: 'vpsgentrading@gmail.com',
  address: 'Shams Business Center, Sharjah Media City Free Zone',
  maps: {
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.778779229271!2d55.67679217523766!3d25.278026177659083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef59333cdc4230d%3A0x619b40557215b586!2sShams%20Free%20Zone%20(Business%20Center)!5e0!3m2!1sen!2sin!4v1769463315866!5m2!1sen!2sin',
    link: 'https://maps.google.com/?q=Shams+Business+Center,+Sharjah+Media+City+Free+Zone'
  },
  whatsapp: {
    number: '971568977404',
    message: 'Hello, I would like to inquire about your products.',
    url: 'https://wa.me/971568977404?text=Hello,%20I%20would%20like%20to%20inquire%20about%20your%20products.'
  },
  social: {
    facebook: 'https://www.facebook.com/vpsgentrading',
    instagram: 'https://www.instagram.com/vpsgentrading',
    twitter: 'https://www.twitter.com/vpsgentrading'
  }
};
