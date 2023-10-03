import { useState, useEffect } from "react";
import NewComment from "./../../components/newComment/NewComment";
import NavList from "../../common/navList/NavList";
import Comment from "../../components/comment/Comment";
import { COMMENT_LIST } from "../../utils/constant/navlist";

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

  const handleFilterTasks = (bg) => {
    if (bg === "#333") {
      setFilterComments(comments);
    } else {
      const colorFilter = comments.filter((note) => note.bg === bg);
      setFilterComments(colorFilter);
    }
  };

  return (
    <main className="w-100">
      <nav className="d-flex justify-content-end align-items-center py-2">
        <ul className="d-flex gap-3 fw-bold m-3">
          {COMMENT_LIST.map((note, index) => {
            return (
              <NavList
                key={index}
                title={note.title}
                bg={note.bg}
                onClick={() => handleFilterTasks(note.bg)}
              />
            );
          })}
        </ul>
        <span className="d-flex justify-content-center align-items-center border  rounded-circle bg-white fw-bold me-3">
          {filterComments.length}
        </span>
      </nav>
      <section className="mx-3 mt-3">
        <div className="">
          <NewComment
            onAddNote={handleAddNewNote}
            comments={comments}
            setComments={setComments}
          />
        </div>

        <div className="w-100 mt-4 ">
          {(comments.length === 0 || filterComments.length === 0) && (
            <div className="w-100 not-comment d-flex justify-content-center  align-items-center my-3">
              <h4 className="text-center">Not Comment</h4>
            </div>
          )}
          <div className="w-100 d-flex flex-wrap justify-content-between gap-2 box-comments">
            {filterComments.map((note) => {
              return (
                <Comment
                  key={note.id}
                  title={note.title}
                  des={note.des}
                  bg={note.bg}
                  onRemove={() => handleRemove(note.id)}
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
