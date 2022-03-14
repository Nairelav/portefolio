import classes from "@styles/ui/tiles/experience.module.scss";

const ExperienceTile = (props) => {
  const { title, description, subTitle, date, titleColumn } = props;

  return (
    <div className={classes.experience}>
      <h6 className={classes.experience__date}>{date}</h6>
      <h4 className={`heading-4 heading-4--dark ${classes.experience__title}`}>{title}</h4>
      <h5 className={`heading-4 heading-4--dark ${classes.experience__title} ${classes.experience__subtitle}`}>{subTitle}</h5>
      <p className={classes.experience__text}>{description}</p>
    </div>
  );
};

export default ExperienceTile;
