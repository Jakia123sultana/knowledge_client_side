import { use, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { ImSpinner9 } from "react-icons/im";

export default function UpdatedData() {
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const data = useLoaderData();
  const { _id, category, content, title, author_photo, tags, date } = data;

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;
    const formData = new FormData(form);
    const updateData = Object.fromEntries(formData.entries());

    fetch(`https://knowledge-server-side-chi.vercel.app/knowledges/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsSubmitting(false);
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Updated successfully.",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            navigate("/");
          });
        }
      })
      .catch(() => {
        setIsSubmitting(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong. Please try again!",
        });
      });
  };

  return (
    <div className="bg-black min-h-screen  md:p-6 p-2">
      <div className="p-6 md:p-10 text-center space-y-2 text-white max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold">Update Your Knowledge</h1>
        <p className="text-xs md:text-sm">
          Fill out the form below to post you knowledge sharing. This will help others gain knowledge and know about this.
        </p>
      </div>
  <form
  onSubmit={handleSubmit}
  className="max-w-[90%] mx-auto bg-[rgba(10,25,47,0.76)]  shadow-[#00cde1]/40 rounded-lg p-6 md:p-10"
>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <fieldset className="bg-gray-900 rounded-lg p-3 my-3 border border-[#00cde">
            <label className="label text-[#00cde1] font-semibold text-sm">Title</label>
            <input
              type="text"
              name="title"
              defaultValue={title}
              className="input w-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00cde1] rounded"
              placeholder="Give your title"
              required
            />
          </fieldset>
          <fieldset className="bg-gray-900 rounded-lg p-3 my-3">
            <label className="label text-[#00cde1] font-semibold text-sm">Content</label>
            <textarea
              name="content"
              defaultValue={content}
              className="textarea w-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00cde1] rounded"
              placeholder="Tell us more about the ideas"
              rows={4}
            ></textarea>
          </fieldset>
          <fieldset className="bg-gray-900 rounded-lg p-3 my-3">
            <label className="label text-[#00cde1] font-semibold text-sm">Category</label>
            <input
              type="text"
              name="category"
              defaultValue={category}
              className="input w-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00cde1] rounded"
              placeholder="Whats category?"
            />
          </fieldset>
          <fieldset className="bg-gray-900 rounded-lg p-3 my-3">
            <label className="label text-[#00cde1] font-semibold text-sm">Tags</label>
            <input
              type="text"
              name="tags"
              defaultValue={tags}
              className="input w-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00cde1] rounded"
              placeholder="Tags"
            />
          </fieldset>
          <fieldset className="bg-gray-900 rounded-lg p-3 my-3">
            <label className="label text-[#00cde1] font-semibold text-sm">Date</label>
            <input
              type="date"
              name="date"
              defaultValue={date}
              className="input w-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00cde1] rounded"
              placeholder="Enter the date"
            />
          </fieldset>
          <fieldset className="bg-gray-900 rounded-lg p-3 my-3">
            <label className="label text-[#00cde1] font-semibold text-sm">Photo</label>
            <input
              type="text"
              name="author_photo"
              defaultValue={author_photo}
              className="input w-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00cde1] rounded"
              placeholder="Photo URL"
            />
          </fieldset>
          <fieldset className="bg-gray-900 rounded-lg p-3 my-3">
            <label className="label text-[#00cde1] font-semibold text-sm">User Name</label>
            <input
              type="text"
              name="author_name"
              defaultValue={user.displayName}
              readOnly
              className="input w-full bg-gray-700 text-white cursor-not-allowed rounded"
            />
          </fieldset>
          <fieldset className="bg-gray-900 rounded-lg p-3 my-3">
            <label className="label text-[#00cde1] font-semibold text-sm">Email</label>
            <input
              type="email"
              name="author_email"
              defaultValue={user.email}
              readOnly
              className="input w-full bg-gray-700 text-white cursor-not-allowed rounded"
            />
          </fieldset>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`btn w-full mt-4  text-white font-bold transition-colors duration-200 border-0 ${
            isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-[#00cde1] hover:bg-[#00a6b8]"
          } rounded`}
        >
          {isSubmitting ? "Updating..." : "Update Sharing Knowledge"}
        </button>

        {isSubmitting && (
          <div className="flex justify-center items-center mt-3">
            <ImSpinner9 className="animate-spin text-[#00cde1] text-3xl" />
          </div>
        )}
      </form>
    </div>
  );
}
