import type { Metadata } from "next";
import type { ReactNode } from "react";
import { VaneConsole } from "~/app/_components/vane-console";
import { WalletProvider } from "~/app/_components/wallet-provider";

export const metadata: Metadata = {
	title: "控制台 · Vane",
	description:
		"查看当前市场的结算网络与资产，管理 AI 资源、调用预算、用量账单、链上结算和退款。",
	robots: { index: false, follow: false },
};

export default function ConsoleLayout({ children }: { children: ReactNode }) {
	return (
		<WalletProvider>
			<VaneConsole>{children}</VaneConsole>
		</WalletProvider>
	);
}
