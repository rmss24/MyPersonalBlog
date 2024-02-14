import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useLocation } from "react-router-dom";

import './home.css'

function Home({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");
  useEffect(() => { 
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();

  },);

  const deletePost = async(id) =>{
    const postDoc = doc(db, "posts", id )
    await deleteDoc(postDoc);
};

  return (
    <div className="homePage">
      {postLists.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <div className='postString'>
            <h3>@{post.author.name}</h3>
            <div className="deletePost">
              {isAuth && post.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    {" "}
                    Elimina
                  </button>
                )}
              </div>
              </div>
              <div className="title">
                <h1> {post.title}</h1>
              </div>
            </div>

            <div className="postTextContainer"> <p>{post.posts} </p></div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;