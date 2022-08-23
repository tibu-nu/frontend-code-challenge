{
  /**
   * NOT PART OF ASSIGNMENT
   * This part of the code is not part of the assignment
   */ 
}
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

function Code({ content = "", language = "javascript", copyDisabled = false }) {
  return (
    <div className={ "mt-2" && (copyDisabled && 'select-none')}>
      <SyntaxHighlighter
        language={language}
        style={atomOneDark}
        className="w-full border rounded-md"
      >
        {content}
      </SyntaxHighlighter>
    </div>
  );
}

export default Code;
