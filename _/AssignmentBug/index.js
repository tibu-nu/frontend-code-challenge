{
  /**
   * NOT PART OF ASSIGNMENT
   * This part of the code is not part of the assignment
   */
}
function AssignmentBug({ filePath, children }) {
  return (
    <div className="py-3">
      <h3 className="text-lg font-bold text-gray-900">2. Find &amp; solve</h3>
      <p className="text-base text-gray-700 mb-2 ">
        In the component displayed below you will find an error. The menuItems
        are fetched in the MenuProvider but they don't show up in the consumer
        components one level down. Can you find and resolve the issue in the
        code? You should only have to edit the files in the following
        directory:&nbsp;
        <a
          className="font-mono border rounded-md p-1 bg-gray-100 text-xs"
          href={`file:${filePath}/components`}
        >
          {filePath}/components
        </a>
      </p>
      <div className="border rounded-md w-full">
        {children}
      </div>
      <div className="space-y-2"></div>
    </div>
  );
}

export default AssignmentBug;
