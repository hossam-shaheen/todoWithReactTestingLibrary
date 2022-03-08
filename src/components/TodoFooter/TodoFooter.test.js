import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import TodoFooter from "./TodoFooter"


describe("Render Footer", () => {
    it("pass only 0 task", () => {
        render(<BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={0} />
        </BrowserRouter>);

        const numberOfIncompleteTasksElement = screen.getByTitle("numberOfIncompleteTasks");

        expect(numberOfIncompleteTasksElement.textContent).toBe("0 task left")
    })

    it("pass More than one task", () => {
        render(<BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={5} />
        </BrowserRouter>);

        const numberOfIncompleteTasksElement = screen.getByTitle("numberOfIncompleteTasks");

        expect(numberOfIncompleteTasksElement.textContent).toBe("5 tasks left")

    })


    it("Don't pass any Task", () => {
        render(<BrowserRouter>
            <TodoFooter />
        </BrowserRouter>);

        const numberOfIncompleteTasksElement = screen.getByTitle("numberOfIncompleteTasks");

        expect(numberOfIncompleteTasksElement.textContent).toBe("0 task left")

    })
})