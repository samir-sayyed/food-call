import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../../mocks/restaurantData";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA);
    },
  });
});

test("Item should be get added to cart", async () => {
  const menu = await act(async () =>
    render(
      <StaticRouter>
        <Provider store={store}>
          <RestaurantMenu />
          <Header />
        </Provider>
      </StaticRouter>
    )
  );

  await waitFor(() => {
    menu.getByTestId("menu");
  });

  const menuContainer = menu.getByTestId("menu-container");

  const addBtn = menu.getAllByTestId("addBtn");

  fireEvent.click(addBtn[0]);
  fireEvent.click(addBtn[1]);
  fireEvent.click(addBtn[2]);

  const cart = menu.getByTestId("cart");

  expect(cart.innerHTML).toBe("Cart 3 items");
});
