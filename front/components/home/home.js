import classes from "@styles/home/home.module.scss";
import Image from "next/image";

function LogoPage() {
  return (
    <section className={`${classes.home} full-section u-next-section`}>
      <Image className={classes.home__logo} src="/images/logo.png" width={800} height={650} />
      <div className={classes.home__text}>
        <h3>Bonjour, je suis <span className={classes.home__author}>Valérian BUQUET</span>, Développeur Full-stack et UX/UI Designer.</h3>
      </div>
    </section>
  );
}

export default LogoPage;
