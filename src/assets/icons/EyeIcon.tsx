import { FaEye } from "react-icons/fa";
import { useShowPasswordStore } from "../../store/slices/sliceShowPassword";

type EyeIconProps = {
  styles?: string;
};

const EyeIcon = ({ styles }: EyeIconProps) => {
  const { handleToggleShowPassword } = useShowPasswordStore();

  return <FaEye className={styles} onClick={handleToggleShowPassword} />;
};

export default EyeIcon;
