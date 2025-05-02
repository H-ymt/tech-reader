import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "qiita-user-profile-images.imgix.net",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "lh3.googleusercontent.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "qiita-image-store.s3.ap-northeast-1.amazonaws.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "s3-ap-northeast-1.amazonaws.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "avatars2.githubusercontent.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "qiita-image-store.s3.amazonaws.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "secure.gravatar.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "avatars3.githubusercontent.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "avatars.githubusercontent.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "lh5.googleusercontent.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "avatars0.githubusercontent.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "avatars1.githubusercontent.com",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
