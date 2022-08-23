import { createContext, useContext, useEffect } from "react";
export const MenuItemsContext = createContext();
export const useMenuItems = () => useContext(MenuItemsContext);

{
  /**
   * Code assignment
   */
}
function groupByParent(menuItems) {
  return menuItems;
}

{
  /**
   * Find & solve assignment
   */
}
function MenuProvider({ children, defaultMenuItems = null }) {
  let menuItems = defaultMenuItems;

  useEffect(function () {
    fetch("/api/menuItems")
      .then((resp) => resp.json())
      .then(function (resp) {
        menuItems = resp.data;
      });
  }, []);

  const value = {
    menuItems: groupByParent(menuItems),

    // Code assignment
    activeMenuItem: menuItems?.[3]?.id,
  };

  return (
    <MenuItemsContext.Provider value={value}>
      {typeof children === "function" ? children(value) : children}
    </MenuItemsContext.Provider>
  );
}

export default MenuProvider;
