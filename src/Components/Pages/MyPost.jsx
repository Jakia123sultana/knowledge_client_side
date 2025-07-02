import {useContext, useEffect, useState} from "react";

import {Link} from "react-router";
import {FaEdit} from "react-icons/fa";
import {MdDelete} from "react-icons/md";
import Swal from "sweetalert2";
import {AuthContext} from "../../Provider/AuthProvider";

export default function MyPost() {
  const {user} = useContext(AuthContext);
  console.log(user.accessToken);
  const [posts, setPost] = useState([]);

  const handleDelete = (id) => {
    console.log(id);
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
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
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
      fetch(
        `https://knowledge-server-side-chi.vercel.app/knowledges?email=${user.email}`,
        {
          headers: {
            authorization: `Bearer ${user?.accessToken}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => setPost(data));
    }
  }, [user.email]);
  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">My Listings</h1>
       <div className="overflow-x-auto">
        <div className="table w-full min-w-[600px]">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>content</th>
              <th>date</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post._id}>
                <td>{post.title}</td>
                <td>{post.category}</td>
                <td>{post.content}</td>
                <td>{post.date}</td>
                <td>
                  <Link to={`/updatedata/${post._id}`}>
                    <FaEdit size={24} />
                  </Link>
                </td>
                <td>
                  <button onClick={() => handleDelete(post._id)}>
                    <MdDelete size={24} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </div>
      </div>
      </div> 
    </>
  );
}
