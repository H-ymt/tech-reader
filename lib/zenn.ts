import axios from "axios";

export type ZennArticle = {
	id: string;
	title: string;
	link: string;
	pubDate: string;
	author: string;
	likes: number;
	emoji: string;
};

type ZennApiResponse = {
	articles: {
		id: string;
		title: string;
		path: string;
		published_at: string;
		user: {
			username: string;
		};
		liked_count: number;
		emoji: string;
	}[];
};

export async function fetchZennArticles(): Promise<ZennArticle[]> {
	try {
		const response = await axios.get<ZennApiResponse>(
			"https://zenn.dev/api/articles",
		);
		const data = response.data;

		const articles: ZennArticle[] = data.articles.map((item) => ({
			id: item.id,
			title: item.title,
			link: `https://zenn.dev${item.path}`,
			pubDate: item.published_at,
			author: item.user.username,
			likes: item.liked_count,
			emoji: item.emoji,
		}));

		return articles;
	} catch (error) {
		console.error("Failed to fetch Zenn articles:", error);
		return [];
	}
}
