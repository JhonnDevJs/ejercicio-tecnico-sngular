export const getData = async () => {
	try {
		const response = await fetch("https://rickandmortyapi.com/api/character");

		if (!response.ok) throw new Error("Error: ", response.status);

		return await response.json();

	} catch (error) {
		console.error(error);
	}
};
