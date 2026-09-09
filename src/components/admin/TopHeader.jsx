import { Bell, Menu } from "lucide-react";

export default function TopHeader({ onMenuClick }) {
	return (
		<header className="fixed left-0 right-0 top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6 lg:left-72 lg:px-8">
			<button
				type="button"
				onClick={onMenuClick}
				className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 lg:hidden"
				aria-label="Open administration menu"
			>
				<Menu size={22} />
			</button>

			<div className="ml-auto flex items-center gap-4">
				<button
					type="button"
					className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-[#0b1f3a]"
					aria-label="View notifications"
				>
					<Bell size={20} />
				</button>

				<div className="flex items-center gap-3 border-l border-slate-200 pl-4">
					<div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0b1f3a] text-sm font-semibold text-white">
						PA
					</div>
					<div className="hidden sm:block">
						<p className="text-sm font-semibold text-[#0b1f3a]">Principal</p>
						<p className="text-xs text-slate-500">Administrator</p>
					</div>
				</div>
			</div>
		</header>
	);
}
