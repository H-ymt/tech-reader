import Link from "next/link";

export default function GlobalMenu() {
	return (
		<nav aria-label="Global menu" className="flex">
			<Link href="/zenn" className="px-2 py-1">
				Zenn
			</Link>
			<Link href="/qiita" className="px-2 py-1">
				Qitia
			</Link>
		</nav>
	);
}
