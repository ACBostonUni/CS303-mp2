export interface Stop {
    // This is the structure of the MBTA API
    id: string;
    attributes: {
        name: string;
        municipality: string;
        address: string | null; // I put this here because in the API there are a few stops that have no address
                                // sometimes a string, sometimes null ( | ) this is a union.
        wheelchair_boarding: number;
    };


}