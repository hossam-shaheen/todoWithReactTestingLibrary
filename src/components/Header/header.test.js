import { render, screen } from "@testing-library/react"
import Header from "./Header"


describe("Render Header", () => {



    test("Pass title to header", () => {
        render(<Header title={"Todo Header"} />);

        const header = screen.getByRole("heading");

        expect(header.textContent).toBe("Todo Header")

    })

    test("Pass empty title to header", () => {
        render(<Header title={""} />);
        const header = screen.queryByRole("heading");

        expect(header).not.toBeInTheDocument();
    })

    test("Don't pass Title to header", () => {
        render(<Header />);

        const header = screen.queryByRole("heading");

        expect(header).not.toBeInTheDocument();
    })

})