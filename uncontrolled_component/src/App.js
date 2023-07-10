import { useRef } from "react";
import "./App.css";

function App() {
  const titleRef=useRef(null)
  const postRef=useRef(null)
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(titleRef.current.value)
    console.log(postRef.current.value)
    
  }
  return (
    <div>
      <h1>Uncontrolled Component</h1>
      <form method="post" onSubmit={handleSubmit}>
        <label>
          Post title: <input name="postTitle" defaultValue="Biking" ref={titleRef}/>
        </label>
        <label>
          Edit your post:
          <textarea
            name="postContent"
            defaultValue="I really enjoyed"
            rows={4}
            cols={40}
            ref={postRef}
          />
        </label>
        <hr/>
        <button type="reset">Reset edits</button>
        <button type="submit">Save post</button>
      </form>
    </div>
  );
}

export default App;
