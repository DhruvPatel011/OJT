import { Heading1 } from "lucide-react";
import './App.css'

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
    //condition 1
    const isLoggedIn = false;
    let message;
    if(isLoggedIn){
        message = <h1>Welcome User</h1>
    }else{
        message = <h2>Please Login</h2>
    }
    //condition 2
    const mess = false;
    
    



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
                <p>{message}</p>
                <p>{mess ? <h3>True</h3> : <h3>False</h3>}</p>
                {mess ? <p className="visible">Visible</p> : <p className="unvisible">Unvisible</p>}
            <br />
                <p></p>

            <br /><br />
            </h2>
        </>
    )
}

export default Hello;