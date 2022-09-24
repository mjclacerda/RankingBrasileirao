import {
  Avatar,
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import _ from "lodash";

interface IDado {
  dado: IData[];
}

export interface IData {
  time: string;
  P: string;
  V: string;
  E: string;
  D: string;
  GP: string;
  GC: string;
  S: string;
}

const header = ["", "", "", "P", "V", "E", "D", "GP", "GC", "S"];

function idrandon() {
  return _.random(0, 100000000);
}
//Função para buscar a imagem do time no public/img
function findImg(time: string) {
  const nome = time.toLowerCase();
  return `/public/img/${nome}.png`;
}

export function Cards({ dado }: IDado) {
  return (
    <Container maxWidth="md">
      <Table aria-label="a dense table">
        <TableHead>
          <TableRow>
            {header.map((el) => (
              <TableCell className="" align="left" key={idrandon()}>
                {el}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {dado.map((item) => (
            <TableRow key={idrandon()}>
              <TableCell align="left">{dado.indexOf(item) + 1}</TableCell>
              <Box alignSelf="center" marginTop="7px">
                <Avatar
                  alt={item.time}
                  src={findImg(item.time)}
                  sx={{ width: 32, height: 36 }}
                  variant="square"
                />
              </Box>
              <TableCell align="left">{item.time.toUpperCase()}</TableCell>
              <TableCell align="left">{item.P}</TableCell>
              <TableCell align="left">{item.V}</TableCell>
              <TableCell align="left">{item.E}</TableCell>
              <TableCell align="left">{item.D}</TableCell>
              <TableCell align="left">{item.GP}</TableCell>
              <TableCell align="left">{item.GC}</TableCell>
              <TableCell align="left">{item.S}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
