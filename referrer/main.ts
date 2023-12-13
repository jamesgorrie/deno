const redirect = new Response("", {
  status: 307,
  headers: {
    Location: `/referrer`,
  },
});

Deno.serve(async (request: Request) => {
  if (request.url.match("/redirect")) {
    return redirect;
  }

  if (request.url.match("/referrer")) {
    return new Response(
      `referrer: ${JSON.stringify(request.headers.get("Referer"))}`,
      {
        status: 200,
      }
    );
  }

  return new Response(
    `
      <ul>
          <li><a href="/referrer">Link</a></li>
          <li><a href="/redirect">Link to redirect</a></li>
          <li><a href="/referrer" rel="noreferrer">Link (rel=noreferrer)</a></li>
          <li><a href="/redirect" rel="noreferrer">Link to redirect (rel=noreferrer)</a></li>
      </ul>`,
    {
      status: 200,
      headers: {
        "Content-Type": "text/html",
      },
    }
  );
});
