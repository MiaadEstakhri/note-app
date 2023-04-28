import { useState, useEffect } from "react";
import NewComment from "./../../components/newComment/NewComment";
import CommentList from "../../components/commentList/CommentList";
import Navigation from "../../components/navigation/Navigation";
// import color from "../../dataColor/Color";

const Discussion = () => {
  const [comments, setComments] = useState([]);
  const [filterComments, setFilterComments] = useState([]);

  const addHandler = (input, textarea, bg, id) => {
    const newComment = {
      id: Math.floor(Math.random() * 100),
      title: input,
      des: textarea,
      bg: bg,
    };
    setComments([...comments, newComment]);
  };
  const removeHandler = (id) => {
    const removeComments = comments.filter((e) => e.id !== id);
    setComments(removeComments);
  };

  const filterToDo = () => {
    const updateColor = comments.filter((e) => e.bg === "#fee2e2");
    updateColor.length > 0
      ? setFilterComments(updateColor)
      : setFilterComments(filterComments);
  };
  const filterDoing = () => {
    const updateColor = comments.filter((e) => e.bg === "#d9f99d");

    updateColor.length > 0
      ? setFilterComments(updateColor)
      : setFilterComments(filterComments);
  };
  const filterDone = () => {
    const updateColor = comments.filter((e) => e.bg === "#bbf7d0");
    updateColor.length > 0
      ? setFilterComments(updateColor)
      : setFilterComments(filterComments);
  };

  const filterAll = () => {
    setFilterComments(comments);
  };

  const getComments = () => {
    const saveComments = JSON.parse(localStorage.getItem("comment")) || [];
    if (saveComments) setComments(saveComments);
  };

  useEffect(() => {
    getComments();
  }, []);

  useEffect(() => {
    if (comments.length) {
      localStorage.setItem("comment", JSON.stringify(comments));
    }
  }, [comments]);

  return (
    <main>
      <Navigation
        filterDoing={filterDoing}
        filterToDo={filterToDo}
        filterDone={filterDone}
        filterAll={filterAll}
      />
      <section className="mx-4">
        <div className="box-newComments me-5">
          <NewComment
            addHandler={addHandler}
            comments={comments}
            setComments={setComments}
          />
        </div>
        <div className="box-comments w-100 gap-4 mt-4 ">
          <CommentList
            comments={filterComments.length ? filterComments : comments}
            removeHandler={removeHandler}
          />
        </div>
      </section>
    </main>
  );
};

export default Discussion;
