import HomePage from "@components/home/home";
import AboutPage from "@components/home/about";
import ServicePage from "@components/home/service";
import ExperiencePage from "@components/home/experience"
import SkillsPage from "@components/home/skills";

function index() {
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
