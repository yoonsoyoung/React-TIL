import { useState} from "react";
import {Link} from "react-router-dom";

interface PostListProps {
    hasNavigation?: boolean;
}

type TabType = "all" | "my";
export default function PostList({ hasNavigation = true}: PostListProps) {
    const [activeTab, setActiveTab] = useState<TabType>("all");

    return (
        <>
            { hasNavigation && (
                <div className="post__navigation">
                    <div
                        role="presentation"
                        onClick={()=> setActiveTab("all")}
                        className={activeTab == 'all' ? 'post__navigation--active' : ''}>전체
                    </div>
                    <div role="presentation"
                         onClick={()=> setActiveTab("my")}
                         className={activeTab == 'my' ? 'post__navigation--active' : ''}>나의 글
                    </div>
                </div>
            )}
            <div className="post__list">
                {[...Array(10)].map((e, index) => (
                    <div key={index} className="post__box">
                    <Link to={`/posts/${index}`}>
                                <div className="post__profile-box">
                                    <div className="post__profile"/>
                                    <div className="post__author-name">작성자명</div>
                                    <div className="post__date">2024.10.15 화요일</div>
                                </div>
                                <div className="post__title">게시글 {index}</div>
                                <div className="post__text">
                                    내용내용
                                </div>
                                <div className="post__utils-box">
                                    <div className="post__delete">삭제</div>
                                    <div className="post__edit">수정</div>
                                </div>
                            </Link>
                        </div>
                    ))}
            </div>
        </>
    );
}