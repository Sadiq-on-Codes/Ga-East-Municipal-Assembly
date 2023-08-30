//Send Email function

import router from "@/router";

// export const sendEmail = () => {
//       window.location.href = `mailto:${email.value}?subject=${subject.value}&body=${body.value}`;
//     };

//Back to top Function
export const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  export const decodeEntities = (data: string) => {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = data;
    return textarea.value ? textarea.value : '';
  }

  export const appendBaseURL = (imageURL: string): string => {
    if (!imageURL?.startsWith('https://gema.gov.gh')) {
      return `https://gema-gh-6b3bf99ee2e9.herokuapp.com/uploads/${imageURL}`;
    } 
    return imageURL;
  };

  export const isRouteActive = (routePath: string) => {
    return router.currentRoute.value.path === routePath;
  };