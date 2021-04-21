import * as actions from "../actions";
import * as types from "../actionTypes";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import expect from "expect"; // You can use any testing library

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

/** User Actions
 * loadToken - LOAD_TOKEN
 * gotError - ERROR
 * logout - DELETE_TOKEN
 */

describe("async actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("creates LOAD_TOKEN when logging in a user", () => {
    const userData = { username: "test", password: "password123" };
    const token = "jsonwebtokentext";
    // fetchMock.mock("api/auth/login", 200);
    fetchMock.postOnce(
      "/api/auth/login",
      { response: "stuff" },
      {
        headers: { "content-type": "application/json", authorization: token },
      }
    );

    const expectedActions = { type: types.LOAD_TOKEN };
    const store = mockStore({ token: {} });

    // return store.dispatch(actions.login(userData)).then(() => {
    // return of async actions
    // expect(store.getActions()).toEqual(expectedActions);
    // });
  });
});

describe("loadToken", () => {
  it("should create an action to load a token", () => {
    const token = "jsonwebtokentext";
    const expectedAction = {
      type: types.LOAD_TOKEN,
      token,
    };
    expect(actions.loadToken(token)).toEqual(expectedAction);
  });
});

describe("gotError", () => {
  it("should create an action to get an error", () => {
    const error = "error received";
    const expectedAction = {
      type: types.ERROR,
      error,
    };
    expect(actions.gotError(error)).toEqual(expectedAction);
  });
});

describe("logout", () => {
  it("should create an action to delete the token", () => {
    const expectedAction = {
      type: types.DELETE_TOKEN,
    };
    expect(actions.logout()).toEqual(expectedAction);
  });
});

/** Product Search Actions
 * - fetchAPI - IS_LOADING
 * - loadProductResults - LOAD_PRODUCT_RESULTS
 * - clearProductResults - CLEAR_PRODUCT_RESULTS
 */

describe("fetchAPI", () => {
  it("should create an action to load spinner", () => {
    const expectedAction = {
      type: types.IS_LOADING,
    };
    expect(actions.fetchAPI()).toEqual(expectedAction);
  });
});

describe("loadProductResults", () => {
  it("should create an action to load product results", () => {
    const products = [{ productId: 1 }, { productId: 80 }];
    const expectedAction = {
      type: types.LOAD_PRODUCT_RESULTS,
      payload: products,
    };
    expect(actions.loadProductResults(products)).toEqual(expectedAction);
  });
});

describe("clearProductResults", () => {
  it("should create an action to clear product results", () => {
    const expectedAction = {
      type: types.CLEAR_PRODUCT_RESULTS,
    };
    expect(actions.clearProductResults()).toEqual(expectedAction);
  });
});

/** Step Actions
 * - loadSteps - LOAD_ALL_STEPS
 * - addStep - ADD_STEP
 * - removeProductFromStep - DELETE_STEP
 */

describe("loadSteps", () => {
  it("should create an action to load steps", () => {
    const steps = [{ stepNumber: 1 }, { stepNumber: 2 }, { stepNumber: 3 }];
    const expectedAction = {
      type: types.LOAD_ALL_STEPS,
      payload: steps,
    };
    expect(actions.loadSteps(steps)).toEqual(expectedAction);
  });
});

describe("addStep", () => {
  it("should create an action to add a step", () => {
    const step = [{ stepNumber: 4 }];
    const expectedAction = {
      type: types.ADD_STEP,
      payload: step,
    };
    expect(actions.addStep(step)).toEqual(expectedAction);
  });
});

describe("removeProductFromStep", () => {
  it("should create an action to remove data from step", () => {
    const routineName = "Cleanser";
    const time = "morning";
    const expectedAction = {
      type: types.DELETE_STEP,
      payload: { routineName, time },
    };
    expect(actions.removeProductFromStep(routineName, time)).toEqual(
      expectedAction
    );
  });
});

/** PRODUCT ACTIONS
 * - loadProductDetails - LOAD_PRODUCT_DETAILS
 */

describe("loadProductDetails", () => {
  it("should create an action to load product details", () => {
    const productInfo = { id: 1, name: "Name" };
    const expectedAction = {
      type: types.LOAD_PRODUCT_DETAILS,
      payload: productInfo,
    };
    expect(actions.loadProductDetails(productInfo)).toEqual(expectedAction);
  });
});
