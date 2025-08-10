// import {useLoaderData} from "react-router";
// import {FaArrowRight} from "react-icons/fa";
// import {AiOutlineLike} from "react-icons/ai";
// import {IoSend} from "react-icons/io5";
// import {FaRegComment} from "react-icons/fa";
// import {BiSolidLike} from "react-icons/bi";
// import {FiTag} from "react-icons/fi";
// import {useContext, useState} from "react";
// import {AuthContext} from "../../Provider/AuthProvider";
// export default function CardDetails() {
//   const data = useLoaderData();
//   console.log(data);
//   const {user} = useContext(AuthContext);
//   console.log(user.email);
//   //   const { _id } = useParams();
//   //   console.log(_id)
//   const [news, setNews] = useState(data);
//   const [commentText, setCommentText] = useState("");
//   const [comments, setComments] = useState(data.comments || []);
//   const [commentBox, setCommentBox] = useState(false);

//   const [likeCount, setLikeCount] = useState(0);
//   console.log(likeCount);

//   const handleLike = async () => {
//     await fetch(
//       `https://knowledge-server-side-chi.vercel.app/knowledges/like/${news._id}`,
//       {
//         method: "PATCH",
//       }
//     );

//     setLikeCount((pre) => pre + 1);
//     // setShowContact(true)
//   };
//   const handleComment = async () => {
//     // if (user.email === news.author_email) return;
//     if (!commentText.trim()) return;
//     const newComment = {text: commentText};
//     await fetch(
//       `https://knowledge-server-side-chi.vercel.app/knowledges/comment/${news._id}`,
//       {
//         method: "PATCH",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify(newComment),
//       }
//     );

//     setComments([...comments, newComment]);
//     setCommentText("");
//     setCommentBox(false);

//     // setLikeCount(pre=>pre+1)
//     // setShowContact(true)
//   };
//   return (
   

//       <>
//       <div className="bg-gray-100 shadow-sm mt-10 mb-20 max-w-4xl mx-auto rounded-lg overflow-hidden px-4">
//         <figure className="w-full h-80">
//          <img src={news.author_photo} className="w-full h-80 object-cover rounded-t-xl" />
//         </figure>

//         <div className="flex items-center gap-4 mt-6">
//           <img src={news.author_photo} alt="author" className="rounded-full w-12 h-12" />
//           <div>
//             <p className="text-lg font-bold">{news.author_name}</p>
//             <p className="text-sm text-gray-600">{news.date}</p>
//           </div>
//         </div>

//         <div className="py-6">
//           <p className="text-lg font-semibold mb-2">{news.title}</p>
//           <p className="text-md font-semibold text-blue-800">{news.category}</p>
//           <p className="text-md mt-2 text-gray-700">{news.content}</p>
//         </div>

//         <div className="flex flex-wrap gap-2 text-sm mb-4">
//           {news.tags?.map((tag, idx) => (
//             <span
//               key={idx}
//               className="flex items-center gap-1 bg-gray-200 text-gray-600 px-3 py-1 rounded-full"
//             >
//               <FiTag /> {tag}
//             </span>
//           ))}
//         </div>

//         <div className="flex justify-between items-center text-gray-600 mb-4">
//           <div className="flex items-center gap-2">
//             <BiSolidLike size={24} className="text-blue-700" />
//             <p>{news.likes}</p>
//           </div>
//           <p>{comments.length} comments</p>
//         </div>

//         <hr className="border-gray-300" />

//         <div className="flex justify-between mt-4 flex-wrap gap-4">
//           <button
//             onClick={handleLike}
//             className="flex items-center gap-2 hover:bg-gray-200 px-4 py-2 rounded-lg"
//           >
//             <AiOutlineLike size={20} />
//             <span>Like</span>
//           </button>

//           <button
//             onClick={() => setCommentBox(true)}
//             className="flex items-center gap-2 hover:bg-gray-200 px-4 py-2 rounded-lg"
//           >
//             <FaRegComment size={18} />
//             <span>Comment</span>
//           </button>
//         </div>
//       </div>

