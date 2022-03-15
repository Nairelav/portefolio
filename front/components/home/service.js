import classes from "@styles/home/service.module.scss";
import ServiceTile from "@components/ui/tiles/service";

const service = () => {
  const services = [
    {
      title: "Web Development",
      desc: "Développement de fonctionnalités front-end et back-end pour améliorer, poursuivre ou convertir un projet web déjà existant.",
      icon: "code",
    },
    {
      title: "Ui Design",
      desc: "Réalisation complète d'une maquette et d'une charte graphique prête à l'emploi ou d'éléments spécifiques au sein d'un projet web, je communique à travers le graphisme une véritable identité.",
      icon: "pencil",
    },
    {
      title: "UX Design",
      desc: "Amélioration de l'expérience utilisateur en prenant en compte la diversité et les exigences à travers des méthodes de travail spécifiques.",
      icon: "group",
    },
  ];

  return (
    <section className={`reveal u-next-section ${classes.services}`}>
      <div className={classes.services__content}>
        <div className={classes.services__title}>
          <h4>Services</h4>
        </div>

        {services.map(({ title, desc, icon }, index) => (
          <ServiceTile key={index} title={title} icon={icon} description={desc} />
        ))}
      </div>
    </section>
  );
};

export default service;
