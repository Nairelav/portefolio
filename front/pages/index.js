import HomePage from "@components/home/home";
import AboutPage from "@components/home/about";
import ServicePage from "@components/home/service";
import ExperiencePage from "@components/home/experience";
import SkillsPage from "@components/home/skills";
import { useEffect } from "react";

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

function index() {
  useEffect(() => {
    window.addEventListener("scroll", reveal);
  }, []);

  return (
    <>
      <HomePage />
      <AboutPage />
      <ServicePage />
      <ExperiencePage />
      <SkillsPage />
    </>
  );
}

export default index;
