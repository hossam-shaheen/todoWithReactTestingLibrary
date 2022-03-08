import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Todo from "./Todo"


describe("Render TodoList", () => {

    it("add todo and complete it", () => {

        // Render Todo 
        render(<BrowserRouter>
            <Todo />
        </BrowserRouter>);

        const todoInput = screen.getByRole("textbox");
        const todoButton = screen.getByRole("button");

        // Add Todo 
        userEvent.type(todoInput, "Study React");

        userEvent.click(todoButton);

        expect(todoInput.value).toBe("");

        const todoListItem = screen.getByRole("listitem");

        expect(todoListItem).toBeInTheDocument();

        const numberOfIncompleteTasks = screen.getByTitle("numberOfIncompleteTasks");

        expect(numberOfIncompleteTasks.textContent).toBe("1 task left");

        // click in todo list item
        userEvent.click(todoListItem)

        expect(todoListItem).toHaveClass("todo-item-active")
        expect(numberOfIncompleteTasks.textContent).toBe("0 task left");

    })


})