//Send Email function
const win: Window = window;
export const sendEmail = () => {
    win.location = "mailto:info@gema.gov.gh";
};

//Back to top Function
export const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };