import PlayersList from "../Components/PlayersList";
import styled from "styled-components";

function Formation() {
  return (
    <div>
         <CenterStyle>
          <PlayersList />
        </CenterStyle>
       </div>
  );
}

export default Formation;

const CenterStyle = styled.div`
  display: flex;
  justify-content: center;
`;