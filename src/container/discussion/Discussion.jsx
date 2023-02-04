import { useState, useEffect } from "react";
import NewComment from "./../../components/newComment/NewComment";
import CommentList from "../../components/commentList/CommentList";
import Navigation from "../../components/navigation/Navigation";

const note = [
  {
    id: 1,
    title: "javaScript",
    des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eligendi nesciunt amet blanditiis doloribus quae, officia voluptate ab doloremque laboriosam saepe architecto est aut quod! Necessitatibus voluptates ipsum accusantium, officiis cupiditate architecto perferendis magnam consequatur repellendus voluptas veritatis velit. Itaque, sapiente esse voluptas sequi fugit non voluptates repudiandae quae quod eos debitis aliquam? Molestiae hic optio recusandae dolor, dignissimos exercitationem ea minus necessitatibus voluptatum, deserunt cupiditate qui, nobis magni quam iste eligendi temporibus impedit ipsa vel non illo earum! Fugiat ratione laboriosam dicta ut temporibus id corporis cumque debitis sed ab, corrupti dolores hic rerum. Voluptates nostrum consectetur voluptatibus laudantium.",
    background: "#fee2e2",
  },
  {
    id: 2,
    title: "javaScript",
    des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eligendi nesciunt amet blanditiis doloribus",
    background: "#fee2e2",
  },
  {
    id: 3,
    title: "javaScript",
    des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eligendi nesciunt amet blanditiis doloribusLorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eligendi nesciunt amet blanditiis doloribus",
    background: "#fee2e2",
  },
  {
    id: 4,
    title: "javaScript",
    des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eligendi nesciunt amet blanditiis doloribusLorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eligendi nesciunt amet blanditiis doloribusLorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eligendi nesciunt amet blanditiis doloribusLorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eligendi nesciunt amet blanditiis doloribusLorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eligendi nesciunt amet blanditiis doloribus",
    background: "#fee2e2",
  },
  {
    id: 5,
    title: "javaScript",
    des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eligendi nesciunt amet blanditiis doloribus",
    background: "#fee2e2",
  },
  {
    id: 6,
    title: "javaScript",
    des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eligendi nesciunt amet blanditiis doloribus",
    background: "#fee2e2",
  },
  {
    id: 7,
    title: "javaScript",
    des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eligendi nesciunt amet blanditiis doloribus",
    background: "#fee2e2",
  },
  {
    id: 8,
    title: "javaScript",
    des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eligendi nesciunt amet blanditiis doloribus Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eligendi nesciunt amet blanditiis doloribusLorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eligendi nesciunt amet blanditiis doloribus",
    background: "#fee2e2",
  },
];

const Discussion = () => {
  const [comments, setComments] = useState([]);

  const addHandler = (input, textarea) => {
    const newComment = {
      id: Math.floor(Math.random() * 1000),
      title: input,
      des: textarea,
    };
    setComments([...comments, newComment]);
  };

  const removeHandler = (id) => {
    const remove = comments.filter((e) => e.id !== id);
    setComments(remove);
  };

  useEffect(() => {
    const saveComments = JSON.parse(localStorage.getItem("comment"));
    if (saveComments) setComments(saveComments);
  }, []);

  useEffect(() => {
    localStorage.setItem("comment", JSON.stringify(comments));
  }, [comments]);

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
