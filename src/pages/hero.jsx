import React from "react";
import HeroCard from "../component/herocard";
import HeroCardTwo from "../component/herocardtwo";
import { useSelector } from "react-redux";

const Hero = ({ toggleSidebar }) => {

  const fetchSong = useSelector(state => state.todo);

  console.log(fetchSong);

  return (
    <div className=" flex flex-col w-[100%] h-[100%] text-gray-200 bg-gradient-to-b from-gray-700 to-gray-900 rounded-md ">
      {/* <div className="w-[100%] h-[100%] bg-gray-700 rounded-md"> */}
          {/* <HeroNav /> */}
          <div className="w-[100%] h-[90%] rounded-md overflow-y-auto overflow-x-hidden scrollbar">
            <div className="flex flex-col w-[100%] h-fit text-gray-100 p-5 gap-5">
              <h1 className="font-bold text-3xl">Good morning</h1>
              <div className="grid grid-cols-3 gap-5">
                {
                  fetchSong?.data?.tracks?.items.map((song, index) => {
                    return (
                      <HeroCard key={index} song={song} />
                    )
                  })
                }
              </div>
            </div>
            <div className="flex flex-col w-[100%] h-fit p-5 gap-5">
              <div className="flex justify-between items-center">
                <h1 className="font-bold text-3xl">Today's biggest hits</h1>
                <p>Show all</p>
              </div>
              <div className={`grid gap-5 ${ toggleSidebar ? 'grid-cols-5': 'grid-cols-4'}`}>
                <HeroCardTwo toggleSidebar={toggleSidebar}/>
                <HeroCardTwo toggleSidebar={toggleSidebar}/>
                <HeroCardTwo toggleSidebar={toggleSidebar}/>
                <HeroCardTwo toggleSidebar={toggleSidebar}/>
                { toggleSidebar && <HeroCardTwo toggleSidebar={toggleSidebar}/> }
              </div>
            </div>
            <div className="flex flex-col w-[100%] h-fit p-5 gap-5">
              <div className="flex justify-between items-center">
                <h1 className="font-bold text-3xl">Made For you</h1>
                <p>Show all</p>
              </div>
              <div className={`grid gap-5 ${ toggleSidebar ? 'grid-cols-5': 'grid-cols-4'}`}>
                <HeroCardTwo toggleSidebar={toggleSidebar}/>
                <HeroCardTwo toggleSidebar={toggleSidebar}/>
                <HeroCardTwo toggleSidebar={toggleSidebar}/>
                <HeroCardTwo toggleSidebar={toggleSidebar}/>
                { toggleSidebar && <HeroCardTwo toggleSidebar={toggleSidebar}/> }
              </div>
            </div>
            <div className="flex flex-col w-[100%] h-fit p-5 gap-5">
              <div className="flex justify-between items-center">
                <h1 className="font-bold text-3xl">Recently played</h1>
                <p>Show all</p>
              </div>
              <div className={`grid gap-5 ${ toggleSidebar ? 'grid-cols-5': 'grid-cols-4'}`}>
                <HeroCardTwo toggleSidebar={toggleSidebar}/>
                <HeroCardTwo toggleSidebar={toggleSidebar}/>
                <HeroCardTwo toggleSidebar={toggleSidebar}/>
                <HeroCardTwo toggleSidebar={toggleSidebar}/>
                { toggleSidebar && <HeroCardTwo toggleSidebar={toggleSidebar}/> }
              </div>
            </div>
            <div className="flex flex-col w-[100%] h-fit p-5 gap-5">
              <div className="flex justify-between items-center">
                <h1 className="font-bold text-3xl">Big Hits!</h1>
                <p>Show all</p>
              </div>
              <div className={`grid gap-5 ${ toggleSidebar ? 'grid-cols-5': 'grid-cols-4'}`}>
                <HeroCardTwo toggleSidebar={toggleSidebar}/>
                <HeroCardTwo toggleSidebar={toggleSidebar}/>
                <HeroCardTwo toggleSidebar={toggleSidebar}/>
                <HeroCardTwo toggleSidebar={toggleSidebar}/>
                { toggleSidebar && <HeroCardTwo toggleSidebar={toggleSidebar}/> }
              </div>
            </div>
            <div className="flex flex-col w-[100%] h-fit p-5 gap-5">
              <div className="flex justify-between items-center">
                <h1 className="font-bold text-3xl">More of what you like</h1>
                <p>Show all</p>
              </div>
              <div className={`grid gap-5 ${ toggleSidebar ? 'grid-cols-5': 'grid-cols-4'}`}>
                <HeroCardTwo toggleSidebar={toggleSidebar}/>
                <HeroCardTwo toggleSidebar={toggleSidebar}/>
                <HeroCardTwo toggleSidebar={toggleSidebar}/>
                <HeroCardTwo toggleSidebar={toggleSidebar}/>
                { toggleSidebar && <HeroCardTwo toggleSidebar={toggleSidebar}/> }
              </div>
            </div>
            <div className="flex flex-col w-[100%] h-fit p-5 gap-5">
              <div className="flex justify-between items-center">
                <h1 className="font-bold text-3xl">Podcasts</h1>
                <p>Show all</p>
              </div>
              <div className={`grid gap-5 ${ toggleSidebar ? 'grid-cols-5': 'grid-cols-4'}`}>
                <HeroCardTwo toggleSidebar={toggleSidebar}/>
                <HeroCardTwo toggleSidebar={toggleSidebar}/>
                <HeroCardTwo toggleSidebar={toggleSidebar}/>
                <HeroCardTwo toggleSidebar={toggleSidebar}/>
                { toggleSidebar && <HeroCardTwo toggleSidebar={toggleSidebar}/> }
              </div>
            </div>
          </div>
      </div>
    // </div>
  );
};

export default Hero;
