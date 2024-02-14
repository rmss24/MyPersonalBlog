import React, { useState, useEffect } from "react";
import { setDoc, collection, addDoc } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";
import { getDownloadURL } from "firebase/storage";
import { FaFile } from "react-icons/fa";

import './createPost.css';

function CreatePost({ isAuth }) {
  const [posts, setPost] = useState("");
  const [title, setTitle] = useState("");

  const postsCollection = collection(db, 'posts');
  let navigate = useNavigate();

  const createPost = async () => {
    // Use addDoc to add a new document to the 'posts' collection
    const docRef = await addDoc(postsCollection, {
      title,
      posts,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });

    // Call the upload function to upload the image to storage
    navigate('/');
  };

  useEffect(() => {
    if (!auth.currentUser) {
      navigate('/login');
    }
  }, []);

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create A Post</h1>
        <div className="inputGp">
          <input
            placeholder="Title..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <textarea
            placeholder="Post..."
            onChange={(event) => {
              setPost(event.target.value);
            }}
          /><br></br>
        </div>
        <button className="createpostbutton" onClick={createPost}>Submit Post</button>
      </div>
    </div>
  );
}

export default CreatePost;
