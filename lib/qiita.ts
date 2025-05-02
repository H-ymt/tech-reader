export type QiitaArticle = {
	id: string;
	title: string;
	url: string;
	created_at: string;
	likes_count: number;
	user: {
		id: string;
		name: string;
		profile_image_url: string;
	};
};

type QiitaApiResponse = {
	id: string;
	title: string;
	url: string;
	created_at: string;
	likes_count: number;
	user: {
		id: string;
		name: string;
		profile_image_url: string;
	};
}[];

export async function fetchQiitaArticles({
	sort = "new",
	perPage = 10,
	page = 1,
}: {
	sort?: "new" | "trend";
	perPage?: number;
	page?: number;
}): Promise<QiitaArticle[]> {
	const endpoint =
		sort === "trend"
			? `https://qiita.com/api/v2/items?page=${page}&per_page=${perPage}&sort=likes_count`
			: `https://qiita.com/api/v2/items?page=${page}&per_page=${perPage}`;

	const res = await fetch(endpoint, {
		headers: {
			// 認証トークンが必要な場合はここに追加
		},
		next: { revalidate: 60 * 10 },
	});

	if (!res.ok) throw new Error("Qiita fetch failed");

	const data: QiitaApiResponse = await res.json();

	return data.map((item) => ({
		id: item.id,
		title: item.title,
		url: item.url,
		created_at: item.created_at,
		likes_count: item.likes_count,
		user: {
			id: item.user.id,
			name: item.user.name,
			profile_image_url: item.user.profile_image_url,
		},
	}));
}
