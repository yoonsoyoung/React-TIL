import React, {useContext, useEffect, useState} from "react";
import {collection, addDoc, doc, getDoc, updateDoc} from "firebase/firestore";
import { db } from "firebaseApp";
import AuthContext from "../context/AuthContext";

import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {PostProps} from "./PostList";

export default function PostForm() {
    const params = useParams(); // 수정,작성 구분
    const [post, setPost] = useState<PostProps | null>(null);
    const [ title, setTitle ] = useState<string>("");
    const [ summary, setSummary ] = useState<string>("");
    const [ content, setContent ] = useState<string>("");
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
          if(post) {
              // 만약 post 데이터가 있다면 firestore로 데이터 수정
              const postRef = doc(db, "posts", post?.id);
              await updateDoc(postRef, {
                  title: title,
                  summary: summary,
                  content: content,
                  updateAt: new Date()?.toLocaleString(),
              });

              toast?.success("게시글을 수정했습니다.");
              navigate(`/posts/${post.id}`);
          } else {
              // firestore로 데이터 생성
              await addDoc(collection(db, "posts"), {
                  title: title,
                  summary: summary,
                  content: content,
                  createAt: new Date()?.toLocaleString(),
                  email: user?.email,
                  uid: user?.uid,
              });

              toast?.success("게시글을 생성했습니다.");
              navigate("/");
          }

      } catch (e: any) {
          console.log(e);
          toast?.error(e.code);
      }
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {
            target: {name, value},
        } = e;

        if(name === "title") {
            setTitle(value);
        }
        if(name === "summary") {
            setSummary(value);
        }
        if(name === "content") {
            setContent(value);
        }
    }

    const getPost = async (id: string) => {
        if(id) {
            const docRef = doc(db, "posts", id);
            const docSnap = await getDoc(docRef);

            setPost({ ...(docSnap.data() as PostProps), id: docSnap.id });
        }
    };

    useEffect(() => {
        if(params?.id) getPost(params?.id);
    }, [params?.id]);

    useEffect(() => {
        if(post) {
            setTitle(post?.title);
            setSummary(post?.summary);
            setContent(post?.content);
        }
    }, [post]);

    return (
        <form onSubmit={onSubmit} className="form">
            <div className="form__block">
                <label htmlFor="title">제목</label>
                <input type="text" name="title" id="title" required onChange={onChange} value={title} />
            </div>
            <div className="form__block">
                <label htmlFor="summary">요약</label>
                <input type="text" name="summary" id="summary" required onChange={onChange} value={summary} />
            </div>
            <div className="form__block">
                <label htmlFor="content">내용</label>
                <textarea name="content" id="content" required onChange={onChange} value={content} />
            </div>
            <div className="form__block">
                <input type="submit" value={post ? '수정' : '제출'} className="form__btn--submit" />
            </div>
        </form>
)
}