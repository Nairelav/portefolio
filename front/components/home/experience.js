import ExperienceTile from "@components/ui/tiles/experience";
import ServiceTile from "@components/ui/tiles/service";
import classes from "@styles/home/experience.module.scss";

function ExperiencePage() {
  const experiences = [
    {
      date: "September 2018 - Decembre 2021",
      title: "Groupe FrameIP",
      subTitle: "Alternant - Ingénieur Logiciel",
      desc: "Conception et développement d'application web à destination du Groupe",
    },
    {
      date: "Février-Mai 2018",
      title: "Neomah Buissness School",
      subTitle: "Stage - Développeur",
      desc: "Conception et développement d'une applicaiton mobile",
    },
    {
      date: "Janvier - Février 2016",
      title: "Logicom Informatique",
      subTitle: "Stage - Développeur",
      desc: "Développement de module pour l'outil interne",
    },
    {
      date: "Janvier - Février 2015",
      title: "Hôpital Gisors",
      subTitle: "Stage - Développeur",
      desc: "Développement d'un blog pour l'association interne",
    },
  ];

  const diplomes = [
    {
      date: "2020/2021",
      title: "CESI",
      subTitle: "Manager en système d'Information (Bac +5)",
      desc: "Formation",
    },
    {
      date: "2018/2020",
      title: "CESI",
      subTitle: "Responsable Ingénieur Logiciel (Bac +4)",
      desc: "Formation",
    },
    {
      date: "Janvier - Février 2016",
      title: "La chataigneraie",
      subTitle: "BTS SIO (Services aux Organisations)",
      desc: "Formation",
    }
  ];


  return (
    <section className={`reveal u-next-section ${classes.experiences}`}>
      <div className={classes.experiences__content}>
        <div>
          <h4 className={classes.experiences__column}>Expériences</h4>
          {experiences.map(({ date, title, subTitle, desc }, index) => (
            <ExperienceTile key={`pro-${index}`} title={title} description={desc} subTitle={subTitle} date={date} titleColumn="Expérience" />
          ))}
        </div>
        <div>
          <h4 className={classes.experiences__column}>Dîplomes</h4>
          {diplomes.map(({ date, title, subTitle, desc }, index) => (
            <ExperienceTile key={`pro-${index}`} title={title} description={desc} subTitle={subTitle} date={date} titleColumn="Dîplome" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperiencePage;
