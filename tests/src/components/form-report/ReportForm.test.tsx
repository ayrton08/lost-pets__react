import React from "react";
import { render } from "@testing-library/react";
import { ReportForm } from "../../../../src/components/form-report/ReportForm";

describe("<ReportForm />", () => {
  test("should first", () => {
    const { debug } = render(<ReportForm children="Reportar" />);

    debug()
  });
});
