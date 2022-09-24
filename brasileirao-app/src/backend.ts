//Declarações typescript
export interface IPartidas {
  partidas: any;
}
//Função para pegar as partidas por ano
export function getPartidasAno(
  year: number | string | undefined
): Promise<IPartidas[]> {
  return fetch(`http://localhost:3000/${year}`, {
    credentials: "include",
    method: "GET",
  }).then(handleresp);
}
//Função para pegar todas as partidas
export function getPartidas(): Promise<object> {
  return fetch(`http://localhost:3000/db`, {
    credentials: "include",
    method: "GET",
  }).then(handleresp);
}
//Função para tratar as resposta do fetch
function handleresp(resp: Response) {
  if (resp.ok) {
    return resp.json();
  } else {
    throw new Error(resp.statusText);
  }
}
