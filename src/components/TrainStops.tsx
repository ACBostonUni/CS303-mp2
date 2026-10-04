import styled from "styled-components";
import type {Stop} from "../interfaces/Stop.ts"

const AllStopsDiv = styled.div`
    padding-left: 18%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap; // Wrap onto multiple lines if the width of the screen is exceeded - I like this function
    background-color: #dcffdc;
    border: #00843D 15px solid;
`;



const StopDiv = styled.div`
    margin: 3%;
    border: #00843D 15px double;
    padding: 1% 1% 1% 1%;
    width: 30%;
    height: 90%;
    text-align: center;
    background-color: #16a658;
    color: #FCFAF5;
    
`



const TextDiv = styled.div`
    font: calc(4px + 1vw) "Times New Roman" ;
    padding: 1% 1% 1% 1%;
`


export default function TrainStops(Stop_Data: { data: Stop[] }) {
    return (
        <AllStopsDiv>
            {
                Stop_Data.data.map((s: Stop) => (
                    <StopDiv key={s.id}>
                        <h1>{s.attributes.name}</h1>
                        <TextDiv>{s.attributes.address || "Address Not Available"}</TextDiv>
                        <TextDiv>{s.attributes.municipality}</TextDiv>
                        <TextDiv>Wheelchair Access: {s.attributes.wheelchair_boarding >= 1 ? "Yes" : "No"}</TextDiv>
                    </StopDiv>
                ))
            }
        </AllStopsDiv>
    );
}