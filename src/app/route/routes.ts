import type { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: "/",
    lazy: async () => {
      const { MainLayout } = await import("../layouts/MainLayout");
      return { Component: MainLayout };
    },
    children: [
      {
        index: true,
        lazy: async () => {
          const { MainPages } = await import("../../pages/MainPages");
          return { Component: MainPages };
        },
      },
      {
        path: "trains",
        lazy: async () => {
          const { DefaultLayout } = await import("../layouts/DefaultLayout");
          return { Component: DefaultLayout };
        },
        children: [
          {
            index: true,
            lazy: async () => {
              const { RoutesListPage } = await import("../../pages/RoutesListPage");
              return { Component: RoutesListPage };
            },
          },
          {
            path: ":id/seats",
            lazy: async () => {
              const { SeatsPage } = await import("../../pages/SeatsPage");
              return { Component: SeatsPage };
            },
          },
          {
            path: ":id/seats/registration",
            lazy: async () => {
              const { RegistrationPage } = await import("../../pages/RegistrationPage");
              return { Component: RegistrationPage };
            },
          },
        ],
      },
    ],
  },
];
