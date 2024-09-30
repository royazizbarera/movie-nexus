import DirectorModel from "../models/DirectorModel";
import directorData from "../databases/datas/directors.json";

const processedData = directorData.map((director) => {
    return {
        ...director,
        birthDate: director.birthDate ? new Date(director.birthDate) : new Date(0),
        photoUrl: director.photoUrl || "https://image.tmdb.org/t/p/w500/jG07WemmHOWQvYnKPSdNGioGg7A.jpg",
        countryCode: director.countryCode || "US"
    };
});

export const directors: DirectorModel[] = processedData
