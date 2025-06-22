import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
    const blogNumber = [0];

    return (
        <>
            {/* Header Section */}
            <div className="flex items-center my-8 text-3xl">
                <div className="flex-grow border-t border-gray-300" />
                <div className="flex items-center flex-col">
                    <span className="mx-4 font-bold">LATEST ENTRY</span>
                    <span className="text-xl text-zinc-500">最新の記事</span>
                </div>
                <div className="flex-grow border-t border-gray-300" />
            </div>

            {/* Blog Entries Section */}
            {blogNumber.map((num) => (
                <div key={num} className="flex justify-center gap-12 mb-12">
                    {/* Left Card */}
                    <div className="w-1/3">
                        <Link href="/blog/1" className="block group">
                            <div className="h-40 rounded-2xl border border-gray-200 shadow-md overflow-hidden transition-transform duration-200 group-hover:scale-105 group-hover:shadow-lg bg-white flex items-center justify-center">
                                <Image
                                    src="/otegaru-blog/react_next.png"
                                    alt="Next.js Logo"
                                    width={256}
                                    height={128}
                                    className="object-cover"
                                />
                            </div>
                            <div className="mt-4 text-2xl font-bold break-words whitespace-pre-line">
                                {
                                    'React しか利用してなかったけど Next.js\n使ってみた所感【初投稿宜しく】'
                                }
                            </div>
                            <div className="mt-2 flex gap-2 flex-wrap">
                                <span className="bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full text-xs font-semibold">
                                    #初投稿
                                </span>
                                <span className="bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full text-xs font-semibold">
                                    #気ままに呟く
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Right Card */}
                    <div className="w-1/3">
                        <div className="h-40 rounded-2xl border border-gray-200 shadow-md bg-gray-50 flex items-center justify-center transition-transform duration-200 hover:scale-105 hover:shadow-lg hover:corsor-pointer">
                            <span className="text-gray-400 text-xl">
                                Coming Soon...
                            </span>
                        </div>
                        <div className="mt-4 flex gap-2 flex-wrap">
                            <span className="bg-gray-200 text-gray-500 px-2 py-1 rounded-full text-xs font-semibold">
                                #充電中
                            </span>
                        </div>
                    </div>
                </div>
            ))}

            {/* Footer Section */}
        </>
    );
};

export default Page;
