import { useState, useEffect } from "react";
import NewComment from "./../../components/newComment/NewComment";
import CommentList from "../../components/commentList/CommentList";
import Navigation from "../../components/navigation/Navigation";

const Discussion = () => {
  const [comments, setComments] = useState([]);

  const addHandler = (input, textarea, bg) => {
    const newComment = {
      id: Math.floor(Math.random() * 1000),
      title: input,
      des: textarea,
      bg: bg,
    };
    setComments([...comments, newComment]);
  };

  const removeHandler = (id) => {
    const remove = comments.filter((e) => e.id !== id);
    setComments(remove);
  };

  useEffect(() => {
    const saveComments = JSON.parse(localStorage.getItem("comment")) || [];
    if (saveComments) setComments(saveComments);
  }, []);

  useEffect(() => {
    if (comments.length) {
      localStorage.setItem("comment", JSON.stringify(comments));
    }
  }, [comments]);
  console.log("comments", comments);
  return (
    <div>
      <Navigation />
      <main className="mx-4">
        <section className="box-newComments me-5">
          <NewComment
            addHandler={addHandler}
            comments={comments}
            setComments={setComments}
          />
        </section>
        <section className="box-comments w-100 gap-4 mt-4 ">
          <CommentList comments={comments} removeHandler={removeHandler} />
        </section>
      </main>
    </div>
  );
};

export default Discussion;
