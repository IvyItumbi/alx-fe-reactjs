import { useQuery } from 'react-query';

const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
};

const PostsComponent = () => {
    const { data, isError, isLoading, refetch } = useQuery('posts', fetchPosts);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading posts</div>;

    return (
        <div className="posts-component">
            <button onClick={() => refetch()}>Refetch Posts</button>
            {data.map((post) => (
                <div key={post.id} className="post-item">
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
};

export default PostsComponent;
