import classes from "@styles/ui/tiles/service.module.scss";
import { PencilIcon, CodeIcon, GroupIcon } from "@components/ui/svg";

const ServiceTile = (props) => {
  const { title, description, icon } = props;

  return (
    <div className={classes.service}>
      {icon === "code" && <CodeIcon />}
      {icon === "pencil" && <PencilIcon />}
      {icon === "group" && <GroupIcon />}
      <h4 className={`heading-4 heading-4--dark ${classes.service__title}`}>{title}</h4>
      <p className={classes.service__text}>{description}</p>
    </div>
  );
};

export default ServiceTile;
