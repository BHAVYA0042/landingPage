import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  iconStyle: {
    minWidth: 100,
    minHeight: 100
  }
});

function MuiIcon(props) {
  const styles = useStyles();

  const StatusImage = props.statusImage;

  return (
    <div>
      <StatusImage className={styles.iconStyle} />
    </div>
  );
}

MuiIcon.propTypes = {
  statusImage: PropTypes.elementType
};

export default MuiIcon;
