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
        path: "routes",
        lazy: async () => {
          const { DefaultLayout } = await import("../layouts/DefaultLayout");
          return { Component: DefaultLayout };
        },
        children: [
          {
            ...({
              lazy: async () => {
                const { FilterLayouts } = await import(
                  "../layouts/FilterLayouts"
                );
                return { Component: FilterLayouts };
              },
              children: [
                {
                  index: true,
                  lazy: async () => {
                    const { RoutesListPage } = await import(
                      "../../pages/RoutesListPage"
                    );
                    return { Component: RoutesListPage };
                  },
                },
                {
                  path: ":id/seats",
                  lazy: async () => {
                    const { ChoosingTrainOrSeatsLayout } = await import(
                      "../layouts/ChoosingTrainOrSeatsLayout"
                    );
                    return { Component: ChoosingTrainOrSeatsLayout };
                  },
                  children: [
                    {
                      index: true,
                      lazy: async () => {
                        const { SeatsPage } = await import(
                          "../../pages/SeatsPage"
                        );
                        return { Component: SeatsPage };
                      },
                    },
                    {
                      path: "registration",
                      lazy: async () => {
                        const { TicketRegistrationLayout } = await import(
                          "../layouts/TicketRegistrationLayout"
                        );
                        return { Component: TicketRegistrationLayout };
                      },
                      children: [
                        {
                          index: true,
                          lazy: async () => {
                            const { RegistrationPage } = await import(
                              "../../pages/RegistrationPage"
                            );
                            return { Component: RegistrationPage };
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            } as unknown as RouteObject),
          },
        ],
      },
    ],
  },
];