//       {commentBox && (
//         <div className="max-w-4xl mx-auto px-4 mb-20 relative">
//           <input
//             type="text"
//             placeholder="Write a comment"
//             value={commentText}
//             onChange={(e) => setCommentText(e.target.value)}
//             className="w-full rounded-full py-3 pl-5 pr-12 text-sm shadow-md border focus:outline-none mt-4"
//           />
//           <button
//             onClick={handleComment}
//             className="absolute right-6 top-[1.3rem] text-gray-700"
//           >
//             <IoSend size={22} />
//           </button>
//         </div>
//       )}
//     </>
//   );
// }
import { useLoaderData } from "react-router";
import { AiOutlineLike } from "react-icons/ai";
import { IoSend } from "react-icons/io5";
import { FaRegComment, FaSearch, FaFacebookF, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { FiTag } from "react-icons/fi";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

export default function CardDetails() {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);

  const [news, setNews] = useState(data);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState(Array.isArray(data.comments) ? data.comments : []);
  const [commentBox, setCommentBox] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = async () => {
    await fetch(
      `https://knowledge-server-side-chi.vercel.app/knowledges/like/${news._id}`,
      { method: "PATCH" }
    );
    setLikeCount((prev) => prev + 1);
  };

  const handleComment = async () => {
    if (!commentText.trim()) return;
    const newComment = { text: commentText };
    await fetch(
      `https://knowledge-server-side-chi.vercel.app/knowledges/comment/${news._id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newComment),
      }
    );

    setComments([...comments, newComment]);
    setCommentText("");
    setCommentBox(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans px-4 md:px-10 py-10">
      <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto w-full flex-1">
        {/* Left Main Content */}
        <div className="w-full lg:w-2/3">
          {/* Image */}
          <figure className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
            <img
              src={news.author_photo}
              alt="author"
              className="w-full h-full object-cover"
            />
          </figure>

          {/* Meta Info */}
          <div className="mt-4 space-y-2 px-1 md:px-2">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
              <span className="bg-gray-800 text-gray-400 hover:text-white px-3 py-1 rounded-full text-sm transition">
                {news.author_name}
              </span>
              <span className="hidden sm:inline-block">|</span>
              <span className="bg-gray-800 text-gray-400 hover:text-white px-3 py-1 rounded-full text-sm transition">
                {news.category || "General"}
              </span>
              <span className="hidden sm:inline-block">|</span>
              <span className="text-gray-400">{news.date || "Unknown Date"}</span>
            </div>
          </div>

          {/* Title and Content */}
          <div className="mt-6 space-y-4">
            <h2 className="text-3xl font-bold text-cyan-300">{news.title}</h2>
            <p className="text-gray-300">{news.content}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {Array.isArray(news.tags) &&
              news.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-gray-800 text-gray-400 hover:text-white px-3 py-1 rounded-full text-sm transition flex items-center gap-1"
                >
                  <FiTag /> {tag}
                </span>
              ))}
          </div>

          {/* Likes and Comments count */}
          <div className="flex justify-between items-center text-gray-600 mt-6 mb-4">
            <div className="flex items-center gap-2 text-cyan-400">
              <BiSolidLike size={24} />
              <p>{(news.likes || 0) + likeCount}</p>
            </div>
            <p className="text-gray-400">{comments.length} comments</p>
          </div>

          <hr className="border-base-700" />

          {/* Like and Comment Buttons */}
          <div className="flex justify-between flex-wrap gap-4 mt-4">
            <button
              onClick={handleLike}
              className="btn btn-outline border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-white flex items-center gap-2 px-4 py-2"
            >
              <AiOutlineLike size={20} />
              Like
            </button>

            <button
              onClick={() => setCommentBox(true)}
              className="btn btn-outline border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-white flex items-center gap-2 px-4 py-2"
            >
              <FaRegComment size={18} />
              Comment
            </button>
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="w-full lg:w-1/3 flex flex-col gap-8">
          {/* Search */}
          <div className="bg-black p-5 rounded-lg shadow">
            <div className="relative">
              <input
                type="text"
                placeholder="Sharing knowledge"
                className="w-full p-2 pr-10 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition"
              >
               
              </button>
            </div>
          </div>

          {/* Archives */}
          <div className="bg-black p-5 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">Archives</h3>
            <p className="text-gray-400">July 2025</p>
          </div>

          {/* Categories */}
          <div className="bg-black p-5 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">Categories</h3>
            <ul className="text-gray-300 list-disc ml-5 space-y-1">
              <li>Category 1</li>
              <li>Category 2</li>
            </ul>
          </div>

          {/* Tags */}
          <div className="bg-gray-900 p-5 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">Post Tags</h3>
            <div className="flex flex-wrap gap-2">
              {Array.isArray(news.tags) &&
                news.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-800 text-gray-400 hover:text-white px-3 py-1 rounded-full text-sm transition"
                  >
                    {tag}
                  </span>
                ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Comments Section */}
      <div className="max-w-4xl w-full mt-8">
        <h3 className="text-xl font-semibold mb-4 text-cyan-400">Comments</h3>

        {/* Comment Form */}
        {commentBox && (
          <div className="mb-6 bg-gray-900 p-3 rounded-lg shadow border border-gray-800">
            <textarea
              rows="2"
              placeholder="Write your comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:ring-1 focus:ring-cyan-500 outline-none resize-none text-sm"
            />
            <div className="flex justify-end mt-2">
              <button
                onClick={handleComment}
                className="flex items-center gap-1 bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-1.5 rounded-lg transition text-sm"
              >
                <IoSend size={16} />
                Post
              </button>
            </div>
          </div>
        )}

        {/* Comment List */}
        <div className="space-y-3">
          {comments.length === 0 ? (
            <p className="text-gray-400 text-sm">
              No comments yet. Be the first to comment!
            </p>
          ) : (
            comments.map((comment, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 bg-gray-900 p-3 rounded-lg border border-gray-800 shadow-sm"
              >
                {/* Avatar */}
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {(comment.name || user?.displayName || "U")[0].toUpperCase()}
                </div>

                {/* Comment Content */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-white text-sm">
                      {comment.name || user?.displayName || "Unknown User"}
                    </h4>
                    <span className="text-xs text-gray-500">
                      {comment.date || "Just now"}
                    </span>
                  </div>
                  <p className="text-gray-300 mt-0.5 text-sm">{comment.text}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
