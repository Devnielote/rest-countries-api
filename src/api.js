export async function fetchAllCards(){
  try {
    const query = await fetch("../../data.json");
    const data = await query.json();
    return data;
  } catch(error) {
    console.error("Mistakes where made:", error)
  }
};

export async function fetchCardById() {
  try {
    const query = await fetch("../../data.json");
    return data = query
  } catch(error) {
    console.error("Mistakes were made:", error)
  }
}


export async function fetchCardsByRegion() {
  try {

  } catch(error) {
    console.error("Mistakes were made", error)
  }
}
