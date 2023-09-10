import router from "@/router";
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
<<<<<<< HEAD
    return  `https://gema-app.onrender.com/uploads/${imageURL}`;
=======
    // if (!imageURL?.startsWith('https://gema.gov.gh/images/')) {
    //   return `https://gema-gh-6b3bf99ee2e9.herokuapp.com/uploads/${imageURL}`;
    // } 
    return  `https://gema.gov.gh/images/${imageURL}`;
>>>>>>> e1134158e52fbe86769e9c19fbaf40cf6f90fb35
  };

  export const isRouteActive = (routePath: string) => {
    return router.currentRoute.value.path === routePath;
  };
