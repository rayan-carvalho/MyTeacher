import { Button } from "@mui/material";
import { Professor } from "interfaces/Professor";
import {
  Descricao,
  Foto,
  Informcacoes,
  ItemLista,
  ListaStyled,
  ListaVazia,
  Nome,
  Valor,
} from "./Lista.style";

interface ListaProps {
  professores: Professor[];
}

const Lista = (props: ListaProps) => {
  return (
    <div>
      {props.professores.length > 0 ? (
        <ListaStyled>
          {props.professores.map((professor) => (
            <ItemLista key={professor.id}>
              <Foto src={professor.foto}></Foto>
              <Informcacoes>
                <Nome>{professor.nome}</Nome>
                <Valor>
                  {professor.valor_hora.toLocaleString("pt-br", {
                    minimumFractionDigits: 2,
                    style: "currency",
                    currency: "BRL",
                  })}{" "}
                  por hora
                </Valor>
                <Descricao>A{professor.descricao}</Descricao>
                <Button sx={{ width: "70%" }}>
                  Marcar Aula com {professor.nome}
                </Button>
              </Informcacoes>
            </ItemLista>
          ))}
        </ListaStyled>
      ) : (
        <ListaVazia>Nenhum item</ListaVazia>
      )}
    </div>
  );
};
export default Lista;
