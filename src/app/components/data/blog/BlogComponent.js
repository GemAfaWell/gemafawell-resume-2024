import FirstPost from '@/app/content/posts/firstpost.mdx'

// output posts in date order
export default function BlogPosts(posts) {
    return (
        <div className='py-8 text-center text-white bg-pink-400' style={{ height: '100vh' }}>
            <h2 className='pt-8 pb-12 font-bold'>Posts</h2>
            <div className='grid grid-cols-2 gap-4'>
                <div className='h-full border-r-2 border-black'>
                    <FirstPost />
                </div>
                <div>
                    <h2>More posts coming soon!</h2>
                </div>
            </div>
        </div>
    );
}