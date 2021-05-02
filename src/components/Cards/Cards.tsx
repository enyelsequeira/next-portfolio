import { postFilePaths, POSTS_PATH } from '@/../utils/mdxUtils';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import React from 'react';

// flex flex-col md:flex-row items-center
const Cards = ({ posts }: any): JSX.Element => {
  console.log(posts, "projects coming fromc ard");
  return (
    <>
      <h1>Home Page</h1>
    </>
    //     <motion.div className="grid w-full grid-cols-test grid-row-t justify-center gap-x-4 gap-y-3" initial={{opacity: 0}} animate={{opacity: 1, rotate:360 }}>
    //       {/* card 1 */}
    //       <div className="max-w-md  rounded overflow-hidden shadow-lg border-4 border-t-primary mb-2 div1">
    //         <img className="w-full" src="/images/workpic.png" alt="Sunset in the mountains" />
    //         <div className="px-6 py-4">
    //           <div className="font-bold text-xl mb-2 ">The Coldest Sunset</div>
    //           <p className="text-t-primary text-base">
    //             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    //           </p>
    //         </div>
    //         <div className="px-6 pt-4 pb-2">
    //           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    //           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    //           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
    //           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
    //           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
    //         </div>
    //         <div className="flex items-center justify-between px-7 py-2">
    //           <button className="border-2 bg-purple-200 w-max px-4 py-1 h-max rounded-md">Click me</button>
    //           <button className="border-2 bg-purple-200 w-max px-4 py-1 h-max rounded-md">code</button>
    //         </div>

    //       </div>

    //       {/* card 2 */}

    //       <div className="max-w-md  rounded overflow-hidden shadow-lg border-4 border-t-primary mb-2 div2">
    //         <img className="w-full" src="/images/workpic.png" alt="Sunset in the mountains" />
    //         <div className="px-6 py-4">
    //           <div className="font-bold text-xl mb-2 ">The Coldest Sunset</div>
    //           <p className="text-t-primary text-base">
    //             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    //           </p>
    //         </div>
    //         <div className="px-6 pt-4 pb-2">
    //           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    //           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    //           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
    //           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
    //           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
    //         </div>
    //         <div className="flex items-center justify-between px-7 py-2">
    //           <button className="border-2 bg-purple-200 w-max px-4 py-1 h-max rounded-md">Click me</button>
    //           <button className="border-2 bg-purple-200 w-max px-4 py-1 h-max rounded-md">code</button>
    //         </div>

    //       </div>

    // {/* card 3 */}
    //       <div className="max-w-md  rounded overflow-hidden shadow-lg border-4 border-t-primary mb-2 div3">
    //         <img className="w-full" src="/images/workpic.png" alt="Sunset in the mountains" />
    //         <div className="px-6 py-4">
    //           <div className="font-bold text-xl mb-2 ">The Coldest Sunset</div>
    //           <p className="text-t-primary text-base">
    //             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    //           </p>
    //         </div>
    //         <div className="px-6 pt-4 pb-2">
    //           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    //           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    //           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
    //           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
    //           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
    //         </div>
    //         <div className="flex items-center justify-between px-7 py-2">
    //           <button className="border-2 bg-purple-200 w-max px-4 py-1 h-max rounded-md">Click me</button>
    //           <button className="border-2 bg-purple-200 w-max px-4 py-1 h-max rounded-md">code</button>
    //         </div>

    //       </div>

    // {/* card 4 */}

    //       <div className="max-w-md   rounded overflow-hidden shadow-lg border-4 border-t-primary mb-2 div4">
    //         <img className="w-full" src="/images/workpic.png" alt="Sunset in the mountains" />
    //         <div className="px-6 py-4">
    //           <div className="font-bold text-xl mb-2 ">The Coldest Sunset</div>
    //           <p className="text-t-primary text-base">
    //             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    //           </p>
    //         </div>
    //         <div className="px-6 pt-4 pb-2">
    //           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    //           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    //           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
    //           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
    //           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
    //         </div>
    //         <div className="flex items-center justify-between px-7 py-2">
    //           <button className="border-2 bg-purple-200 w-max px-4 py-1 h-max rounded-md">Click me</button>
    //           <button className="border-2 bg-purple-200 w-max px-4 py-1 h-max rounded-md">code</button>
    //         </div>

    //       </div>


    //     </motion.div>
  )
}

export default Cards




export function getStaticProps() {
  const projects = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
    }
  })

  return { props: { projects } }
}
