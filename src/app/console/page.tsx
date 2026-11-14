import type { Metadata } from "next";
import { ConsolePageContent } from "~/app/_components/console/page-content";
import { consoleRoutes } from "~/app/_components/console/routes";

export const metadata: Metadata = {
	title: `${consoleRoutes.overview.title} · Vane`,
	description: consoleRoutes.overview.description,
};

export default function ConsolePage() {
	return <ConsolePageContent section="overview" />;
}
