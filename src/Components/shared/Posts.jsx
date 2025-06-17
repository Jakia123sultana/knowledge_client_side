import {useEffect, useState} from "react";

import PostCard from "../PostCard";


export default function Posts() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://knowledge-server-side-chi.vercel.app/knowledges/six")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-6 max-w-6xl mx-auto mb-12">
      {items.map((item) => {
        return <PostCard key={item._id} item={item} />;
      })}
    </div>
  );
}
