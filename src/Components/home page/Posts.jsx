import React, { useState } from "react";
import { Box, Button, Card} from "@mui/material";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import Profile from "../images/profile.jpg";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import postImage from "../images/postImage.jpg";
import postImage1 from "../images/postImage1.jpg";
import postImage2 from "../images/postImage2.jpg";
import postImage3 from "../images/postImage3.jpg";
import postImage4 from "../images/postImage4.jpg";
import postImage5 from "../images/postImage5.jpg";
import postImage6 from "../images/postImage6.jpg";
import postImage7 from "../images/postImage7.jpg";
import postImage8 from "../images/postImage8.jpg";
import postProfile from "../images/postProfile.jpg";
import postProfile1 from '../images/postProfile1.jpg';
import postProfile2 from '../images/postProfile2.jpg';
import postProfile3 from '../images/postProfile3.jpg';
import postProfile4 from '../images/postProfile4.jpg';
import postProfile6 from '../images/postProfile6.jpg';
import postProfile7 from '../images/postProfile7.jpg';
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([
    {
        user: {
          name: "Xwave",
          profilePicture: postProfile,
          timePosted: "January 31 at 12:31 PM .",
        },
        postContent: {
          text: "We proudly announce that Muneem — our alumni of Cohort 2  is successfully placed in Foxmind Tech as Frontend developer.You can also become financially independent like Muneem.Contact xWave Today:…",
          images: [postImage7],
        },
        reactions: {
          likes: 387,
          comments: [],
        },
        liked: false,
        showComments: false,
        commentText: "",
    },
    {
      user: {
        name: "Xwave",
        profilePicture: postProfile,
        timePosted: "Feburary 20 at 1:03 PM",
      },
      postContent: {
        text: "We proudly announce that Sidra Channa, our alumna from Cohort-1, has been successfully placed at Progmize as a UI/UX Designer! Want to achieve financial independence like Sidra…",
        images: [postImage],
      },
      reactions: {
        likes: 59,
        comments: [],
      },
      liked: false,
      showComments: false,
      commentText: "",
    },
    {
        user: {
          name: "Syed Musawir",
          profilePicture: Profile,
          timePosted: "February 15 at 9:30 PM .",
        },
        postContent: {
          text: "Rise. Hustle. Conquer. 💪✨",
          images: [postImage5],
        },
        reactions: {
          likes: 560,
          comments: [],
        },
        liked: false,
        showComments: false,
        commentText: "",
    },
    {
      user: {
        name: "Khayalat",
        profilePicture: postProfile1,
        timePosted: "12m .",
      },
      postContent: {
        text: "",
        images: [postImage1],
      },
      reactions: {
        likes: 599,
        comments: [],
      },
      liked: false,
      showComments: false,
      commentText: "",
    },
    {
      user: {
        name: "Insane TypeWriter",
        profilePicture: postProfile3,
        timePosted: "Feburary 26 at 10:30 PM",
      },
      postContent: {
        text: "I hope he never becomes part of PCB management in any capacity because the moment the team loses a match, they’ll start disrespecting him without a second thought. My Goat deserves to stay happy forever",
        images: [postImage3],
      },
      reactions: {
        likes: 511,
        comments: [],
      },
      liked: false,
      showComments: false,
      commentText: "",
    },
    {
      user: {
        name: "Cricket Gyan",
        profilePicture: postProfile2,
        timePosted: "1h .",
      },
      postContent: {
        text: "\u{1F602} \u{1F602} \u{1F602} \u{1F602}",
        images: [postImage2],
      },
      reactions: {
        likes: 998,
        comments: [],
      },
      liked: false,
      showComments: false,
      commentText: "",
    },
    {
      user: {
        name: "Kaif Alam",
        profilePicture: postProfile4,
        timePosted: "February 25 at 9:30 PM .",
      },
      postContent: {
        text: "\u{1F602} Clown vs Clown match \u{1F602}",
        images: [postImage4],
      },
      reactions: {
        likes: 160,
        comments: [],
      },
      liked: false,
      showComments: false,
      commentText: "",
    },
    {
      user: {
        name: "Saturn",
        profilePicture: postProfile6,
        timePosted: "February 25 at 9:30 PM .",
      },
      postContent: {
        text: "When you post a deep status then your friend come and ruins it: \u{1F602}",
        images: [postImage6],
      },
      reactions: {
        likes: 687,
        comments: [],
      },
      liked: false,
      showComments: false,
      commentText: "",
    },
    {
      user: {
        name: "Lame Joke",
        profilePicture: postProfile7,
        timePosted: "January 31 at 12:31 PM .",
      },
      postContent: {
        text: "Ary Rizwan Bhai .....🙏🤡",
        images: [postImage8],
      },
      reactions: {
        likes: 387,
        comments: [],
      },
      liked: false,
      showComments: false,
      commentText: "",
    },
  ]);

  const handleLike = (index) => {
    setPosts((prevPosts) =>
      prevPosts.map((post, i) => {
        if (i === index) {
          return {
            ...post,
            liked: !post.liked,
            reactions: {
              ...post.reactions,
              likes: post.liked
                ? post.reactions.likes - 1
                : post.reactions.likes + 1,
            },
          };
        }
        return post;
      })
    );
  };

  const handleCommentToggle = (index) => {
    setPosts((prevPosts) =>
      prevPosts.map((post, i) => {
        if (i === index) {
          return { ...post, showComments: !post.showComments };
        }
        return post;
      })
    );
  };

  const handleCommentChange = (index, text) => {
    setPosts((prevPosts) =>
      prevPosts.map((post, i) => {
        if (i === index) {
          return { ...post, commentText: text };
        }
        return post;
      })
    );
  };

  const handleAddComment = (index) => {
    setPosts((prevPosts) =>
      prevPosts.map((post, i) => {
        if (i === index && post.commentText.trim() !== "") {
          return {
            ...post,
            reactions: {
              ...post.reactions,
              comments: [...post.reactions.comments, post.commentText],
            },
            commentText: "",
          };
        }
        return post;
      })
    );
  };

  return (
    <>
      <Box className="my-3">
        <Card className="py-4 px--2 rounded-3">
          <Box className="d-flex align-items-center ms-2">
            <Link to={"/profile"}>
            <img
              src={Profile}
              className="rounded-circle img-fluid"
              style={{
                width: "40px",
                height: "40px",
                objectFit: "cover",
                cursor: "pointer",
              }}
              alt="Profile"
            />
            </Link>
            <input
              type="text"
              placeholder="What on your mind, Musawir"
              className="p-2 rounded-pill bg-body-tertiary border border-1 w-75 mx-2"
            />
          </Box>

          <hr />

          <Box className="d-flex align-items-center flex-grow-1 gap-2">
            {/* live section */}
            <Button
              variant="outline"
              className="d-flex align-items-center gap-1 hover-1"
            >
              <VideoCameraBackIcon className="text-danger" />
              <span className="text-secondary" style={{ fontSize: "11px" }}>
                Live 
              </span>
            </Button>

            {/* photo */}
            <Button
              variant="outline"
              className="d-flex align-items-center gap-1 hover-1"
            >
              <PhotoSizeSelectActualIcon className="text-success" />
              <span className="text-secondary" style={{ fontSize: "11px" }}>
                Photo/Video
              </span>
            </Button>

            {/* Feeling/activity section */}
            <Button
              variant="outline"
              className="d-flex align-items-center gap-1 hover-1"
            >
              <EmojiEmotionsIcon className="text-warning" />
              <span className="text-secondary" style={{ fontSize: "11px" }}>
                Feeling/activity
              </span>
            </Button>
          </Box>
        </Card>
      </Box>
      <div className="container py-4 d-flex w-100 flex-column align-items-center">
        {posts.map((post, index) => (
          <div key={index} className="card w-100 shadow-sm my-2">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <img
                  src={post.user.profilePicture}
                  alt="Profile"
                  className="rounded-circle me-2"
                  style={{ width: "40px", height: "40px", cursor: "pointer" }}
                />
                <div>
                  <h6 className="mb-0" style={{cursor:"pointer"}}>{post.user.name}</h6>
                  <small className="text-muted">{post.user.timePosted}</small>
                </div>
              </div>
              <div className="mt-3">
                <p>{post.postContent.text}</p>
              </div>
              <hr/>
              {post.postContent.images.map((image, i) => (
                <img
                  key={i}
                  src={image}
                  alt="Post"
                  style={{ height: "450px", objectFit: "cover",cursor:"pointer" }}
                  className="img-fluid w-100 rounded"
                />
              ))}
            </div>
            <div className="card-footer d-flex justify-content-between">
              <button
                className="btn btn-light"
                onClick={() => handleLike(index)}
              >
                <ThumbUpIcon style={{ color: post.liked ? "blue" : "gray" }} />{" "}
                {post.reactions.likes} Likes
              </button>
              <button
                className="btn btn-light"
                onClick={() => handleCommentToggle(index)}
              >
                <ChatBubbleOutlineIcon /> {post.reactions.comments.length}{" "}
                Comments
              </button>
            </div>
            {post.showComments && (
              <div className="p-3 border-top">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Write a comment..."
                  value={post.commentText}
                  onChange={(e) => handleCommentChange(index, e.target.value)}
                />
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleAddComment(index)}
                >
                  Comment
                </button>
                {post.reactions.comments.map((comment, i) => (
                    <div key={i} className="mt-2">
                    <strong className="d-flex align-items-center gap-2">
                      {" "}
                      <img
                        className="rounded-circle object-fit-cover"
                        style={{ width: "40px", height: "40px" }}
                        src={Profile}
                        />{" "}
                      Syed Musawir:
                    </strong>{" "}
                    {comment}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
