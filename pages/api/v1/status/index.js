import database from "infra/database.js";

async function status(request, response) {
  console.log(database);

  const updatedAt = new Date().toISOString();

  response.status(200).json({
    updated_at: updatedAt,
  });
}

export default status;
