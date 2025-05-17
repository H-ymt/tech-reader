export const revalidate = 600;

import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/app/components/ui/tabs";
import { fetchZennArticles } from "@/lib/zenn";
import ArticleCard from "../components/article-card";
import ArticleLayout from "../components/article-layout";

export default async function ZennPage() {
	const articles = await fetchZennArticles();

	const latestArticles = articles;

	const trendArticles = [...articles]
		.filter((article) => article.likes > 0)
		.sort((a, b) => b.likes - a.likes);

	return (
		<div className="space-y-4 p-4">
			<h1 className="font-bold text-4xl text-brand-zenn">Zenn</h1>
			<Tabs defaultValue="latest" className="w-full gap-6">
				<TabsList>
					<TabsTrigger value="latest">最新</TabsTrigger>
					<TabsTrigger value="trend">トレンド</TabsTrigger>
				</TabsList>
				<TabsContent value="latest">
					<ArticleLayout>
						{latestArticles.map((article) => (
							<ArticleCard
								key={article.id}
								emoji={article.emoji}
								title={article.title}
								url={article.link}
								author={article.author}
								date={article.pubDate}
								likes={article.likes}
							/>
						))}
					</ArticleLayout>
				</TabsContent>
				<TabsContent value="trend">
					<ArticleLayout>
						{trendArticles.map((article) => (
							<ArticleCard
								key={article.id}
								emoji={article.emoji}
								title={article.title}
								url={article.link}
								author={article.author}
								date={article.pubDate}
								likes={article.likes}
							/>
						))}
					</ArticleLayout>
				</TabsContent>
			</Tabs>
		</div>
	);
}
