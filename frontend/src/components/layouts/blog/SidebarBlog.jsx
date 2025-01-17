import { useState, useEffect } from "react";
import API_URL from "./global";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import moment from "moment";
import axios from "axios";

export default function SidebarBlog() {
  const [blog, setBlog] = useState([]);
  const [type, setType] = useState("all");
  const fetchBlogs = async () => {
    // setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/blog/all?type=${type}`);
      setBlog(response.data);
      // setLoading(false);
    } catch (error) {
      console.error("Error fetching forum stats:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [type]);

  const handleTypeChange = (type) => {
    setType(type);
  };

  const images = [
    { url: "images/Rectangle 24 (2).png" },
    { url: "images/Rectangle 59 (1).png" },
  ];

  const [showButton, setShowButton] = useState(false);
  const CredentialEmail = localStorage.getItem("EmailInput");
  const CredentialPassword = localStorage.getItem("PasswordInput");
  useEffect(() => {
    const CredentialEmail = localStorage.getItem("EmailInput");
    const CredentialPassword = localStorage.getItem("PasswordInput");

    if (
      CredentialEmail === "sales@Chemcoats.com" &&
      CredentialPassword === "1234"
    ) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, []);

  return (
    <>
      <div id="sidebar">
      <Helmet>
          <title>Chemcoats Blogs</title>
          <meta
            name="description"
            content="Chemcoats Blogs provide expert insights, tips, and updates on industrial flooring solutions, coatings, and surface treatments. Stay informed with the latest trends, product reviews, and industry best practices for maintaining durable, high-performance floors."
          />
         
          <meta name="author" content="Your Company Name" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://www.chemcoats.com/blog" />
        </Helmet>
        <div
          className="themesflat-spacer clearfix"
          data-desktop={0}
          data-mobile={60}
          data-smobile={60}
        />
        <div id="inner-sidebar" className="inner-content-wrap">
          <div className="widget widget_lastest">
            <h2 className="widget-title">
              <span>RECENT BLOG</span>

              {showButton && (
                <div>
                  <div>
                    <button
                      onClick={() => {
                        window.location.href = "/createblog";
                      }}
                      style={{
                        marginTop: "10px",
                        width: "150px",
                        padding: "0px",
                        height: "30px",
                      }}
                    >
                      Create Blog
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        window.location.href = "/login";
                      }}
                      style={{
                        marginTop: "10px",
                        width: "150px",
                        padding: "0px",
                        height: "30px",
                      }}
                    >
                      Login
                    </button>
                  </div>
                </div>
              )}
            </h2>
            <ul className="lastest-posts data-effect clearfix">
              {blog.length > 0 ? (
                blog
                  .slice()
                  .reverse()
                  .map((blogitem, index) => (
                    <li className="clearfix">
                      <div className="thumb data-effect-item has-effect-icon ">
                        <img
                          className="blogSiderbarImage"
                          src={blogitem.thumbnail}
                          alt={blogitem.title}
                          title={blogitem.title}
                        />
                        {/* <div className="overlay-effect bg-color-2" />
                        <div className="elm-link">
                          <Link to="/blog-single" className="icon-2" />
                        </div> */}
                      </div>
                      <div className="text">
                        <h3>
                          <Link
                            onClick={() => {
                              const slug = blogitem.title.toLowerCase().split(" ").join("-");
                              window.location.href = `/blog/${slug}`;
                            }}
                          >
                            {blogitem.title.slice(0, 40)}...
                          </Link>
                        </h3>
                        <span className="post-date">
                          <span className="entry-date">
                            {moment(blogitem.createdAt).format("DD-MM-YYYY")}
                          </span>
                        </span>
                      </div>
                    </li>
                  ))
              ) : (
                <p>No blogs found.</p>
              )}

              {/* <li className="clearfix">
                <div className="thumb data-effect-item has-effect-icon ">
                  <img src="assets/img/news/post-1-65x65.jpg" alt="imagealt" />
                  <div className="overlay-effect bg-color-2" />
                  <div className="elm-link">
                    <Link to="/blog-single" className="icon-2" />
                  </div>
                </div>
                <div className="text">
                  <h3>
                    <Link to="/blog-single">
                      SMART BUILDING WITH CONCRETE SUSTAINABLE
                    </Link>
                  </h3>
                  <span className="post-date">
                    <span className="entry-date">29 June 2018</span>
                  </span>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
