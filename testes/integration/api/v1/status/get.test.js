test("Get to api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  console.log(response);

  expect(response.status).toBe(200);

  const responseBody = await response.json();

  expect(responseBody.updated_at).toBeDefined();
  const parsedDate = new Date(responseBody.updated_at).toISOString();
  console.log(parsedDate);
  expect(new Date(responseBody.updated_at).toISOString()).toEqual(
    responseBody.updated_at,
  );
});
