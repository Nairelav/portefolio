import classes from "@styles/home/about.module.scss";
import Image from "next/image";

function index() {
  return (
    <section className={`u-next-section ${classes.about}`}>
      <div className={classes.about__title}>
        <h3 className={classes.about__title_inner}>A propos de moi et de moi-même </h3>
      </div>
      <div className={classes.about__content}>
        <Image className={classes.home__logo} src="/images/logo.png" width={600} height={450} />
        <div className={classes.about__info}>
          <p className={classes.about__paragraphe}>
            Je suis passionné par la conception de sites Web. Autodidacte durant mes heures perdu me permet d'être polyvalent et adaptable aux tâches qui me
            sont confiées. Mon objectif est d'améliorer le Web en concevant de superbes expériences.
          </p>
          <div className={classes.about__desc}>
            <div>
              <span>Résidence : </span> France
            </div>
            <div>
              <span>Adresse : </span>Région Rouennaise
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
