export async function buscarExercicios() {
  try {
    const res = await fetch(
      "https://wger.de/api/v2/exerciseinfo/?limit=20"
    );

    const data = await res.json();

    return data.results;
  } catch (error) {
    console.error("Erro na API:", error);
    return [];
  }
}