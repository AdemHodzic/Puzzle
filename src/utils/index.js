export const concatRoutes = (base, routes) =>
  routes.map(route => ({
    ...route,
    path: `${base}${route.path}`
  }));
