import styled from "styled-components";
import type {Stop} from "../interfaces/Stop.ts"

const AllStopsDiv = styled.div`
    margin-left: 10%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap; // Wrap onto multiple lines if the width of the screen is exceeded - I like this function
`;

const StopDiv = styled.div`
    margin: 3%;
    border: #00843D 15px;
    border-style: double;
    padding: 1% 1% 1% 1%;
    width: 30%;
    height: 90%;
    text-align: center;
    background-color: #16a658;
    color: #FCFAF5
    
`


export default function TrainStops(Stop_Data: { data: Stop[] }) {
    return (
        <AllStopsDiv>
            {
                Stop_Data.data.map((s: Stop) => (
                    <StopDiv key={s.id}>
                        <h1>{s.attributes.name}</h1>
                        <p>{s.attributes.address || "Address Not Available"}</p>
                        <p>{s.attributes.municipality}</p>
                        <p>Wheelchair Access: {s.attributes.wheelchair_boarding >= 1 ? "Yes" : "No"}</p>
                    </StopDiv>
                ))
            }
        </AllStopsDiv>
    );
}