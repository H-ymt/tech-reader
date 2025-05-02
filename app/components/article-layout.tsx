type Props = {
	children: React.ReactNode;
};

export default function ArticleLayout({ children }: Props) {
	return (
		<div className="grid grid-cols-1 gap-6 md:grid-cols-2">{children}</div>
	);
}
