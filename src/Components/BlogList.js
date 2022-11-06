import BlogListCard from "./BlogListCard";

const BlogList = (props)=>{
    const {blogs} = props;
    console.log(blogs);

    const mapBlogs = ()=>{
        return blogs.map((blog)=>{
            return (
                <BlogListCard blog={blog} key={blog.id}/>
            )
        })
    }
    return (
        <div className="blog-list">
            {mapBlogs()}
        </div>
    )
}

export default BlogList;