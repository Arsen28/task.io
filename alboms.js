import React ,{useState,useEffect}from "react";

const Alboms = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchalbomsHandler();
  }, []);

  const fetchalbomsHandler = async () => {
    const response = await (
      await fetch("https://jsonplaceholder.typicode.com/albums")
    ).json();
    setAlbums([...response]);
  };

  console.log(albums);

  return (
    <div>
      <ul>
        {albums.map((albums) => (
          <li key={albums.id}>
            <p>{albums.title}</p>
            <p>{albums.userId}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Alboms;
