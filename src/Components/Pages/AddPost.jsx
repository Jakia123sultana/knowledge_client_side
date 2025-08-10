import { use } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

export default function AddRoommate() {
  const { user } = use(AuthContext);
  const navigate = useNavigate();

  const handleRoommate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newPost = Object.fromEntries(formData.entries());

    if (newPost.tags) {
      newPost.tags = newPost.tags.split(",").map((tag) => tag.trim());
    }

    fetch("https://knowledge-server-side-chi.vercel.app/knowledges", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Added successfully!",
            icon: "success",
            draggable: true,
          }).then(() => {
            navigate("/");
          });
        }
      });
  };

  return (
    <>
      <div className="p-2 pb-8">
        <div>
          <div className="p-8 md:p-12 text-center text-white">
            <h1 className="text-3xl md:text-4xl mb-2 font-semibold">
              Add Your Knowledge
            </h1>
            <p className="text-sm md:text-base max-w-xl mx-auto px-2 md:px-0">
              Fill out the form below to post your knowledge sharing. This will help
              others gain knowledge and know about this.
            </p>
          </div>
          <form
            onSubmit={handleRoommate}
            className="max-w-[90%] md:max-w-[80%] mx-auto p-4 md:p-6 space-y-4 bg-base-100 rounded-lg shadow text-black border border-[#00cde1]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 md:my-12 p-4">
                <label className="label">Title</label>
                <input
                  type="text"
                  name="title"
                  className="input w-full"
                  placeholder="Give your title"
                  required
                />
              </fieldset>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 md:my-12 p-4">
                <label className="label">Content</label>
                <textarea
                  name="content"
                  className="textarea w-full"
                  placeholder="Tell us more about the ideas"
                  rows={4}
                ></textarea>
              </fieldset>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                <label className="label">Category</label>
              <select
    name="category"
    className="input w-full bg-white"
    defaultValue=""
    required
  >
    <option value="" disabled>
      Select a category
    </option>
    <option value="All News">All News</option>
    <option value="Health">Health</option>
    <option value="Travel">Travel</option>
    <option value="Technology">Technology</option>
    <option value="Finance">Finance</option>
    <option value="Career">Career</option>
    <option value="Programming">Programming</option>
    <option value="Mental Health">Mental Health</option>
    <option value="Environment">Environment</option>
    <option value="Design">Design</option>
    <option value="Education">Education</option>
  </select>
              </fieldset>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                <label className="label">Tags</label>
                <input
                  type="text"
                  name="tags"
                  className="input w-full"
                  placeholder="Tags"
                />
              </fieldset>

              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-4 md:my-6 p-4">
                <label className="label">Date</label>
                <input
                  type="date"
                  name="date"
                  className="input w-full"
                  placeholder="Enter the date"
                />
              </fieldset>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-4 md:my-6 p-4">
                <label className="label">Photo</label>
                <input
                  type="text"
                  name="author_photo"
                  className="input w-full"
                  placeholder="Photo URL"
                />
              </fieldset>

              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                <label className="label">User Name</label>
                <input
                  type="text"
                  name="author_name"
                  className="input w-full"
                  defaultValue={user.displayName}
                  readOnly
                />
              </fieldset>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="author_email"
                  className="input w-full"
                  defaultValue={user.email}
                  readOnly
                />
              </fieldset>
            </div>

            <input
              type="submit"
              className="btn w-full mt-6 bg-[#00CED1] text-white font-bold hover:bg-[#00b9bb] transition-colors duration-200"
              value="Share Your Experience"
            />
          </form>
        </div>
      </div>
    </>
  );
}
