const redirect = (xRobotsTag: "index" | "noindex" | "", path: string) => new Response("", {
  status: 307,
  headers: {
    Location: `https://loud-dodo-69.deno.dev${path}`,
    "X-Robots-Tag": xRobotsTag,
  },
});

Deno.serve(async (request: Request) => {
  if (request.url.match("/redirect-robots/redirect-with-index/1")) {
    return redirect("index", "/redirect-robots/redirect-with-index/2");
  }
  if (request.url.match("/redirect-robots/redirect-with-index/2")) {
    return redirect("index", "/redirect-robots/redirect-with-index/3");
  }
  if (request.url.match("/redirect-robots/redirect-with-index/3")) {
    return new Response("Indexable", {
      status: 200,
    });
  }

  if (request.url.match("/redirect-robots/redirect-with-noindex/1")) {
    return redirect("index", "/redirect-robots/redirect-with-noindex/2");
  }
  if (request.url.match("/redirect-robots/redirect-with-noindex/2")) {
    return redirect("noindex", "/redirect-robots/redirect-with-noindex/3");
  }
  if (request.url.match("/redirect-robots/redirect-with-noindex/3")) {
    return new Response("Not indexable", {
      status: 200,
    });
  }

  if (request.url.match("/redirect-robots/redirect-with-unset-index/1")) {
    return redirect("", "/redirect-robots/redirect-with-unset-index/2");
  }
  if (request.url.match("/redirect-robots/redirect-with-unset-index/2")) {
    return redirect("", "/redirect-robots/redirect-with-unset-index/3");
  }
  if (request.url.match("/redirect-robots/redirect-with-unset-index/3")) {
    return new Response("Not set", {
      status: 200,
    });
  }

  return new Response("You are here", {
    status: 200,
  });
});
