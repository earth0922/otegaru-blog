export async function generateStaticParams() {
    // 静的に生成したい id のリストを返す
    return [
        { id: '1' },
        // 必要な分だけ追加
    ];
}

const Page = () => {
    return (
        <div className="max-w-2xl mx-auto px-4 py-8">
            {/* Header Section */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8 border border-gray-200">
                <h1 className="text-xl font-extrabold mb-2 text-indigo-700 md:text-3xl">
                    React しか利用してなかったけど Next.js
                    使ってみた所感【初投稿宜しく】
                </h1>
                <div className="flex gap-2 mb-2">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                        Next.js
                    </span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                        React
                    </span>
                </div>
                <div className="text-xs text-gray-500 mb-2">
                    投稿日 2025年06月22日
                </div>
            </div>

            {/* 本文 */}
            <section className="mb-10">
                <h2 className="text-2xl font-bold border-b-2 border-blue-200 pb-2 mb-4 flex items-center gap-2">
                    概要
                </h2>
                <span className="text-md text-gray-700">
                    Next.js 導入しました。普段 React ユーザなので、Next.js
                    は初めてです
                </span>
            </section>
            {/* 良い点 */}
            <section className="mb-10">
                <h2 className="text-2xl font-bold border-b-2 border-indigo-200 pb-2 mb-4 flex items-center gap-2">
                    <span role="img" aria-label="rocket">
                        🚀
                    </span>
                    Next.js の良い点
                </h2>
                <div className="space-y-8">
                    {/* 1 */}
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-indigo-600 font-bold text-xl">
                                1.
                            </span>
                            <span className="font-bold text-lg">
                                SSR・SSG が簡単に使える
                            </span>
                        </div>
                        <ul className="list-disc pl-8 text-md text-gray-700">
                            <li>
                                サーバーサイドレンダリング（SSR）や静的サイト生成（SSG）が標準機能なので、SEOや初期表示の高速化がほぼ“おまかせ”
                            </li>
                            <li>
                                getServerSideProps/getStaticProps の API
                                はシンプルで、学習コストも低め
                            </li>
                        </ul>
                    </div>
                    {/* 2 */}
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-indigo-600 font-bold text-xl">
                                2.
                            </span>
                            <span className="font-bold text-lg">
                                ファイルベースのルーティング
                            </span>
                        </div>
                        <ul className="list-disc pl-8 text-md text-gray-700">
                            <li>
                                app/
                                ディレクトリにファイルを置くだけでURLルートが自動生成
                            </li>
                            <li>
                                動的ルート(/posts/[id].js)も直感的に書けるので、ルーティング設定に迷うことがほとんどなし
                            </li>
                        </ul>
                    </div>
                    {/* 3 */}
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-indigo-600 font-bold text-xl">
                                3.
                            </span>
                            <span className="font-bold text-lg">
                                豊富なプラグイン＆コミュニティサポート
                            </span>
                        </div>
                        <ul className="list-disc pl-8 text-md text-gray-700">
                            <li>
                                Vercel公式プラグインや、Image最適化機能、Analytics連携など、公式／OSSの拡張が充実
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 注意点 */}
            <section>
                <h2 className="text-2xl font-bold border-b-2 border-red-200 pb-2 mb-4 flex items-center gap-2">
                    <span role="img" aria-label="warning">
                        ⚠️
                    </span>
                    Next.js の注意点・デメリット
                </h2>
                <div className="space-y-8">
                    {/* 1 */}
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-red-500 font-bold text-xl">
                                1.
                            </span>
                            <span className="font-bold text-lg">
                                ビルド時間が長くなる可能性
                            </span>
                        </div>
                        <ul className="list-disc pl-8 text-md text-gray-700">
                            <li>
                                ページ数が増えると
                                SSGビルド時の処理時間が肥大化しがち
                            </li>
                        </ul>
                    </div>
                    {/* 2 */}
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-red-500 font-bold text-xl">
                                2.
                            </span>
                            <span className="font-bold text-lg">
                                フルサーバーレス前提ではない
                            </span>
                        </div>
                        <ul className="list-disc pl-8 text-md text-gray-700">
                            <li>
                                高トラフィックなAPIには専用のバックエンドを併用する設計も検討必要
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Page;
