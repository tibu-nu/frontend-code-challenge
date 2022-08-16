function PageContainer({ children, className = "max-w-screen-lg mx-auto" }) {
  return <main className={className}>{children}</main>;
}

export default PageContainer;
