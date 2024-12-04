import React, { useEffect, useState } from "react";
import axios from "axios";
import API_URL from "./global";
import moment from "moment";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";

export default function SingleContent() {
  const { id } = useParams();
  const [suggestedBlogs, setSuggestedBlogs] = useState([]);
  const [blog, setBlog] = useState({});
  const [popupOpened, setPopupOpened] = useState(false);
  // const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let isMounted = true;

    const fetchBlog = async () => {
      try {
        console.log(`Fetching blog with ID: ${id}`);
        const response = await axios.get(`${API_URL}/blog/get/${id}`);
        if (isMounted) {
          setBlog(response.data);
        }
      } catch (error) {
        console.error("Error fetching Blog:", error);
      }
    };

    const incrementViews = async () => {
      try {
        await axios.put(`${API_URL}/blog/view/${id}`);
      } catch (error) {
        console.error("Error incrementing view count:", error);
      }
    };

    fetchBlog();
    incrementViews();

    return () => {
      isMounted = false;
    };
  }, [id]);

  useEffect(() => {
    if (blog.type) {
      const fetchBlogs = async () => {
        try {
          console.log(`Fetching blogs of type: ${blog.type}`);
          const response = await axios.get(
            `${API_URL}/blog/all?type=${blog.type}`
          );
          setSuggestedBlogs(response.data);
        } catch (error) {
          console.error("Error fetching suggested blogs:", error);
        }
      };

      fetchBlogs();
    }
  }, [blog.type]);

  useEffect(() => {
    if (location.hash === "#popup1") {
      setPopupOpened(true);
    }
  }, [location.hash]);

  const handlePopupClose = () => {
    setPopupOpened(false);
    window.history.replaceState({}, document.title, window.location.pathname);
  };

  // const handleReadMore = (blogId) => {
  //   navigate(`/blogtype/${blogId}`);
  // };

  const handleLike = async () => {
    try {
      await axios.put(`${API_URL}/blog/like/${id}`);
    } catch (error) {
      console.error("Error liking Blog:", error);
    }
  };
  return (
    <>
      <div id="site-content" className="site-content clearfix">
        <div id="inner-content" className="inner-content-wrap">
          <article className="hentry data-effect">
            <div className="post-media data-effect-item has-effect-icon offset-v-25 offset-h-24 clerafix"></div>
            <div className="post-content-wrap clearfix">
              <h2 className="post-title">
                <span className="post-title-inner">{blog.title}</span>
              </h2>
              <div className="post-meta">
                <div className="post-meta-content">
                  <div className="post-meta-content-inner">
                    <span className="post-date item">
                      <span className="inner">
                        <span className="entry-date">
                          {moment(blog.createdAt).format(
                            "MMMM Do YYYY, h:mm:ss a"
                          )}
                        </span>
                      </span>
                    </span>
                    <span className="post-by-author item">
                      <span className="inner">
                        <Link to="#">By: {blog.author}</Link>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="post-content post-excerpt margin-bottom-43">
                <p
                  className="line-height-27 letter-spacing-005"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
              </div>
            </div>
          </article>
        </div>
        <div
          className="themesflat-spacer clearfix"
          data-desktop={80}
          data-mobile={60}
          data-smobile={60}
        />
      </div>
    </>
  );
}
