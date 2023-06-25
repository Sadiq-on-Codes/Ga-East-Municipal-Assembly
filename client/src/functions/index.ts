//Send Email function

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
    if (!imageURL?.startsWith('https')) {
      return `https://gema-gh-6b3bf99ee2e9.herokuapp.com/uploads/${imageURL}`;
    } 
    return imageURL;
  };