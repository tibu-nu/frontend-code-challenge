{
  /**
   * NOT PART OF ASSIGNMENT
   * This part of the code is not part of the assignment
   */
}
import { createContext, useCallback, useContext, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { useAppContext } from "../../_/AppContainer";
import { CgSpinner } from "react-icons/cg";
import Answer from "../Answer";

const AssignmentContext = createContext();
export const useAssignment = () => useContext(AssignmentContext);

function Assignments({ children }) {
  const { state: appState, setState: setAppState } = useAppContext();
  const [loading, setLoading] = useState(false);
  const [state, setState] = useLocalStorage("assignments", {});
  const clearAnswers = () => setState({});
  const setAnswer = (key, value) =>
    setState((state) => ({ ...state, [key]: value }));

  const sendAssessment = useCallback(
    async function () {
      setLoading(true);

      if (confirm("Do you want to send the assessment?")) {
        await fetch("/api/_", {
          method: "POST",
          body: JSON.stringify({
            s: {
              ...appState,
              ae: new Date(),
            },
            a: state,
          }),
        })
          .then((resp) => resp.json())
          .then(function (resp) {
            if (resp.success) {
              setAppState((state) => ({
                ...state,
                ok: true,
              }));
            } else {
              alert(
                "Error occurred can you send the files that you edited and the answers?"
              );
            }
          });
      }
      setLoading(false);
    },
    [appState, state]
  );

  return (
    <AssignmentContext.Provider
      value={{
        answers: state,
        setAnswer,
        clearAnswers,
      }}
    >
      <div className="py-12">
        <h2 className="text-4xl font-bold text-gray-900">Assignments</h2>
        <p className="mt-3 leading-5 text-base text-gray-700 max-w-2xl">
          Below you'll find a set of assignments for you to complete. Answers
          are temporarily stored in localStorage so be sure to have it enabled.
          At the end you can click the "Send Assessment" button this will send
          the files in the components folder and the answers. Good luck!
        </p>
        <div className="mt-5">{children}</div>
        <div className="py-2">
          <Answer
            question={<>Do you have any feedback for this code assessment?</>}
            name="feedback"
          />
          {!appState?.ok ? (
            <button
              className="inline-flex gap-2 items-center justify-center p-2 px-3 rounded-md bg-blue-600 text-white"
              onClick={sendAssessment}
            >
              Send Assessment
              {loading && <CgSpinner className="h-4 w-4 animate-spin" />}
            </button>
          ) : (
            <div className="text-sm text-green-600">Assessment send!</div>
          )}
        </div>
      </div>
    </AssignmentContext.Provider>
  );
}

export default Assignments;
