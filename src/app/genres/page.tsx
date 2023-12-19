"use client"

import { useGetAllGenresQuery } from "@/redux/features/apiSlice"
import Spinner from "@/components/Spinner"
import PageItemList from "@/components/PageItemList"

export default function Genres() {
	const {
		data: allGenresData,
		isLoading,
		isFetching,
		isError
	} = useGetAllGenresQuery({})

	return (
		<main className="min-h-screen w-full mx-auto px-8 py-20">
			<h1 className="font-bold uppercase text-3xl sm:text-4xl md:text-5xl tracking-wider">
				Genres
			</h1>
			<div className="flex justify-center">
				{(isLoading || isFetching) && <Spinner />}
			</div>

			{allGenresData && allGenresData.results?.length > 0 && (
				<PageItemList data={allGenresData.results} />
			)}

			{isError && (
				<p className="text-3xl font-bold text-center">Unable to load genres.</p>
			)}
		</main>
	)
}
