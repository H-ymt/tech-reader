export default function Container({ children }: { children: React.ReactNode }) {
	return <div className="container mx-auto max-w-[64rem] p-4">{children}</div>;
}
