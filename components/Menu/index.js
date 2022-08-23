import AssignmentBugBanner from "../../_/AssignmentBugBanner";
import MenuItem from "../MenuItem";
import { useMenuItems } from "../MenuProvider";

function Menu() {
  const { menuItems } = useMenuItems();

  const customClassNames = "px-2 flex flex-col gap-1";

  return (
    <div className="h-full" style={{ minWidth: 200 }}>
      <AssignmentBugBanner />

      <div className="p-2 text-sm font-medium">Menu</div>
      <nav className={[customClassNames]}>
        {menuItems?.map(function (menuItem, key) {
          return <MenuItem key={menuItem.id} {...menuItem} />;
        })}
      </nav>
    </div>
  );
}

export default Menu;
