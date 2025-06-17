import {use} from "react";
import {useLoaderData, useNavigate} from "react-router";
import Swal from "sweetalert2";
import {AuthContext} from "../../Provider/AuthProvider";

export default function UpdatedData() {
  const {user} = use(AuthContext);
  console.log(user.email);
  const navigate = useNavigate();
  const data = useLoaderData();
  const {_id, category, content, title, author_photo, tags, date} = data;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateData = Object.fromEntries(formData.entries());
    console.log(updateData);
    fetch(`https://knowledge-server-side-chi.vercel.app/knowledges/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Coffee updated successfully.",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            navigate("/");
          });
        }
      });
  };
  return (
    <>
      <>
        <div className="p-24">
          <div className="p-12 text-center space-y-4">
            <h1 className="text-5xl">Update Your Knowledge</h1>
            <p>
              Fill out the form below to post you knowledge sharing.This will
              help others gain knowledge and know about this.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border  my-12 p-4">
                <label className="label">Title</label>
                <input
                  type="text"
                  name="title"
                  defaultValue={title}
                  className="input w-full"
                  placeholder="Give your title"
                  required
                />
              </fieldset>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border  my-12 p-4">
                <label className="label">Content</label>
                <textarea
                  name="content"
                  defaultValue={content}
                  className="textarea w-full"
                  placeholder="Tell us more about the ideas"
                ></textarea>
              </fieldset>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                <label className="label">Category</label>
                <input
                  type="text"
                  name="category"
                  defaultValue={category}
                  className="input w-full"
                  placeholder="Whats category?"
                />
              </fieldset>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                <label className="label">Tags</label>
                <input
                  type="text"
                  name="tags"
                  defaultValue={tags}
                  className="input w-full"
                  placeholder="Tags"
                />
              </fieldset>

              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
                <label className="label">Date</label>
                <input
                  type="date"
                  name="date"
                  defaultValue={date}
                  className="input w-full"
                  placeholder="Enter the date"
                />
              </fieldset>

              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
                <label className="label">Photo</label>
                <input
                  type="text"
                  name="author_photo"
                  className="input w-full"
                  placeholder="Photo URL"
                  defaultValue={author_photo}
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
              className="btn w-full mt-6"
              value="Upadate Sharing Knowledge"
            />
          </form>
        </div>
      </>
    </>
  );
}
