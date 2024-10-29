import BlogCard from "./BlogCard"

const BlogListing = () => {
  return (
    <section className=" mt-20 px-6   "  >
    <div className="container">
      <div className="flex justify-center items-center gap-10">
        <h2 className="text-primary mb-10 lg:max-w-[700px]">
        Explore our latest insights
        </h2>
      </div>
   <div className="flex flex-wrap justify-center ">
   <div className="  w-full md:w-1/3 flex justify-center">
        <BlogCard/>
    </div>
      <div className="  w-full md:w-1/3 flex justify-center">
        <BlogCard/>
    </div>
      <div className="  w-full md:w-1/3 flex justify-center">
        <BlogCard/>
    </div>
   </div>
      <div className="flex justify-center pt-20">
      <button className='btn btn-primary'>Learn More</button>
      </div>
    </div>
  </section>
  )
}

export default BlogListing