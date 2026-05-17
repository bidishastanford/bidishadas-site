export const onRequest = async ({ request, next }) => {
  const url = new URL(request.url);
  const host = url.hostname;

  if (host === 'bidishadas-site.pages.dev' || host === 'www.bidishadas.com') {
    url.hostname = 'bidishadas.com';
    url.port = '';
    return Response.redirect(url.toString(), 301);
  }

  return next();
};
