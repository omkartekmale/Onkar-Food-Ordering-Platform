import { fireEvent, render,screen } from "@testing-library/react"
import Header from "../Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import UserStore from "../../utils/UserStore";
import "@testing-library/jest-dom"

test("test header",()=>{
    render(
    <BrowserRouter>
<Provider store={UserStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    )

    const loginbutton=screen.getByRole("button")
    fireEvent.click(loginbutton);

    expect(loginbutton).toBeInTheDocument();
})
