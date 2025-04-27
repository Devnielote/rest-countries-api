import { URL, FALLBACKURL} from "../config.js"

export async function fetchAllCards(){
  try {
    const res = await fetch(URL + "all"); 

    if (!res.ok ) {
      throw new Error("Error al conectarse con la API");
    }

    const data = await res.json();
    return data;

  } catch(error) {
    console.warn("Error con la API, cargando datos de reserva...")

    const res = await fetch(FALLBACKURL);
    const data = await res.json();
    return data;
  } 
};

export async function fetchCardByName(str) {
  try {
    str = str.toLowerCase();
    const res = await fetch(URL + "name/" + str);

    if (!res.ok) {
      throw new Error("Error con la solicitud de búsqueda")
    }

    const data = await res.json();
    return data[0];

  } catch(error) {
    console.error(error)
    const res = await fetch(FALLBACKURL);
    const data = await res.json();

    const country = data.find((country) => country.name.toLowerCase() === str);
    if (country) {
      return country
    } else {
      console.error("País no encontrado");
    }
  }
}

export async function fetchDataByCode(str) {
  try {
    const res = await fetch(URL + "alpha/" + str);

    if (!res.ok) {
      throw new Error("404 Not Found")
    }

    const data = await res.json();
    return data[0];

  } catch(e) {
    console.error("Primay request failed", e);
    try {
      const fallbackResponse = await fetch(FALLBACKURL);
      if(!fallbackResponse.ok) {
        throw new Error("Fallback request also failed");
      }

      const fallbackData = fallbackResponse.json()
      return fallbackData;

    } catch(fallbackError) {

      console.error("Fallback request failed", fallbackError);
    }
  }
}

export async function fetchDataByRegion(str) {
  try {
    const res = await fetch(URL + "region/" + str);

    if(!res.ok){
      throw new Error("404 Not Found");
    }

    const data = await res.json();
    return data;

  } catch(e) {
    console.error("Primary request failed", e)

    try {

      const res = await fetch(FALLBACKURL);
      const data = await res.json();
      return data[0];
      

    } catch(e) {
      console.error("Fallback request failed", e)
    }
  }
} 
