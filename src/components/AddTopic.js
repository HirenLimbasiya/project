import React, { useEffect, useState } from 'react'

const AddTopic = () => {
    const [textarea, setTextArea] = useState("");
    const [blockText, setBlockText] = useState([]);
    const [currId, setCurrId] = useState(null);
    const [category, setCategory] = useState({});
    const [totalBlocks, setTotalBlocks] = useState(0);
    const [percentage, setPercentage] = useState(null);
    const [buttonToggle, setButtonToggle] = useState(false)
    const [topicName, setTopicName] = useState("")

    function handleClick(e) {
        if (textarea.trim() === '' && topicName.trim() === '') {
            return;
        }
        const data = textarea.split(/([()+-=\[\]{};':"|,./?])/)
        const ans = textarea.split(/[()+-=\[\]{};':"|,./?]/);
        const d = ans.filter((ele) => {
            if (ele.trim() !== "") return ele;
        })
        setBlockText(data);
        setTotalBlocks(d.length)
        setTextArea("");
        setTopicName("")
    }

    function handleTextClick(id) {
        setButtonToggle(true)
        setCurrId(Number(id));
    }

    function handleCategory(id) {
        setCategory((prev) => {
            return { ...prev, [currId]: id }
        })
        setButtonToggle(false)
    }

    useEffect(() => {
        let total = 0;

        for (const key in category) {
            if (category[key] === "green") total += 4;
            if (category[key] === "yellow") total += 3;
            if (category[key] === "blue") total += 2;
            if (category[key] === "red") total += 1;
        }

        const per = (total / (totalBlocks * 4)) * 100
        setPercentage(per)
    }, [category, totalBlocks])

    return (
        <>
            <section>
                <h3>AddTopic</h3>
                <input type="text" value={topicName} onChange={(e) => setTopicName(e.target.value)} placeholder="Enter Topic Name" />
                <textarea value={textarea} onChange={(e) => setTextArea(e.target.value)} placeholder="Enter Text" /><br />
                <button onClick={handleClick}>click</button>
                {blockText && <h3>Topic: {topicName}</h3>}
                <h3 style={{ display: isNaN(percentage) ? "none" : "block" }}>Topic Understanding : {percentage}</h3>
                <div>
                    {
                        blockText && blockText.map((ele, index) => {

                            if (/[()+-=\[\]{};':"|,./?]/.test(ele) || ele === "") {
                                return <span key={index}>{ele}</span>
                            } else {
                                return <p key={index} id={index}
                                    onClick={(e) => handleTextClick(e.target.id)}
                                    style={{ border: index === currId ? "1.5px solid black" : null, color: category[index.toString()] !== undefined ? category[index.toString()] : null }}
                                >{ele}</p>
                            }
                        })

                    }
                </div>
                <div style={{ display: buttonToggle ? "block" : "none" }}>
                    <button value="green" onClick={(e) => handleCategory(e.target.value)}>understood</button>
                    <button value="yellow" onClick={(e) => handleCategory(e.target.value)}>somewhat understood</button>
                    <button value="blue" onClick={(e) => handleCategory(e.target.value)}>not clear</button>
                    <button value="red" onClick={(e) => handleCategory(e.target.value)}>what ribbish</button>
                </div>
            </section>
        </>
    )
}

export default AddTopic