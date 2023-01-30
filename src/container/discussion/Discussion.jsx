import { useState } from "react";
import NewComment from "./../../components/newComment/NewComment";
import Comments from "./../../components/comment/Comments";

const note = [
  {
    id: 1,
    title: "javaScript",
    des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eligendi nesciunt amet blanditiis doloribus quae, officia voluptate ab doloremque laboriosam saepe architecto est aut quod! Necessitatibus voluptates ipsum accusantium, officiis cupiditate architecto perferendis magnam consequatur repellendus voluptas veritatis velit. Itaque, sapiente esse voluptas sequi fugit non voluptates repudiandae quae quod eos debitis aliquam? Molestiae hic optio recusandae dolor, dignissimos exercitationem ea minus necessitatibus voluptatum, deserunt cupiditate qui, nobis magni quam iste eligendi temporibus impedit ipsa vel non illo earum! Fugiat ratione laboriosam dicta ut temporibus id corporis cumque debitis sed ab, corrupti dolores hic rerum. Voluptates nostrum consectetur voluptatibus laudantium.",
    background: "#fee2e2",
    height: "500px",
  },
  {
    id: 1,
    title: "javaScript",
    des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eligendi nesciunt amet blanditiis doloribus",
    background: "#fee2e2",
    height: "600px",
  },
  {
    id: 1,
    title: "javaScript",
    des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eligendi nesciunt amet blanditiis doloribusLorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eligendi nesciunt amet blanditiis doloribus",
    background: "#fee2e2",
    height: "200px",
  },
  {
    id: 1,
    title: "javaScript",
    des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eligendi nesciunt amet blanditiis doloribusLorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eligendi nesciunt amet blanditiis doloribusLorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eligendi nesciunt amet blanditiis doloribusLorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eligendi nesciunt amet blanditiis doloribusLorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eligendi nesciunt amet blanditiis doloribus",
    background: "#fee2e2",
    height: "600px",
  },
  {
    id: 1,
    title: "javaScript",
    des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eligendi nesciunt amet blanditiis doloribus",
    background: "#fee2e2",
    height: "600px",
  },
  {
    id: 1,
    title: "javaScript",
    des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eligendi nesciunt amet blanditiis doloribus",
    background: "#fee2e2",
    height: "200px",
  },
  {
    id: 1,
    title: "javaScript",
    des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eligendi nesciunt amet blanditiis doloribus",
    background: "#fee2e2",
    height: "300px",
  },
  {
    id: 1,
    title: "javaScript",
    des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eligendi nesciunt amet blanditiis doloribus Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eligendi nesciunt amet blanditiis doloribusLorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eligendi nesciunt amet blanditiis doloribus",
    background: "#fee2e2",
    height: "300px",
  },
];

const Discussion = () => {
  const [comment, setComment] = useState(note);
  return (
    <main className="mx-4">
      <section>nav</section>
      <section className="box-newComments me-5">
        <NewComment />
      </section>
      <section className="box-comments w-100 gap-4 mt-4 ">
        {comment ? (
          comment.map((c) => (
            <Comments
              key={c.id}
              title={c.title}
              des={c.des}
              background={c.background}
              height={c.height}
            />
          ))
        ) : (
          <p>loading...</p>
        )}
      </section>
    </main>
  );
};

export default Discussion;
