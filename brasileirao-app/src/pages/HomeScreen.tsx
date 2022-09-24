import { SelectChangeEvent } from "@mui/material";
import Menu from "../components/Menu";
import Select from "../components/Select";
import { useEffect, useState } from "react";
import { getPartidasAno, getPartidas } from "../backend";
import _ from "lodash";
import { Cards, IData } from "../components/Cards";

export default function HomeScreen() {
  const [anos, setAnos] = useState<Array<string>>([]);
  const [ano, setAno] = useState<string | any>("");
  const [data, setData] = useState<IData[] | null>(null);
  const handlechange = (event: SelectChangeEvent) => {
    setAno(event.target.value);
  };

  useEffect(() => {
    getPartidas().then((pars) => {
      const allyear = Object.keys(pars).map(function (key) {
        return key;
      });
      setAnos(allyear);
      const firstyear = _.head(allyear);
      setAno(firstyear);
    });
  }, []);

  useEffect(() => {
    getPartidasAno(ano).then((par) => {
      var result = _.last(par)?.partidas;
      var lista: any = [];
      for (let i = 0; i < result.length; i++) {
        lista.push({
          time: result[i].mandante,
          P: result[i].pontuacao_geral_mandante.total_pontos,
          V: result[i].pontuacao_geral_mandante.total_vitorias,
          E: result[i].pontuacao_geral_mandante.total_empates,
          D: result[i].pontuacao_geral_mandante.total_derrotas,
          GP: result[i].pontuacao_geral_mandante.total_gols_marcados,
          GC: result[i].pontuacao_geral_mandante.total_gols_sofridos,
          S:
            result[i].pontuacao_geral_mandante.total_gols_marcados -
            result[i].pontuacao_geral_mandante.total_gols_sofridos,
        });
        lista.push({
          time: result[i].visitante,
          P: result[i].pontuacao_geral_visitante.total_pontos,
          V: result[i].pontuacao_geral_visitante.total_vitorias,
          E: result[i].pontuacao_geral_visitante.total_empates,
          D: result[i].pontuacao_geral_visitante.total_derrotas,
          GP: result[i].pontuacao_geral_visitante.total_gols_marcados,
          GC: result[i].pontuacao_geral_visitante.total_gols_sofridos,
          S:
            result[i].pontuacao_geral_visitante.total_gols_marcados -
            result[i].pontuacao_geral_visitante.total_gols_sofridos,
        });
      }
      lista = _.orderBy(lista, ["P", "V"], ["desc", "desc"]);
      setData(lista);
    });
  }, [ano]);

  return (
    <div>
      <Menu title="Ranking do Brasileirão" />
      <Select filter={ano} handlechange={handlechange} anos={anos} />
      {data && <Cards dado={data} />}
    </div>
  );
}
