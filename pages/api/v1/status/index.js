import database from "infra/database.js";

async function status(request, response) {
  // console.log(database);

  const updatedAt = new Date().toISOString();

  const versionRes = await database.query("SELECT version();"); //fazendo a requisição da versão
  const version = versionRes.rows[0].version; //isolando a resposta
  // console.log(versionRes);

  const conectionsRes = await database.query("SHOW max_connections;");
  const conections = conectionsRes.rows[0].max_connections; //isolando a resposta
  // console.log(conectionsRes);

  const useConectionsRes = await database.query(
    "SELECT COUNT(*) FROM pg_stat_activity;",
  );
  const useConections = useConectionsRes.rows[0].count;
  console.log(useConectionsRes);

  response.status(200).json({
    updated_at: updatedAt,
    version: version,
    conections: conections,
    use_conections: useConections,
  });
}

export default status;
