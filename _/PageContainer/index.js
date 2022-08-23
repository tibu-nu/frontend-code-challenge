{
  /**
   * NOT PART OF ASSIGNMENT
   * This part of the code is not part of the assignment
   */ 
}
function PageContainer({ children, className = "max-w-screen-md mx-auto" }) {
  return <main className={className}>{children}</main>;
}

export default PageContainer;
