import { FaEyeSlash } from "react-icons/fa";
import { useShowPasswordStore } from "../../store/slices/sliceShowPassword";

type EyeSlashIconProps = {
  styles?: string;
};

const EyeSlashIcon = ({ styles }: EyeSlashIconProps) => {
  const { handleToggleShowPassword } = useShowPasswordStore();

  return <FaEyeSlash className={styles} onClick={handleToggleShowPassword} />;
};

export default EyeSlashIcon;
