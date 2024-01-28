import "./item.css"

function CreateBox({text, edit,index,editInfo,setEditInfo,setTodo,todo}) {
    let newText = ""
    return (
        <>
            <div className="box">
                <div className="mess">
                    {edit && <>
                        <input type="text" onChange={(evt)=>{newText = evt.target.value;}} placeholder={text}/>
                    </>}
                    {!edit && <>
                        <input type="text" disabled value={text}/>
                    </>}
                    
                </div>
                <div className="buttons-holder">
                    { edit &&
                        <>
                            <button className="style-btn bg-red" onClick={()=>{editInfo[index]=false;setEditInfo([...editInfo])}}>Cancel</button>
                            <button className="style-btn bg-green" onClick={()=>{editInfo[index]=false;setEditInfo([...editInfo]);todo[index] = newText; setTodo([...todo])}}>Save</button>
                        </>
                    }
                    {
                        !edit &&
                        <>
                            <button className="style-btn bg-grey" onClick={()=>{editInfo[index]=true;setEditInfo([...editInfo])}}>Edit</button>
                            <button className="style-btn bg-red" onClick={()=>{
                                let arr = [];
                                for (let i in todo){
                                    if (i!=index){
                                        arr.push(todo[i])
                                    }
                                }
                                setTodo([...arr])
                            }}>Delete</button>
                        </>

                    }

                </div>
            </div>
        </>
    )
}

export default CreateBox;