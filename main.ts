Deno.serve(async (request: Request) => {
  if (request.url.match("/redirect-with-index")) {
    const redirect = new Response("", {
      status: 307,
      headers: {
        Location: "https://loud-dodo-69.deno.dev/redirect-with-noindex",
        "X-Robots-Tag": "index",
      },
    });

    return redirect;
  }
  if (request.url.match("/redirect-with-noindex")) {
    const redirect = new Response("", {
      status: 307,
      headers: {
        Location: "https://loud-dodo-69.deno.dev/indexable",
        "X-Robots-Tag": "noindex",
      },
    });

    return redirect;
  }
  if (request.url.match("/indexable")) {
    const response = new Response("Indexable", {
      status: 200,
      headers: { "X-Robots-Tag": "index" },
    });

    return response;
  }

  return new Response(`You are here ${JSON.stringify(request.url)}`, {
    status: 200,
  });
});
