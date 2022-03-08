import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import AddInput from "./AddInput"

describe("Render Add Task Input", () => {
    test("Add Todo to input", () => {
        const setTodos = jest.fn();

        render(<AddInput setTodos={setTodos} todos={[]} />)

        const todoInput = screen.getByPlaceholderText("Add a new task here", { exact: false })

        userEvent.type(todoInput, "study React !")

        expect(todoInput.value).toBe("study React !");
    })


    test("Add Todo to input and click add button", () => {
        const setTodos = jest.fn();

        render(<AddInput setTodos={setTodos} todos={[]} />)

        const todoInput = screen.getByPlaceholderText("Add a new task here", { exact: false })

        const addBtn = screen.getByRole("button");

        userEvent.type(todoInput, "study React !");

        userEvent.click(addBtn);

        expect(todoInput.value).toBe("");
    })

})