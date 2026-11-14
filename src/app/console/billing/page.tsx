import type { Metadata } from "next";
import { ConsolePageContent } from "~/app/_components/console/page-content";
import { consoleRoutes } from "~/app/_components/console/routes";

export const metadata: Metadata = {
	title: `${consoleRoutes.billing.title} · Vane`,
	description: consoleRoutes.billing.description,
};

export default function BillingPage() {
	return <ConsolePageContent section="billing" />;
}
