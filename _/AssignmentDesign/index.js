{
  /**
   * NOT PART OF ASSIGNMENT
   * This part of the code is not part of the assignment
   */
}
function AssignmentDesign({ children }) {
  return (
    <div className="py-3">
      <h3 className="text-lg font-bold text-gray-900">3. Code assignment</h3>
      <p className="text-base text-gray-700 mb-2 ">
        On the left you see the MainMenuView component. On the right there's a
        video of the complete interaction and styling. For this assignment we
        would like you to match the interaction & style as close as possible
        using Tailwind &amp; the context provider. There is already some
        placeholder code for the grouping of menuItems.
      </p>
      <div className="border rounded-md w-full grid grid-cols-2 p-3 gap-6">
        <div>{children}</div>
        <div>
          <video
            width="198"
            height="382"
            autoPlay
            muted
            loop
            className="border rounded-md"
          >
            <source src="/video.mov" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default AssignmentDesign;
