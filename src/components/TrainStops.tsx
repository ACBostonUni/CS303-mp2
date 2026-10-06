import styled from "styled-components";
import type {Stop} from "../interfaces/Stop.ts"
import mbtaImg from '../Assets/MBTA-imp.jpg';
import mbtaImg2 from '../Assets/mbtaImg2.jpg';
import mbtaImg3 from '../Assets/mbtaImg3.jpg';

const AllStopsDiv = styled.div`
    
    display: flex;
    flex-direction: row;
    flex-wrap: wrap; // Wrap onto multiple lines if the width of the screen is exceeded - I like this function
    background-color: #dcffdc;
    border: #00843D 15px solid;
    justify-content: center;
    align-items: center;
`;



const StopDiv = styled.div`
    margin: 3%;
    border: #00843D 15px double;
    padding: 1% 1% 1% 1%;
    width: 21%;
    height: 90%;
    text-align: center;
    background-color: #16a658;
    color: #FCFAF5;


    @media screen and (max-width: 800px){
    width: 33%;
    }
    
`

const WebHeader = styled.div'
    font: calc(12px + 2.6vw) "Times New Roman";
    font-weight: bolder;
    color: #FCFAF5;
    text-align: center;
'

const NameDiv = styled.div`
    font: calc(6px + 2.6vw) "Times New Roman";
    font-weight: bolder;
    padding: 1% 1% 1% 1%;

    text-wrap: wrap;


    
`


const TextDiv = styled.div`
    font: calc(4px + 1.5vw) "Times New Roman" ;
    padding: 1% 1% 1% 1%;
`

const ImgDiv = styled.div`
    height: 20%;
    width: 40%;
    margin: 3% auto;
    
   
    img {
        width: 100%;
        height: 100%;
        border-radius: 10%;
       
    }
`

export default function TrainStops(Stop_Data: { data: Stop[] }) {
    return (
        <AllStopsDiv>
            <WebHeader>
                MBTA Green Line Train Stops
            </WebHeader>
            {
                Stop_Data.data.map((s: Stop) => (
                    <StopDiv key={s.id}>
                        <NameDiv>{s.attributes.name}</NameDiv>

                        <ImgDiv><img src={s.attributes.name.length <= 10 ? mbtaImg : s.attributes.name.length <= 15 ? mbtaImg2 : mbtaImg3 } alt={"Cartoonized MBTA Green Line"}/></ImgDiv>
                        <TextDiv>{s.attributes.address || "Address Not Available"}</TextDiv>
                        <TextDiv>{s.attributes.municipality}</TextDiv>
                        <TextDiv>Wheelchair Access: {s.attributes.wheelchair_boarding >= 1 ? "Yes" : "No"}</TextDiv>
                    </StopDiv>
                ))
            }
        </AllStopsDiv>
    );
}