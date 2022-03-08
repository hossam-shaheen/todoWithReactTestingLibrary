import { render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import TodoList from "./TodoList";


describe("Render TodoList", () => {

    test("Pass Empty todos array to TodoList", () => {

        const setTodos = jest.fn();

        render(<BrowserRouter>
            <TodoList todos={[]} setTodos={setTodos} />
        </BrowserRouter>);

        const todosListItem = screen.queryAllByRole("listitem");

        expect(todosListItem.length).toBe(0);

    })


    test("Pass 1 todo to TodoList", () => {

        const setTodos = jest.fn();

        render(<BrowserRouter>
            <TodoList todos={[{ id: "1", task: "Study React", completed: false }]} setTodos={setTodos} />
        </BrowserRouter>);

        const todosListItem = screen.queryAllByRole("listitem");

        expect(todosListItem.length).toBe(1);

    })



    test("Pass multiple todo to TodoList", () => {

        const setTodos = jest.fn();

        render(<BrowserRouter>
            <TodoList todos={[
                { id: "1", task: "Study React", completed: false },
                { id: "2", task: "Study Javascript", completed: false },
                { id: "3", task: "Study Typescript", completed: false }]} setTodos={setTodos} />
        </BrowserRouter>);

        const todosListItem = screen.queryAllByRole("listitem");

        expect(todosListItem.length).toBe(3);

    })



})