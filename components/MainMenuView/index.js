{
  /**
   * NOT PART OF ASSIGNMENT
   * This part of the code is not part of the assignment
   */
}
import Menu from "../Menu";
import MenuProvider from "../MenuProvider";
import { menuItems } from "../../data";

function MainMenuView({ withDefaults = false }) {
  if (withDefaults) {
    return (
      <MenuProvider defaultMenuItems={menuItems}>
        <div className="flex-shrink-1 bg-white rounded-l-md max-w-xs border rounded-md">
          <Menu />
        </div>
      </MenuProvider>
    );
  }

  return (
    <div className="flex h-96 overflow-hidden">
      <MenuProvider>
        <div className="flex-shrink-1 bg-white rounded-l-md max-w-xs">
          <Menu />
        </div>
      </MenuProvider>
      <div className="border-l flex-grow flex items-center justify-center">
        Page Component
      </div>
    </div>
  );
}

export default MainMenuView;
