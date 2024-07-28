import { render, screen } from "@testing-library/react"
import App from "./App"
import { Provider } from "react-redux"
import { store } from "./store/store"


describe('App', () => {
    it('render App', () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        )
        expect(screen.getByTestId('test')).toBeInTheDocument();
    })
})