import { useState } from "react";
import { data } from "../../../data";
const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name);
    if (!name) return;
    const fakeId = Date.now();
    // console.log(fakeId);
    const newUser = { id: fakeId, name };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    // console.log("form submitted");
    setName("");
  };

  const removeUser = (id) => {
    let newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>

        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>

      {/* render users */}
      <h2>users</h2>

      {users.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <button
              type="button"
              className="btn"
              onClick={() => removeUser(user.id)}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
