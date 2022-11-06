const BlogListCard = (props)=>{
    const {blog} = props;
    return (
        <div className="blog-list-card">
            <h1>{blog.title}</h1>
            <p>{blog.author}</p>
            <p>{blog.text}</p>
        </div>
    )
}

export default BlogListCard;