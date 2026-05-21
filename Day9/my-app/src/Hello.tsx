function Hello(){

    const getname = (yourname) => {
        return yourname;
    }
    const name = "Dhruv"
    const name1 = "Patel"

    function handleClick(){
      alert("Clicked")
    }
    function handleInput(){
        console.clear();
        console.log("Value: ", event?.target.value);
    }
    const handleMouseOver = () => {
        console.clear();
        console.log("Text Over");
    }
    const handleDoubleClick = () => {
        console.clear();
        console.log("Double Clicked");
    }

    return(
        <>
            <h2 >It's inside <code>Hello.tsx</code> File... ! 
            <br /><br />
                Hello <code>{getname(name)}</code>...!
            <br />
                Bye <code>{getname(name1)}</code>...!
            <br /><br />
                <button onClick={handleClick}>Click</button>
            <br />
                <button onClick={() => alert("Arrow")}>Arrow</button>
            <br /><br />
                <input type="text" onChange={handleInput} />
            <br />
                <input type="text" onClick={()=> alert("arr")} />
            <br /><br />
                <p onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick}>MouseOver & DoubleCLick</p>
            <br />
                
            </h2>
        </>
    )
}

export default Hello;