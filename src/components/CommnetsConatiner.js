import React from "react";
import { FaUserTie } from "react-icons/fa";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
const CommentsContainer = () => {
  const updatedComments = [
    {
      name: "@techguru",
      text: "This video is so informative! When is the next one coming out? I'm hooked on your content!",
      reply: [
        {
          name: "Alice Doe",
          text: "Totally agree! The explanation is so clear and concise. Can't wait for the next episode!",
          reply: [],
        },
      ],
    },
    {
      name: "@code_master",
      text: "Your tutorials are amazing! Can you make a video on advanced React hooks?",
      reply: [
        {
          name: "John Smith",
          text: "Yes, please! An advanced React hooks video would be incredibly helpful!",
          reply: [],
        },
        {
          name: "Jane Doe",
          text: "Advanced hooks would be great! I always learn something new from your videos.",
          reply: [],
        },
      ],
    },
    {
      name: "@foodie123",
      text: "I love how you keep traditional recipes alive! Your cooking style is so unique and enjoyable.",
      reply: [
        {
          name: "Michael Baker",
          text: "I agree! It's like a journey back in time with every recipe. Thank you for sharing!",
          reply: [],
        },
        {
          name: "Sarah Lee",
          text: "Traditional recipes are the best! Keep them coming!",
          reply: [],
        },
      ],
    },
    {
      name: "@musiclover",
      text: "Your music gives me chills! When can we expect the next album? Loving every track!",
      reply: [
        {
          name: "Emily Rose",
          text: "Your voice is incredible! Can't wait for the next album!",
          reply: [],
        },
        {
          name: "David King",
          text: "Each track is a masterpiece. Keep up the amazing work!",
          reply: [],
        },
        {
          name: "Sophia Green",
          text: "Your music is my escape. Thank you for creating such beautiful songs.",
          reply: [],
        },
      ],
    },
    {
      name: "@naturephotographer",
      text: "Stunning photography! Can you do a tutorial on capturing landscapes?",
      reply: [
        {
          name: "Liam Johnson",
          text: "Yes, a landscape photography tutorial would be fantastic! Your photos are breathtaking.",
          reply: [],
        },
      ],
    },
    {
      name: "@codingenthusiast",
      text: "Thank you for making complex topics so easy to understand. What's next on the agenda?",
      reply: [
        {
          name: "Olivia Brown",
          text: "I second this! Your teaching style is the best. Excited to see what's next.",
          reply: [],
        },
        {
          name: "James White",
          text: "You make learning so much fun. Keep up the great work!",
          reply: [],
        },
      ],
    },
    {
      name: "@chefdelight",
      text: "Your recipes are a delight to watch and try out. Any tips for beginners?",
      reply: [
        {
          name: "Emma Williams",
          text: "Great question! Tips for beginners would be so helpful!",
          reply: [],
        },
        {
          name: "Noah Brown",
          text: "Love your recipes! Tips for beginners would be appreciated.",
          reply: [],
        },
      ],
    },
    {
      name: "@techsavvy",
      text: "Impressive video as always! Could you do a deep dive into asynchronous programming?",
      reply: [
        {
          name: "Lucas Martin",
          text: "Yes, please! Asynchronous programming is a topic I'd love to see covered in detail.",
          reply: [],
        },
        {
          name: "Mia Wilson",
          text: "An in-depth video on async programming would be great. Your content is top-notch!",
          reply: [],
        },
        {
          name: "Benjamin Anderson",
          text: "Agreed! Asynchronous programming can be tricky. A detailed video would be awesome.",
          reply: [],
        },
      ],
    },
  ];

  const Comment = ({ data }) => {
    const { name, text} = data;
    return (
      <div className="flex w-3/4">
        <FaUserTie className="rounded-full mt-1 border border-gray-400 text-3xl" />
        <div className="px-3">
          <p className="font-bold">{name}</p>
          <p>{text}</p>
          <p className="flex text-25 mt-2">
            {" "}
            <FiThumbsUp className="mx-2 mr-3 mt-1" />
            652
            <FiThumbsDown className="mx-2 mr-3 ml-3 mt-2" />
            25
            <span className="ml-5"> Reply</span>
          </p>
        </div>
      </div>
    );
  };

  const CommentList = ({ comments }) => {
    return comments.map((comment, index) => (
      <div key={index}>
        <Comment data={comment} />
        {comment.reply.length > 0 && (
          <div className="pl-5 ml-5">
            <CommentList comments={comment.reply} />
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="m-5 p-2 bg-gray-100 rounded-lg">
      <CommentList comments={updatedComments} />
    </div>
  );
};

export default CommentsContainer;
