test("Get to api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  console.log(response);

  expect(response.status).toBe(200);

  const responseBody = await response.json();
  console.log(responseBody.updated_at);
  console.log(responseBody.version);
  console.log(responseBody.conections);
  console.log(responseBody.use_conections);

  expect(responseBody.updated_at).toBeDefined();
  expect(responseBody.version).toBeDefined();
  expect(responseBody.conections).toBeDefined();

  const parsedDate = new Date(responseBody.updated_at).toISOString();
  // console.log(parsedDate);

  expect(responseBody.updated_at).toEqual(parsedDate);
});
