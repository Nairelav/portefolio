import classes from "@styles/home/home.module.scss";
import logoClasses from "@styles/ui/logo.module.scss";

function LogoPage() {
  return (
    <section className={`reveal active ${classes.home} full-section u-next-section`}>
      <div className={logoClasses.logo}>
        <div className={logoClasses.logo__content}>
          <span className={logoClasses.logo__item}></span>
          <p>
            <span>BUQUET</span> Valérian
          </p>
        </div>
      </div>

      <div className={classes.home__text}>
        <h3>
          Bonjour, <span className={classes.home__author}>BUQUET Valérian</span>, développeur Full-stack et UX/UI Designer.
        </h3>
      </div>
    </section>
  );
}

export default LogoPage;
