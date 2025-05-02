import { Newspaper } from "lucide-react";
import GlobalMenu from "./global-menu";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
	return (
		<header>
			<div className="flex justify-between px-8 py-4">
				<span>
					<Newspaper strokeWidth={1.5} />
				</span>
				<div className="flex items-center gap-4">
					<GlobalMenu />
					<ModeToggle />
				</div>
			</div>
		</header>
	);
}
