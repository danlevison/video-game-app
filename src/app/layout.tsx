import type { Metadata } from "next"
import { Barlow } from "next/font/google"
import "./globals.css"
import { ReduxProvider } from "@/redux/Provider"
import MobileNav from "@/components/header/mobileNav/MobileNav"
import Sidebar from "@/components/header/sidebar/Sidebar"
import PageTransitionEffect from "@/components/PageTransitionEffect"
import AuthWrapper from "@/utils/AuthWrapper"
import { Toaster } from "@/components/ui/toaster"

const barlow = Barlow({ subsets: ["latin"], weight: ["300", "400", "700"] })

export const metadata: Metadata = {
	title: "FUTR Gaming",
	description: "Generated by create next app"
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={barlow.className}>
				<ReduxProvider>
					<AuthWrapper>
						<div className="md:flex">
							<header>
								<Sidebar />
								<MobileNav />
							</header>
							{/* <PageTransitionEffect>{children}</PageTransitionEffect> */}
							{children}
							<Toaster />
						</div>
					</AuthWrapper>
				</ReduxProvider>
			</body>
		</html>
	)
}
