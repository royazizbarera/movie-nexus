export default interface MovieModel {
    id: number;
    title: string;
    synopsis: string;
    posterUrl: string;
    backdropUrl: string;
    videoUrl: string;
    releaseDate: Date;
    approvalStatus: boolean;
    countryCode: string;
    directorId: number;
    rating: number;
    country: {
        code: number;
        name: string
    }
    director: {
        id: number;
        name: string;
    }
    genres: [
        {
            id: number;
            name: string;
        }
    ]
    actors: [
        {
            id: number;
            name: string;
            photoUrl: string;
        }
    ]
    reviews: []
}