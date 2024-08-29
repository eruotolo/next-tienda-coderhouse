/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'f.fcdn.app',
                port: '',
            },
        ],
    },
};

export default nextConfig;
