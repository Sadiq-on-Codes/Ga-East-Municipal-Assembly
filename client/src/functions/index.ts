import router from "@/router";
import { imagesUrl } from "./endpoint";

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
  return `${imagesUrl}/uploads/${imageURL}`;
};

export const isRouteActive = (routePath: string) => {
  return router.currentRoute.value.path === routePath;
};
