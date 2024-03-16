import emailjs from '@emailjs/browser';

const sendCustomEmail = (details) => {
  emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
  emailjs
    .send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      {
        email: details.email,
        name: details.name,
        message: details.message,
      }
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { sendCustomEmail };
