import Code from "../Code";

const unkownAlgorithm = `// z = Array, y = Integer
function unknown (z, y) {
  let x = 0;
  let w = z.length - 1;

  while (x <= w) {
    let v = Math.floor((x + w) / 2);

    if (z[v] === y) {
      return v;
    } else if (z[v] < y) {
      x = v + 1;
    } else {
      w = v - 1;
    }
  }

  return -1;
}`;

function AssignmentAlgorithm({ children }) {
  return (
    <div className="py-3">
      <h3 className="text-lg font-bold text-gray-900">1. Unknown function</h3>
      <p className="text-base text-gray-700 mb-2 max-w-2xl">
        This is the first assignment and we would like to know if you understand
        what this function does? We disabled the selection because it's a
        assignment for the mind.
      </p>
      <ul className="my-4 text-base text-gray-700 list-disc ml-3 space-y-1">
        <li>
          What does the variable{" "}
          <span className="font-mono text-sm border px-1 rounded-md">v</span>{" "}
          indicate?
        </li>
        <li>
          What does the variable{" "}
          <span className="font-mono text-sm border px-1 rounded-md">x</span>{" "}
          represent?
        </li>
        <li>What would be the function name?</li>
      </ul>
      <Code content={unkownAlgorithm} copyDisabled />
    </div>
  );
}

export default AssignmentAlgorithm;
