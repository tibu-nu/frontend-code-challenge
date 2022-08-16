function Assignments({ children }) {
  return (
    <div className="py-12">
      <h2 className="text-4xl font-bold text-gray-900">Assignments</h2>
      <p className="mt-3 leading-5 text-base text-gray-700">
        Below you'll find a list of assignments for you to complete.
      </p>
      <div className="mt-5">{children}</div>
    </div>
  );
}

export default Assignments;
