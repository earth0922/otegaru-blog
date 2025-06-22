import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    output: 'export',
    // basePathを設定（例: GitHubリポジトリ名が "otegaru-blog" の場合）
    basePath: '/otegaru-blog',
    // assetPrefixも設定
    assetPrefix: '/otegaru-blog/',
};

export default nextConfig;
