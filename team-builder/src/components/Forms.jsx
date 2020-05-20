import React from "react"

export default function Forms(props) {
    const {
        values,
        onInputChange,
        onSubmit,
      } = props

    return (
    <form className="form container" onSubmit={onSubmit}>
        <div className="form-group submit">
        <h3>Add a Team Member</h3>
        </div>
        <div className="form-group inputs">
            <h4>General information</h4>

            <label>Username:&nbsp;
                <input
                type="text"
                placeholder="Type your name"
                maxLength="20"
                name="name"
                value={values.name}
                onChange={onInputChange}
                />
            </label>
            <br/>
            <label>Email:&nbsp;
                <input
                type="text"
                placeholder="Type email"
                maxLength="20"
                name="email"
                value={values.email}
                onChange={onInputChange}
                />
            </label>
            <br/>
            <label>Role:&nbsp;
                <select name="role" value={values.role} onChange={onInputChange}>
                    <option value="">Select a Role</option>
                    <option value="Product Engineer">Product Engineer</option>
                    <option value="Project Lead">Project Lead</option>
                    <option value="Back End Developer">Back End Developer</option>
                    <option value="Front End Developer">Front End Developer</option>
                    <option value="Full-Stack Developer">Full-Stack Developer</option>
                    <option value="UX Designer">UX Designer</option>
                    <option value="Data Scientist">Data Scientist</option>
                    <option value="Mobile Developer">Mobile Developer</option>
                    <option value="Quality Assurance">Quality Assurance</option>
                </select>
            </label>
            <br/>
                <label>Git:&nbsp;
                <input
                type="text"
                placeholder="Type git URL"
                maxLength="100"
                name="git"
                value={values.git}
                onChange={onInputChange}
                />
            </label>
            <br/>
            <button>submit</button>
        </div>
    </form>
    )
}
