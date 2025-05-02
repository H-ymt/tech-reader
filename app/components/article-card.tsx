import { ArrowUpRight, Heart } from "lucide-react";
import Image from "next/image";

type Props = {
	id?: string;
	title: string;
	url: string;
	date: string;
	author?: string;
	likes?: number;
	emoji?: string;
	name?: string;
	profile?: string;
};

export default function ArticleCard({
	id,
	title,
	url,
	date,
	author,
	likes,
	emoji,
	profile,
}: Props) {
	return (
		<div className="flex items-start gap-5 rounded-xl">
			{emoji && (
				<a
					href={url}
					target="_blank"
					rel="noopener noreferrer"
					className="rounded-2xl"
				>
					<span className="inline-grid aspect-square w-24 place-items-center rounded-2xl bg-muted-foreground/10 text-4xl">
						{emoji}
					</span>
				</a>
			)}

			{profile && (
				<div className="inline-grid aspect-square w-24 place-items-center rounded-2xl bg-muted-foreground/10">
					<Image
						src={profile}
						alt=""
						className="w-8 rounded-full object-cover"
						width={32}
						height={32}
						loading="lazy"
					/>
				</div>
			)}
			<div className="grid flex-1 gap-1">
				<a href={url} target="_blank" rel="noopener noreferrer">
					<h2 className="font-bold text-base">{title}</h2>
				</a>
				<p className="text-muted-foreground text-xs">{author}</p>
				<span className="flex items-center gap-3">
					<p className="text-muted-foreground text-xs">
						投稿日: {new Date(date).toLocaleDateString()}
					</p>
					<p className="flex items-center gap-0.5 text-muted-foreground text-xs">
						<Heart aria-hidden="true" size={12} />
						{likes}
					</p>
				</span>
				<a
					href={url}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex w-fit items-center gap-0.25 font-medium text-primary-foreground text-sm underline decoration-primary-foreground/40 underline-offset-2 duration-200 hover:decoration-primary-foreground"
				>
					記事を読む
					<span>
						<ArrowUpRight aria-hidden="true" size={15} />
					</span>
				</a>
			</div>
		</div>
	);
}
