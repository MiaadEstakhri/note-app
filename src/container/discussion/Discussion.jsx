import { useState, useEffect } from "react";
import NewComment from "./../../components/newComment/NewComment";
import NavList from "../../components/navList/NavList";
import Comment from "../../components/comment/Comment";

const Discussion = () => {
  const [comments, setComments] = useState([]);
  const [filterComments, setFilterComments] = useState([]);

  useEffect(() => {
    if (comments.length && filterComments.length) {
      localStorage.setItem("comment", JSON.stringify(comments));
    }
  }, [comments, filterComments]);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = () => {
    const saveComments = JSON.parse(localStorage.getItem("comment")) || [];
    if (saveComments) {
      setComments(saveComments);
      setFilterComments(saveComments);
    }
  };

  const handleAddNewNote = (input, textarea, bg) => {
    const newComment = {
      id: Date.now(),
      title: input,
      des: textarea,
      bg: bg ? bg : "#fee2e2",
    };
    setFilterComments([...comments, newComment]);
    setComments([...comments, newComment]);
  };
  const handleRemove = (id) => {
    const removeComments = comments.filter((note) => note.id !== id);
    const removeFilterComments = filterComments.filter(
      (note) => note.id !== id
    );
    setComments(removeComments);
    setFilterComments(removeFilterComments);
  };

  const handleUpdate = (id, newTitle, newDes) => {
    const updatedComments = comments.map((comment) =>
      comment.id === id ? { ...comment, title: newTitle, des: newDes } : comment
    );
    const updatedFilterComments = filterComments.map((comment) =>
      comment.id === id ? { ...comment, title: newTitle, des: newDes } : comment
    );
    setComments(updatedComments);
    setFilterComments(updatedFilterComments);
  };

  const handleFilterTasks = (bg) => {
    if (bg === "#333") {
      setFilterComments(comments);
    } else {
      const colorFilter = comments.filter((note) => note.bg === bg);
      setFilterComments(colorFilter);
    }
  };

  return (
    <main className="w-100 h-100">
      <h1 className="bg-light text-center fw-bold h3 py-3 m-0">Note List</h1>
      <NavList onClick={handleFilterTasks} comments={comments} />
      <section className="container-fluid w-100  mt-3">
        <div className="w-100 d-flex justify-content-center">
          <NewComment
            onAddNote={handleAddNewNote}
            comments={comments}
            setComments={setComments}
          />
        </div>

        <div className="w-100 h-100 mt-4 ">
          {(comments.length === 0 || filterComments.length === 0) && (
            <div className="w-100 not-comment d-flex justify-content-center  align-items-center my-3">
              <h4 className="text-center">Not Comment</h4>
            </div>
          )}
          <div className="w-100   box-comments">
            {filterComments.map((note) => {
              return (
                <Comment
                  key={note.id}
                  title={note.title}
                  des={note.des}
                  bg={note.bg}
                  onRemove={() => handleRemove(note.id)}
                  onUpdate={(newTitle, newDes) =>
                    handleUpdate(note.id, newTitle, newDes)
                  }
                  className="comment"
                />
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Discussion;
