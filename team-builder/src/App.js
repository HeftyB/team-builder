import React, { useState } from "react";
import { v4 as uuid } from "uuid"
import "./App.css";
import Forms from "./components/Forms";
import TeamMembers from "./components/TeamMembers";



const initialTeam = [
  {
    id: uuid(),
    name: "Andrew Shields",
    email: "Andrew.Shields@SweetCo.com",
    role: "Full-Stack Developer",
    git: "www.github.com/HeftyB"
  },
]

let initialFormData = {
  name: "",
  email: "",
  role: "",
  git: ""
}

function App() {

  const [teamMembers, setteamMembers] = useState(initialTeam);
  const [formData, setformData] = useState(initialFormData);

  const onInputChange = event => {
    const { name } = event.target
    const { value } = event.target
    setformData({ ...formData, [name]: value })
  }
  
  const onSubmit = event => {
    event.preventDefault()
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.role.trim()
    ) {
      return
    }
    const newFriend = { ...formData, id: uuid() }
    setteamMembers([ newFriend, ...teamMembers ])
    setformData(initialFormData)
  }
  
  return (
    <div className="App">

      <div className="wrapper">
        <TeamMembers teamMembers={teamMembers}></TeamMembers>

        <Forms
          values={formData}
          onInputChange={onInputChange}
          onSubmit={onSubmit}>
        </Forms>
      </div>
    </div>
  );
}

export default App;
