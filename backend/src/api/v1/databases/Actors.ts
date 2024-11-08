import ActorModel from "../models/ActorModel";
import { actors_ts } from "./datas_ts/actors_ts";

const processedData = actors_ts.map((actor) => {
    return {
        ...actor,
        birthDate: actor.birthDate == "" ? new Date(0) : new Date(actor.birthDate)
    }
});

export const actors: ActorModel[] = processedData;
