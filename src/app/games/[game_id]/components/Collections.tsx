import { useState } from "react"
import { useSelector } from "react-redux"
import { currentUser } from "@/redux/features/authSlice"
import { useAddGameToWishlistMutation } from "@/redux/features/wishlistApiSlice"
import { Button } from "@/components/ui/button"
import { BiChevronDown } from "react-icons/bi"
import CollectionsDropdown from "@/components/CollectionsDropdown"
import { useToast } from "@/components/ui/use-toast"

//types
import { GameT } from "@/types"

export default function Collections({ gameData }: { gameData: GameT }) {
	const user = useSelector(currentUser)
	const [showCollections, setShowCollections] = useState(false)
	const [addGameToWishlist] = useAddGameToWishlistMutation()
	const { toast } = useToast()

	const handleAddGameToWishlist = async (gameData: GameT) => {
		try {
			await addGameToWishlist({
				data: gameData,
				userId: user?.uid,
				owner: user?.displayName,
				ownerId: user?.uid,
				wishlistId: user?.uid
			})
			toast({
				variant: "default",
				description: "Game successfully added to your wishlist."
			})
		} catch (error) {
			console.error(error)
			toast({
				variant: "destructive",
				description:
					"Error: Unable to add game to your wishlist, please try again."
			})
		}
	}

	return (
		<div
			className={`${showCollections ? "bg-foreground" : ""} mt-5 rounded-b-md`}
		>
			<div className="flex items-center gap-5">
				<Button
					onClick={() => handleAddGameToWishlist({ ...gameData })}
					variant={"outline"}
					className={`w-full text-base font-bold h-12 duration-300 ${
						showCollections && "rounded-b-none"
					}`}
				>
					Add to wishlist ❤️
				</Button>
				<Button
					onClick={() => setShowCollections(!showCollections)}
					variant={"outline"}
					className={`w-full text-base font-bold h-12 duration-300 ${
						showCollections && "rounded-b-none"
					}`}
				>
					Collections <BiChevronDown size={25} />
				</Button>
			</div>
			<CollectionsDropdown
				showCollections={showCollections}
				user={user}
				game={gameData}
			/>
		</div>
	)
}
