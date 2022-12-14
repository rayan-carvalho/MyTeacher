import type { NextPage } from "next";
import Cabecalho from "components/Cabecalho/Cabecalho";
import Lista from "components/Lista/Lista";
import { Box } from "@mui/material";
import { Professor } from "interfaces/Professor";
const Home: NextPage = () => {
  const professores: Professor[] = [
    {
      id: 1,
      nome: "Rayan Carvalho",
      foto: "http://github.com/rayan-carvalho.png",
      descricao: "Descrição do professor 1",
      valor_hora: 100,
    },
    {
      id: 2,
      nome: "Rayan Carvalho 2",
      foto: "http://github.com/rayan-carvalho.png",
      descricao: "Descrição do professor 2",
      valor_hora: 100,
    },
    {
      id: 3,
      nome: "Rayan Carvalho 3",
      foto: "http://github.com/rayan-carvalho.png",
      descricao: "Descrição do professor 3",
      valor_hora: 100,
    },
    {
      id: 4,
      nome: "Rayan Carvalho 4",
      foto: "http://github.com/rayan-carvalho.png",
      descricao: "Descrição do professor 4",
      valor_hora: 100,
    },
  ];

  return (
    <Box sx={{ backgroundColor: "secondary.main" }}>
      <Lista professores={professores}></Lista>
    </Box>
  );
};
export default Home;
