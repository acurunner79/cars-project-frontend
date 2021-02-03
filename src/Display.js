import React from 'react'

const Display = (props) => {
    /////// DESTRUCTURE PROPS //////////
    const {users} = props
    console.log('this is props', users)
    
///// LOADED ///////
const loaded = () => {
    return (
        <div>
            <h3>Click the "Start your garage" button</h3>
        {users.map((user) => {
            return (
                <div style={{ textAlign: "center" }}>
                    <h2>{user.name}</h2>
                    <h2>"{user?.cars?.make} {user?.cars?.model} {user?.cars?.color}"</h2>
                     <img src={user?.cars?.img}></img>
                     <button onClick={() => {
                        props.selectUser(user)
                        props.history.push("/edit")
                        }}>Edit car</button>
                        <button onClick={() => props.deleteUser(user)}>Delete your car</button>
                </div>
            )
        })}
        </div>
    )
}
const loading = <h2>Loading...</h2>
return users.length > 0 ? loaded() : loading
}

export default Display
