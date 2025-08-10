import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { ImSpinner9 } from "react-icons/im";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

export default function MyPost() {
  const { user } = useContext(AuthContext);
  const [posts, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(
            `https://knowledge-server-side-chi.vercel.app/knowledges/${id}`,
            {
              method: "DELETE",
            }
          )
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount) {
                const remainingdata = posts.filter((cof) => cof._id !== id);
                setPost(remainingdata);
                swalWithBootstrapButtons.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
              }
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };

  useEffect(() => {
    if (user?.email) {
      setIsLoading(true);
      fetch(
        `https://knowledge-server-side-chi.vercel.app/knowledges?email=${user.email}`,
        {
          headers: {
            authorization: `Bearer ${user?.accessToken}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setPost(data);
          setIsLoading(false);
        })
        .catch(() => setIsLoading(false));
    }
  }, [user.email]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <ImSpinner9 className="animate-spin text-4xl text-[#00CED1]" />
      </div>
    );
  }

  return (
    <div className="p-4 min-h-screen bg-black text-white mx-auto max-w-[90%]">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#00cde1]">
       <span className="text-white">My </span> Listings
      </h1>
      <div className="overflow-x-auto rounded-lg ">
        <table className="table-auto w-full min-w-[600px] text-left border-collapse">
          <thead>
            <tr className="bg-[#002d33]">
              {["Title", "Category", "Content", "Date", "Update", "Delete"].map(
                (header) => (
                  <th
                    key={header}
                    className="px-4 py-3 border-b border-[#00cde1] text-[#00cde1] uppercase tracking-wide font-semibold text-sm"
                  >
                    {header}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {posts.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="text-center py-8 text-gray-400 italic"
                >
                  No posts found.
                </td>
              </tr>
            ) : (
              posts.map((post) => (
                <tr
                  key={post._id}
                  className="even:bg-[#111] hover:bg-[#003a47] transition-colors"
                >
                  <td className="px-4 py-3 whitespace-normal">{post.title}</td>
                  <td className="px-4 py-3 whitespace-normal">{post.category}</td>
                  <td className="px-4 py-3 whitespace-normal max-w-xs truncate">
                    {post.content}
                  </td>
                  <td className="px-4 py-3">{post.date}</td>
                  <td className="px-4 py-3">
                    <Link
                      to={`/updatedata/${post._id}`}
                      className="inline-flex items-center justify-center px-3 py-1 rounded bg-[#00cde1] hover:bg-[#00a6b8] transition-colors"
                      aria-label="Edit post"
                    >
                      <FaEdit size={18} className="text-black" />
                    </Link>
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => handleDelete(post._id)}
                      className="inline-flex items-center justify-center px-3 py-1 rounded bg-red-600 hover:bg-red-700 transition-colors"
                      aria-label="Delete post"
                    >
                      <MdDelete size={20} className="text-white" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
