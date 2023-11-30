import { render } from "@testing-library/react";
import App from "../src/app/app";
import React from "react";
import { Provider } from "react-redux";
import store from "../src/store";

test("renders homepage unchanged", () => {
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(container).toMatchSnapshot();
});
