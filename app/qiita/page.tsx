import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/app/components/ui/tabs";
import { fetchQiitaArticles } from "@/lib/qiita";
import ArticleCard from "../components/article-card";
import ArticleLayout from "../components/article-layout";

export default async function QiitaPage() {
	const latestArticles = await fetchQiitaArticles({ sort: "new", perPage: 30 });
	let trendArticles = await fetchQiitaArticles({ sort: "trend", perPage: 100 });
	trendArticles = trendArticles
		.filter((article) => article.likes_count > 0)
		.sort((a, b) => b.likes_count - a.likes_count)
		.slice(0, 20);

	return (
		<div className="space-y-4 p-4">
			<h1 className="font-bold text-4xl text-brand-qiita">Qiita</h1>
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
								title={article.title}
								url={article.url}
								date={article.created_at}
								author={article.user.id}
								profile={article.user.profile_image_url}
								likes={article.likes_count}
							/>
						))}
					</ArticleLayout>
				</TabsContent>
				<TabsContent value="trend">
					<ArticleLayout>
						{trendArticles.map((article) => (
							<ArticleCard
								key={article.id}
								title={article.title}
								url={article.url}
								date={article.created_at}
								author={article.user.id}
								profile={article.user.profile_image_url}
								likes={article.likes_count}
							/>
						))}
					</ArticleLayout>
				</TabsContent>
			</Tabs>
		</div>
	);
}
