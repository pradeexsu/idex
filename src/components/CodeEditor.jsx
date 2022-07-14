import { useEffect, useRef } from "react";
import CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css"
import "codemirror/theme/dracula.css"
import "codemirror/mode/javascript/javascript"


const CodeEditor = ({ options }) => {
    const codeArea = useRef(null);
    var myCodeMirror = useRef(null);

    useEffect(() => {

        myCodeMirror.current = CodeMirror.fromTextArea(codeArea.current, {
            mode: { name: 'javascript', json: true },
            theme: 'dracula',
            autoCloseTags: true,
            autoCloseBrackets: true,
            lineNumbers: true,
        });
        console.log(myCodeMirror.current)
        myCodeMirror.current.setValue(options.value);
        myCodeMirror.current.setSize(null, "80vh");

    }, []);

    return (<textarea ref={codeArea} />);
};
export default CodeEditor;