import ActorModel from "../models/ActorModel";
import actorData from "../databases/datas/actors.json";

const processedData = actorData.map((actor) => {
    return {
        ...actor,
        birthDate: actor.birthDate == "" ? new Date(0) : new Date(actor.birthDate)
    }
});

export const actors: ActorModel[] = processedData;
