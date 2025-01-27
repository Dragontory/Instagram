import React from "react";
import StoryCircle from "../../Components/Story/StoryCircle";
import HomeRight from "../../Components/HomeRight/HomeRight";

const HomePage = () => {
  return (
    <div>
      <div>
        <div className="w-[44%] px-10">
          <div className="storyDiv flex space-x-2 border p-4 rounded-md justify-start w-full">
            {[1,1,1,1].map((item)=><StoryCircle />)}
          </div>

          <div>
            posts
          </div>
        </div>
        <div>
          <HomeRight />
        </div>
      </div>
    </div>
  )
}

export default HomePage;