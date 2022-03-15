import classes from "@styles/home/skills.module.scss";
import { CssIcon, HtmlIcon, JavascriptIcon, NodeJsIcon, PhpIcon, ReactJsIcon, VueJsIcon } from "@components/ui/svg";

const SkillsPage = () => {
  return (
    <section className={`reveal u-next-section ${classes.skills}`}>
      <h4 className={classes.skills__title}>Compétences</h4>
      <div className={classes.skills__items}>
        <div className={classes.skills__item}>
          <HtmlIcon className={classes.skills__icon} />
          <div className={classes.skill__title}>HTML</div>
        </div>
        <div className={classes.skills__item}>
          <CssIcon className={classes.skills__icon} />
          <div className={classes.skill__title}>CSS/SCSS</div>
        </div>
        <div className={classes.skills__item}>
          <PhpIcon className={classes.skills__icon} />
          <div className={classes.skill__title}>PHP</div>
        </div>
        <div className={classes.skills__item}>
          <JavascriptIcon className={classes.skills__icon} />
          <div className={classes.skill__title}>Javascript</div>
        </div>
        <div className={classes.skills__item}>
          <VueJsIcon className={classes.skills__icon} />
          <div className={classes.skill__title}>Vue.js</div>
        </div>
        <div className={classes.skills__item}>
          <ReactJsIcon className={classes.skills__icon} />
          <div className={classes.skill__title}>React.js</div>
        </div>
        <div className={classes.skills__item}>
          <NodeJsIcon className={classes.skills__icon} />
          <div className={classes.skill__title}>NodeJS</div>
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
