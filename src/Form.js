import React from 'react'

const Form = (props) => {

//////// STATE FOR FORM ///////////
const [formData, setFormData] = React.useState(props.user)

////////// HANDLE FUNCTIONS /////////////
const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    props.handleSubmit(formData); // Submit to Parents desired function
    props.history.push("/"); //Push back to display page
  };

  const handleChange = (event) => {
      setFormData({ ...formData, [event.target.name]: event.target.value })
  }
    return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange}></input>
          <h4>Create your car</h4>
      </form>
      <form>
         <input
           type="text"
           name="make"
           placeholder="Make"
           value={formData.make}>
         </input>
         <input
           type="text"
           name="model"
           placeholder="Model"
           value={formData.model}
           onChange={handleChange}>
         </input>
            <h4>Add an image url</h4>
         <input
           type="text"
           name="img"
           placeholder="URL"
           value={formData.img}
           onChange={handleChange}>
         </input>
         <input type="submit" value={props.label} />
      </form>
    </div>
    )
}


export default Form
