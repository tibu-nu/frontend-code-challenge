import {
  HiOutlineUser,
  HiOutlineUsers,
  HiOutlineHashtag,
  HiOutlineCubeTransparent,
  HiOutlineBriefcase,
  HiOutlineGlobe,
  HiOutlineStar,
  HiOutlineChat,
} from "react-icons/hi";
import { useMenuItems } from "../MenuProvider";

const icons = {
  HiOutlineStar,
  HiOutlineChat,
  HiOutlineUser,
  HiOutlineUsers,
  HiOutlineHashtag,
  HiOutlineCubeTransparent,
  HiOutlineBriefcase,
  HiOutlineGlobe,
};

function MenuItem({ label, icon, children }) {
  const CustomIcon = icon ? icons[icon] : null;
  const onClick = () => {};

  return (
    <>
      <button onClick={onClick}>
        {CustomIcon ? <CustomIcon /> : <div />}
        <span>{label}</span>
        {children?.length > 0 && <span>{children.length}</span>}
      </button>
      {
        /**
         * Code assignment
         */
        children && children.length > 0 && (
          <>
            {children.map((menuItem) => (
              <MenuItem key={menuItem} {...menuItem} />
            ))}
          </>
        )
      }
    </>
  );
}

export default MenuItem;
