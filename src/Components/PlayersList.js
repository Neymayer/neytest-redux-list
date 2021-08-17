import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setPlayers,
  removeFromFormation,
  addToFormation,
} from "../Utils/features/Slice";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import List from "@material-ui/core/List";
import MaterialListItem from "./MaterialListItem";
import Input from "./Input";
import axios from "axios";

function PlayersList() {
  const players = useSelector((state) => state.players.value);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch(setPlayers(request.data));
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log(players);
  }, [players]);
  return (
    <div>
      {/* <Button onClick={() => dispatch(setPlayers([]))}>Set Player </Button> */}
      <List>
        {players.map((player, index) => (
          <>
            {/* <Table>
            <PlayerStyle>{player.name}</PlayerStyle>
            <DeleteStyle>
              <DeleteIcon />
            </DeleteStyle>
          </Table> */}
            <MaterialListItem
              key={index}
              name={player.name}
              clickedDelete={() => dispatch(removeFromFormation(player))}
            />
          </>
        ))}
      </List>
      <Input
        onButtonPressed={(playerName) => dispatch(addToFormation(playerName))}
      />
    </div>
  );
}

export default PlayersList;

const Table = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  background-color: #33ff77;
  max-width: 100px;
  border-radius: 5px;
  margin: 2px;
  padding: 5px;
  :hover {
    background-color: whitesmoke;
`;

const PlayerStyle = styled.div`
  display: flex;
  align-items: center;
`;

const DeleteStyle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: grey;
`;