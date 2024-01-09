import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { EditCar } from "./EditCar"; // Import the component

// Mock the global fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        make: "Test",
        model: "Car",
        year: "2020",
        color: "Red",
        price: "10000",
      }),
  })
);

describe("EditCar Component Tests", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it("should render EditCar component", () => {
    render(<EditCar id="1" />);
    // Assertions to check if all fields and the button are rendered
    expect(screen.getByLabelText(/Make/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Model/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Year/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Color/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Price/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Update Car/i })
    ).toBeInTheDocument();
  });

  it("should fetch car details on load", async () => {
    render(<EditCar id="1" />);
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(`/api/1`);
    });
    // Assertions to check if the fields are populated with the fetched data
    expect(screen.getByLabelText(/Make/i).value).toBe("Test");
    expect(screen.getByLabelText(/Model/i).value).toBe("Car");
    // ... similar assertions for other fields
  });

  it("should update state on input change", () => {
    render(<EditCar id="1" />);
    const makeInput = screen.getByLabelText(/Make/i);
    fireEvent.change(makeInput, { target: { value: "New Make" } });
    expect(makeInput.value).toBe("New Make");
    // ... similar tests for other inputs
  });

  it("should handle form submission", async () => {
    render(<EditCar id="1" />);
    const submitButton = screen.getByRole("button", { name: /Update Car/i });
    fetch.mockResolvedValueOnce({ ok: true });
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(`/api/1`, expect.any(Object));
      // Here you can check the arguments passed to fetch to ensure correct API call
    });
    // Additional assertions to check handling of response
  });

  // Additional tests can be written to handle error scenarios, form validations, etc.
});
