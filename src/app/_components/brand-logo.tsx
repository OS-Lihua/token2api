import Image from "next/image";

export function BrandLogo({
	tone = "light",
	className,
}: {
	tone?: "light" | "dark";
	className?: string;
}) {
	return (
		<Image
			alt="Vane"
			className={`brand-logo ${className ?? ""}`}
			height={81}
			loading="eager"
			src={`/brand/logo-${tone}.svg`}
			unoptimized
			width={250}
		/>
	);
}
