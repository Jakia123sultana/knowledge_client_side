import {useLoaderData} from "react-router";
import {FaArrowRight} from "react-icons/fa";
import {AiOutlineLike} from "react-icons/ai";
import {IoSend} from "react-icons/io5";
import {FaRegComment} from "react-icons/fa";
import {BiSolidLike} from "react-icons/bi";
import {FiTag} from "react-icons/fi";
import {useContext, useState} from "react";
import {AuthContext} from "../../Provider/AuthProvider";
export default function CardDetails() {
  const data = useLoaderData();
  console.log(data);
  const {user} = useContext(AuthContext);
  console.log(user.email);
  //   const { _id } = useParams();
  //   console.log(_id)
  const [news, setNews] = useState(data);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState(data.comments || []);
  const [commentBox, setCommentBox] = useState(false);

  const [likeCount, setLikeCount] = useState(0);
  console.log(likeCount);

  const handleLike = async () => {
    await fetch(
      `https://knowledge-server-side-chi.vercel.app/knowledges/like/${news._id}`,
      {
        method: "PATCH",
      }
    );

    setLikeCount((pre) => pre + 1);
    // setShowContact(true)
  };
  const handleComment = async () => {
    // if (user.email === news.author_email) return;
    if (!commentText.trim()) return;
    const newComment = {text: commentText};
    await fetch(
      `https://knowledge-server-side-chi.vercel.app/knowledges/comment/${news._id}`,
      {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newComment),
      }
    );

    setComments([...comments, newComment]);
    setCommentText("");
    setCommentBox(false);

    // setLikeCount(pre=>pre+1)
    // setShowContact(true)
  };
  return (
   

      <>
      <div className="bg-gray-100 shadow-sm mt-10 mb-20 max-w-4xl mx-auto rounded-lg overflow-hidden px-4">
        <figure className="w-full h-80">
         <img src={news.author_photo} className="w-full h-80 object-cover rounded-t-xl" />
        </figure>

        <div className="flex items-center gap-4 mt-6">
          <img src={news.author_photo} alt="author" className="rounded-full w-12 h-12" />
          <div>
            <p className="text-lg font-bold">{news.author_name}</p>
            <p className="text-sm text-gray-600">{news.date}</p>
          </div>
        </div>

        <div className="py-6">
          <p className="text-lg font-semibold mb-2">{news.title}</p>
          <p className="text-md font-semibold text-blue-800">{news.category}</p>
          <p className="text-md mt-2 text-gray-700">{news.content}</p>
        </div>

        <div className="flex flex-wrap gap-2 text-sm mb-4">
          {news.tags?.map((tag, idx) => (
            <span
              key={idx}
              className="flex items-center gap-1 bg-gray-200 text-gray-600 px-3 py-1 rounded-full"
            >
              <FiTag /> {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center text-gray-600 mb-4">
          <div className="flex items-center gap-2">
            <BiSolidLike size={24} className="text-blue-700" />
            <p>{news.likes}</p>
          </div>
          <p>{comments.length} comments</p>
        </div>

        <hr className="border-gray-300" />

        <div className="flex justify-between mt-4 flex-wrap gap-4">
          <button
            onClick={handleLike}
            className="flex items-center gap-2 hover:bg-gray-200 px-4 py-2 rounded-lg"
          >
            <AiOutlineLike size={20} />
            <span>Like</span>
          </button>

          <button
            onClick={() => setCommentBox(true)}
            className="flex items-center gap-2 hover:bg-gray-200 px-4 py-2 rounded-lg"
          >
            <FaRegComment size={18} />
            <span>Comment</span>
          </button>
        </div>
      </div>

      {commentBox && (
        <div className="max-w-4xl mx-auto px-4 mb-20 relative">
          <input
            type="text"
            placeholder="Write a comment"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="w-full rounded-full py-3 pl-5 pr-12 text-sm shadow-md border focus:outline-none mt-4"
          />
          <button
            onClick={handleComment}
            className="absolute right-6 top-[1.3rem] text-gray-700"
          >
            <IoSend size={22} />
          </button>
        </div>
      )}
    </>
  );
}
