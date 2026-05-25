function bye(){

    const users=[
        {
            name: "Dhruv Patel",
            age:20,
            city:"Bharuch"
        },
        {
            name: "Krish Patel",
            age:18,
            city:"Ahemdabad"
        },
        {
            name:"Priya Patel",
            age:20,
            city:"Bharuch"
        }
    ]
    const name2="Patel"
    const getname = (name:string)=>{
        return name
    }
    return (
        <>
            <h2 className="{style.test">Bye Component</h2>
            <br />
            {users.map((user,index)=>(
                <div key={index}>
                    <hr />
                    <p>Name: {user.name}</p>
                    <p>Age: {user.age}</p>
                    <p>City: {user.city}</p>
                    <hr />
                </div>
            ))}

            <h3>Bye {getname(name2)}</h3>
        </>
    );
}

export default bye;


