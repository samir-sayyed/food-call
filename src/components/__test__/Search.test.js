import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import Body from "../Body";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mocks/restaurantData";
import { act } from "react-dom/test-utils";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

// test("Shimmer should be present on homepage", async () => {
//   const body = await act(async () =>
//     render(
//       <StaticRouter>
//         <Provider store={store}>
//           <Body />
//         </Provider>
//       </StaticRouter>
//     )
//   );

//   const shimmer = body.getByTestId("shimmer");

//   expect(shimmer).toBeInTheDocument();
// });

test("Restaurant should be present on homepage", async () => {
  const body = await act(async () =>
    render(
      <StaticRouter>
        <Provider store={store}>
          <Body />
        </Provider>
      </StaticRouter>
    )
  );

  await waitFor(() => {
    body.getByTestId("restaurant-container");
  });

  const restaurantContainer = body.getByTestId("restaurant-container");

  expect(restaurantContainer.children.length).toBe(15);
});

// test("Search should search given restaurant on homepage", async () => {
//   const body = render(
//     <StaticRouter>
//       <Provider store={store}>
//         <Body />
//       </Provider>
//     </StaticRouter>
//   );

//   await waitFor(() => expect(body.getByTestId("restaurant-container")));

//   const searchBtn = body.getByTestId("search-btn");
//   console.log(searchBtn);

//   const searchBox = body.getByTestId("search-box");
//   console.log(searchBox);

//   fireEvent.change(searchBox, {
//     target: {
//       value: "kfc",
//     },
//   });

//   fireEvent.click(searchBtn);

//   await waitFor(() => expect(body.getByTestId("restaurant-container")));

//   const restaurantContainer = body.getByTestId("restaurant-container");

//   expect(restaurantContainer.children.length).toBe(1);
// });
