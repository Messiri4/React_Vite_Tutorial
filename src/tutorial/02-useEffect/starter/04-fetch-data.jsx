import { useEffect, useState } from "react";

const url = "https://api.github.com/users";
// const url = "http://universities.hipolabs.com/search?country=India";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <section>
      <h3>Users</h3>
      <ul className="users">
        {users.map((user) => {
          console.log(user);
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

// const FetchData = () => {
//   const [universities, setUniversities] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         const universities = await response.json();
//         setUniversities(universities);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);
//   return (
//     <section>
//       <h3>Indian Institutions</h3>
//       <div>
//         {universities.map((university) => {
//           const { country, name, web_pages } = university;
//           return (
//             <div>
//               <h4> Country: {country}</h4>
//               <h4> Name: {name}</h4>
//               <h4> Web Pages: {web_pages}</h4>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };
export default FetchData;
