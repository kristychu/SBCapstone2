import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../reducers/rootReducer";
import { render } from "@testing-library/react";
import Routes from "../Routes";
import { MemoryRouter } from "react-router";

const store = createStore(reducer);

it("should render without crashing", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Routes />
      </MemoryRouter>
    </Provider>
  );
});

it("should match snapshot", function () {
  const { asFragment } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Routes />
      </MemoryRouter>
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
