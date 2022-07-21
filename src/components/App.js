import { useState } from "react";
import video from "../data/video.js";

function App() {
  const [upvotes, setUpvotes] = useState(video.upvotes)
  const [downvotes, setDownvotes] = useState(video.upvotes)

  const [showComment, setShowComment] = useState({ isHidden: true });
  function toggleHidden() {
    setShowComment({ isHidden: !showComment.isHidden });
  }
  console.log(showComment.isHidden)

  const style = { visibility: showComment.isHidden ? 'hidden' : 'visible' };

  const [comments, setComment] = useState(video.comments)
  function toggleComments()
  {
    setComment(comments !== "" )
  }



  return (
    <div className="App container mt-4">
      <h2>ReactTube</h2>
      <div className=" text-center bg-dark">
        <iframe
          width="919"
          height="525"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          frameBorder="0"
          allowFullScreen
          title="Thinking in React"
        />
      </div>
      <div className="text-center bg-dark">
            <iframe className="text-center"
              width="919" height="525"
              src={video.embedUrl}
              frameBorder="0" allowFullScreen title="Thinking in React" />
          
          <div className="description text-left  bg-light p-5">
            <div className="row">
                <h5 className="col-md-7">{video.title}</h5>
                <h5 className="col-md-5 text-right">{video.views} views</h5>
            </div> 
            <div className="row">
                <h5 className="col-md-7"></h5>
                <h5 className="col-md-5 text-right">
                  <span className="pl-5 btn border-none" onClick={()=>setUpvotes(upvotes+1) } >👍 {upvotes} </span>
                  <span className="pl-5 btn border-none" onClick={()=>setDownvotes(downvotes+1) }>👎 {downvotes}</span>
                </h5>
            </div> 

            <div className="px-4"  >
              <div className="row">
                <h5 className="col">Comments</h5>
                <div className="col text-right float-right">
                  <button onClick={toggleHidden} className="btn btn-sm btn-outline-success ">
                   {showComment.isHidden?"Show Comments":"Hide Comments"} 
                  </button>
                </div> 
              </div> 
              <div style={style}>
              {
                comments.map((comment)=>(
                  <div key={comment.id} className="card p-4 mr-5 mt-1">
                    <p>By <strong>{comment.user}</strong></p>
                     {comment.comment}
                  </div>
                ))
              }
              </div>
            </div>

          </div>
      </div>
    </div>
  );
}

export default App;
