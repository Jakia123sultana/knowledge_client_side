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
      <div className="card bg-base-100 w-160 shadow-sm mt-20 ml-40">
        <figure>
          <img src={news.author_photo} className="w-86 h-4/5" />
        </figure>
        <div className="flex gap-8 ml-8 mt-8">
          <div>
            {" "}
            <img
              src={news.author_photo}
              alt=""
              className="rounded-full w-12 h-12"
            />
          </div>
          <div>
            <p className="text-lg font-bold">{news.author_name}</p>
            <h1 className="">{news.date}</h1>
          </div>
        </div>
        <div className="card-body">
          <div className="flex justify-between ">
            <div className="">
              <p className="text-lg font-semibold mb-2 opacity-90">
                {news.title}
              </p>

              <p className="text-xl font-semibold opacity-80">
                {news.category}
              </p>
              <p className="text-xl font-semibold opacity-80">{news.content}</p>
            </div>
          </div>
        </div>
        <div className=" flex flex-wrap gap-2 text-sm mb-4">
          {news.tags?.map?.((tag, idx) => {
            return (
              <span
                key={idx}
                className="text-gray-500 flex items-center gap-1 bg-gray-100 px-4 py-1 rounded-full"
              >
                <FiTag className="text-gray-400" />
                {tag}
              </span>
            );
          })}
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <BiSolidLike size={28} className="ml-8 text-blue-800" />
            <h1 className="text-lg mt-1">{news.likes}</h1>
          </div>
          <div>
            <p className="mr-8 text-xl ">{news.comments?.length} comments</p>
          </div>
        </div>
        <hr className="text-gray-500 mb-4 mt-4"></hr>
        <div className="flex justify-between">
          <div className="flex gap-4">
            <button
              onClick={handleLike}
              className="mr-8 text-lg mb-10 flex items-center gap-4 hover:bg-gray-200 px-6 py-2 rounded-xl"
            >
              {" "}
              <AiOutlineLike size={28} className="ml-8" />
              <p className="text-xl mt-1">Like</p>
            </button>
          </div>

          <div className="">
            <button
              onClick={() => {
                setCommentBox(true);
              }}
              className="mr-8 text-lg mb-10 flex items-center gap-2 hover:bg-gray-200 px-6 py-2 rounded-xl"
            >
              <FaRegComment size={20} className="  mt-1" />
              Comment
            </button>
          </div>
        </div>
      </div>
      {commentBox && (
        <div className="relative w-160 mb-20 ml-40">
          <input
            type="text"
            placeholder="Write a comment"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="w-160 rounded-full py-3 pl-5 pr-12 text-sm focus:outline-none  blue-400 shadow-lg mt-8 hover:bg-gray-100"
          />
          <button
            onClick={handleComment}
            className=" absolute top-10  right-6 transform -transtale-y-1/2"
          >
            <IoSend size={24} />
          </button>
        </div>
      )}
    </>
  );
}
