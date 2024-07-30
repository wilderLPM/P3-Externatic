import PropTypes from "prop-types";

import avatarCompany from "../../assets/logo/avatarCompany.png";
import styles from "./AvatarCompany.module.css";

export default function AvatarCompany({ user }) {
  return (
    <div className="flex flex-col items-center md:pt-6">
      <img
        src={avatarCompany}
        alt="logo avatar red"
        className={styles.imgCompany}
      />
      <p className="mt-6">{user.name}</p>
    </div>
  );
}

AvatarCompany.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
