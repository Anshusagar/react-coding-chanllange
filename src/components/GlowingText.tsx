import './styles/styles.css'
import {useState} from "react";

const GlowingText = () => {
    const [enteredText, setEnterredText] = useState<string>('');
    const [finalDisplayedText, setFinalDisplayedText] = useState<any>([])
    const handleKeyUp = (event: any) => {
        //console.log(event)
        if (event.key == "Enter") {
            setFinalDisplayedText([...finalDisplayedText, enteredText])
            setEnterredText('')
        }
    }
    return (
        <>  <h3 className="glow-header">G L O W - Y O U R - D A Y</h3>
            <div className="container">
                <div className="wrapper">
                    <textarea placeholder="Enter your Text Here ............"
                              className="custom-textArea" rows={30} cols={70}
                              value={enteredText}
                              onKeyUpCapture={handleKeyUp}
                              onChange={(event) => setEnterredText(event?.target.value)}>

                    </textarea>
                </div>
                <div className="wrapper">
                    {finalDisplayedText?.map((ele: string, index: number) => <p className="glow-text"
                                                                                key={index}>{ele}</p>)}
                </div>
            </div>

        </>
    )
}
export default GlowingText