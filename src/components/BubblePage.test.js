import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
// import {BubblePage} from "./BubblePage"

test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<BubblePage />)
});

test("Fetches data and renders the bubbles on mounting", () => { //async
  // Finish this test
  // mockBubblePage.mockResolvedValuesOnce({
  //   data:[
  //     {
  //       color: "coloName1",
  //       code: { hex: "#color1" }
  //     },
  //     {
  //       color: "coloName2",
  //       code: { hex: "#color2" }
  //     }
  //   ]
  // });

  // render(<BubblePage />);

  // await waitFor(() => {
  //   expect(screen.getAllByText("#")).toHaveLength(2)
  // })
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading