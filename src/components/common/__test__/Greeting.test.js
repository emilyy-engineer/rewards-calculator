import { render, screen } from "@testing-library/react"
import Greeting from "../Greeting"

describe("Greeting component", () => {
  it('should greet the user by name if role is not admin', () => {
    render(<Greeting name="John" />)

    const greetingElement = screen.getByText('Hi! John');
    expect(greetingElement).toBeInTheDocument();
  });

  it("should greet with Admin if role is admin", () =>{
    render(<Greeting name="John" role="admin" />);
    const greetingElement = screen.getByText('Hi! Admin');
    expect(greetingElement).toBeInTheDocument();
  })
})