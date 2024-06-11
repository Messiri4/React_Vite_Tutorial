import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
        }
        const user = await response.json();
        // console.log(response);
        console.log(user);
        setUser(user);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
      //hide loading
      setIsLoading(false);
    };
    fetchUser();
  }, []);
  if (isLoading) {
    return <h4>Loading...</h4>;
  }
  if (isError) {
    return <h4>There was an error...</h4>;
  }
  const { id, avatar_url, name, html_url, company, bio } = user;
  return (
    <section>
      <div key={id}>
        <img src={avatar_url} alt={name} />
        <h5>{name}</h5>
        <h5>{company}</h5>
        <h5>{bio}</h5>
        <a href={html_url}>profile</a>
      </div>
    </section>
  );
};
export default MultipleReturnsFetchData;
