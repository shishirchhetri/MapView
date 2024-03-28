export const search = async (term: string) => {
  const res = fetch(
    `https://nominatiom.openstreetmap.org/search?q=${term}&format=geojson&addressdetails=1&layer=address&limit=5`,
  );
  const data = await res.json();
};
