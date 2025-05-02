import Link from "next/link";

export default function Home() {
	return (
		<main className="space-y-4 p-4">
			<h1 className="font-bold text-3xl">Tech Articles</h1>
			<div className="flex gap-4">
				<Link
					href="/zenn"
					className="text-xl underline decoration-primary-foreground/40 underline-offset-2 duration-200 hover:decoration-primary-foreground"
				>
					Zenn
				</Link>
				<Link
					href="/qiita"
					className="text-xl underline decoration-primary-foreground/40 underline-offset-2 duration-200 hover:decoration-primary-foreground"
				>
					Qiita
				</Link>
			</div>
		</main>
	);
}
