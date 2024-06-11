import avatar from "../../../assets/default-avatar.svg";

const Person = (person) => {
  const { id, name, nickName, images } = person;
  const img = images?.[0]?.small?.url || avatar;
  return (
    <div>
      <img src={img} alt={name} style={{ width: "50px" }} />
      <h4>Name: {name}</h4>
      <p>Nick Name: {nickName || "No Nick Name"}</p>
    </div>
    //   <div key={id}>{name}</div>
  );
};
export default Person;
