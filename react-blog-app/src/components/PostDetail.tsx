import { Link} from "react-router-dom";

export default function PostDetail() {
    return <>
        <div className="post__detail">
            <div className="post__box">
                <div className="post__title">This is Title</div>
                <div className="post__profile-box">
                    <div className="post__profile"/>
                    <div className="post__author-name">패스트 캠퍼스</div>
                    <div className="post__date">2025.03.02 일요일</div>
                </div>
                <div className="post__utils-box">
                    <div className="post__delete">삭제</div>
                    <div className="post__edit">
                        <Link to={`/posts/edit/1`} >수정</Link>
                    </div>
                </div>
                <div className="post__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>
        </div>
    </>
}