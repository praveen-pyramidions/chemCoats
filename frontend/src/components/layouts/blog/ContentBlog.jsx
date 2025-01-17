import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API_URL from "./global";
import moment from "moment";
import axios from "axios";

export default function ContentBlog() {
  const [blog, setBlog] = useState([]);
  const [type, setType] = useState("all");

  console.log(blog);

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

  return (
    <>
      <div id="site-content" className="site-content clearfix">
        <div id="inner-content" className="inner-content-wrap">
          {blog.map((blogitem, index) => {

            const content = blogitem.content.match(/<(div|p)[^>]*>(.*?)<\/\1>/gi)
            ?.map(tag => tag.replace(/<\/?[^>]+>/g, "").trim()) 
            .join(" ").trim().slice(0, 160).replace(/&nbsp;/g, " ").replace(/&nbsp;/g, " ")+"....." || "";  
            

            const slug =blogitem.title.toLowerCase().split(" ").join("-");

            return (
              <article
                className="hentry data-effect flexmainfidn45"
                key={blogitem.id}
              >
                <div className="post-media data-effect-item has-effect-icon offset-v-25 offset-h-24clerafix">
                  <Link
                    onClick={() => {
                      window.location.href = `/blog/${slug}`;
                      localStorage.setItem('blogid', blogitem._id);

                    }}
                  >
                    <img
                      // src={blogitem.srcimg}
                      src={blogitem.thumbnail}
                      alt="altimage"
                    />
                  </Link>

                  <div className="post-calendar">
                    <span className="inner">
                      <span className="entry-calendar">
                        <span className="day">
                          {moment(blogitem.createdAt).format("D")}
                        </span>
                        <span className="month">
                          {moment(blogitem.createdAt).format("MMM")}
                        </span>

                        {/* {moment(blogitem.createdAt).format("MMMM Do YYYY")} */}
                        {/* <span className="day">23</span>
                      <span className="month">May</span> */}
                      </span>
                    </span>
                  </div>
                  {/* <div className="overlay-effect bg-color-1" /> */}
                  {/* <div className="elm-link">
                  <Link to="/blog-single" className="icon-1" />
                </div> */}
                </div>
                <div className="post-content-wrap clearfix widthRightside">
                  <h2 className="post-title">
                    <span className="post-title-inner">
                      <Link
                        className="newblogtitlename"
                        onClick={() => {
                          window.location.href = `/blogtype/${blogitem._id}`;

                        }}
                      >
                        {blogitem.title}
                      </Link>
                    </span>
                  </h2>
                  <div className="post-meta">
                    {/* <div className="post-meta-content">
                    <div className="post-meta-content-inner">
                      <span className="post-date item">
                        <span className="inner">
                          <span className="entry-date">
                            {blogitem.month}
                            {blogitem.day}, 2018
                          </span>
                        </span>
                      </span>
                      <span className="post-by-author item">
                        <span className="inner">
                          <Link to="#">
                            By:
                            {blogitem.author}
                          </Link>
                        </span>
                      </span>
                      <span className="comment item">
                        <span className="inner">
                          <Link to="#">
                            {blogitem.comments}
                            Comments
                          </Link>
                        </span>
                      </span>
                    </div>
                  </div> */}
                  </div>
                  <div className="post-content post-excerpt">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: content
                      }}
                    />
                  </div>
                  <div className="post-read-more">
                    <div className="post-link">
                      <Link
                        className="readmorebuttopnjf4"
                        onClick={() => {
                          window.location.href = `/blog/${slug}`;
                          localStorage.setItem('blogid', blogitem._id);
                        }}
                      >
                        READ MORE
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
}

// class ContentBlog extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       blogs: [
//         {
//           id: 1,
//           aritcles: "hentry data-effect",
//           classnames:
//             "post-media has-effect-icon offset-v-25 offset-h-24 data-effect-item clerafix",
//           srcimg: "assets/img/news/post-1-840x385.jpg",
//           title:
//             "BIG TECH WILL GET BIGGER IN 2018, WHILE MALLER PLAYERS LOOK FOR EXITS",
//           day: "23",
//           month: "MAY",
//           author: "Admin",
//           comments: "3",
//           descriptions:
//             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.",
//         },
//       ],
//     };
//   }

//   render() {
//     return (
{
  /* <div id="site-content" className="site-content clearfix">
  <div id="inner-content" className="inner-content-wrap">
    {this.state.blogs.map((data) => (
      <article className={blogitem.aritcles} key={blogitem.id}>
        <div className={blogitem.classnames}>
          <Link to="/blog-single">
            <img src={blogitem.srcimg} alt="altimage" />
          </Link>

          <div className="post-calendar">
            <span className="inner">
              <span className="entry-calendar">
                <span className="day">{blogitem.day}</span>
                <span className="month">{blogitem.month}</span>
              </span>
            </span>
          </div>
          <div className="overlay-effect bg-color-1" />
          <div className="elm-link">
            <Link to="/blog-single" className="icon-1" />
          </div>
        </div>
        <div className="post-content-wrap clearfix">
          <h2 className="post-title">
            <span className="post-title-inner">
              <Link to="/blog-single">{blogitem.title}</Link>
            </span>
          </h2>
          <div className="post-meta">
            <div className="post-meta-content">
              <div className="post-meta-content-inner">
                <span className="post-date item">
                  <span className="inner">
                    <span className="entry-date">
                      {blogitem.month}
                      {blogitem.day}, 2018
                    </span>
                  </span>
                </span>
                <span className="post-by-author item">
                  <span className="inner">
                    <Link to="#">
                      By:
                      {blogitem.author}
                    </Link>
                  </span>
                </span>
                <span className="comment item">
                  <span className="inner">
                    <Link to="#">
                      {blogitem.comments}
                      Comments
                    </Link>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="post-content post-excerpt">
            <p>{blogitem.descriptions}</p>
          </div>
          <div className="post-read-more">
            <div className="post-link">
              <Link to="page-blog-single.html">READ MORE</Link>
            </div>
          </div>
        </div>
      </article>
    ))}
  </div>
  <div
    className="themesflat-spacer clearfix"
    data-desktop={80}
    data-mobile={60}
    data-smobile={60}
  />
</div>; */
}
//     );
//   }
// }

// export default ContentBlog;
