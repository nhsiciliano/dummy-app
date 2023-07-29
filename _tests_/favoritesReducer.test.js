import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import favoritesReducer, { addToFavorites } from '../redux/favoritesReducer';

const mockStore = configureMockStore([thunk]);
const store = mockStore({});

describe("favorites reducer", () => {
    it("should return the initial state when passed an empty action", () => {
        const initialState = undefined;
        const action = { type: "" };
        const result = favoritesReducer(initialState, action);
        expect(result).toEqual({ "carting": [], "favorites": [] })
    })
})

describe('favoritesSlice', () => {
    it('should add a product to favorites', () => {
        const productToAdd = { id: 1, title: 'Product number 1', description: 'This is a product.' };

        // Dispatch the action
        store.dispatch(addToFavorites(productToAdd));

        // Get the actions that were dispatched to the store
        const actions = store.getActions(favoritesReducer);

        // Check if the correct action type was dispatched
        expect(actions[0].type).toEqual('favorites/addToFavorites');
    });
});


