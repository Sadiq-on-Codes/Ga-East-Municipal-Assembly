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

  export function decodeEntities(data: string) {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = data;
    return textarea.value ? textarea.value : '';
  }