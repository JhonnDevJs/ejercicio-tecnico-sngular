export const getData = async () => {
	try {
		const response = await fetch("https://rickandmortyapi.com/api/character");

		if (!response.ok) throw new Error("Error: ", response.status);

		const data = await response.json();

		console.log(data.results);

		return data;
	} catch (error) {
		console.error(error);
	}
};
