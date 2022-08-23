{
  /**
   * NOT PART OF ASSIGNMENT
   * This part of the code is not part of the assignment
   */ 
}
import { useAssignment } from "../Assignments";

function Answer({ question, name }) {
  const { answers, setAnswer } = useAssignment();
  const value = answers?.[name] || "";
  const onChange = (event) => setAnswer(name, event.target.value);

  return (
    <div className="my-2">
      <div className="text-base font-medium text-gray-900 mb-1">{question}</div>
      <textarea
        className="border p-2 text-sm w-full rounded-md"
        onChange={onChange}
        defaultValue={value}
      />
    </div>
  );
}

export default Answer;
