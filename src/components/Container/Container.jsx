import PropTypes from "prop-types";

const styles = {
  container: {
    paddingTop: 0,
    paddingRight: 40,
    paddingBottom: 0,
    paddingLeft: 40,
  },
};

export default function Container({ children }) {
  return <div className={styles.container}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node,
};
