import { mockPosts } from "../../../../../constants/posts";

export default function Post() {
    const post = mockPosts[0];

    return (
        <div className="flex flex-col items-center justify-center mx-12 my-10">
            <h1 className="text-center">{ post.title }</h1>
            {post.youtubeLink && (
                <div className="md:w-2/4 h-80 w-3/4">
                    <iframe className="w-full h-full" src="https://www.youtube.com/embed/1XuJo5QDLno?si=EoMcJDKO510V1FyQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>
                </div>
            )}
            { post.content }
        </div>
    );
}