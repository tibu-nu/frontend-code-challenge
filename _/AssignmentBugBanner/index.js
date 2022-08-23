{
  /**
   * NOT PART OF ASSIGNMENT
   * This part of the code is not part of the assignment
   */ 
}
import { useMenuItems } from "../../components/MenuProvider";

function AssignmentBugBanner() {
  const { menuItems } = useMenuItems();

  return !menuItems || !menuItems.length > 0 ? (
    <span className="font-mono text-red-600">
      No menu items found. Check the code.
    </span>
  ) : null;
}

export default AssignmentBugBanner;
