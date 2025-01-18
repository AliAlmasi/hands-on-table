import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Handsontable from "handsontable/base";
import { registerAllModules } from "handsontable/registry";
import { HotTable } from "@handsontable/react-wrapper";

registerAllModules() && console.error("couldn't register modules");

import "handsontable/styles/handsontable.min.css";
import "handsontable/styles/ht-theme-main.min.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<div className="ht-theme-main-dark-auto">
			<HotTable
				data={[
					["", "Tesla", "Volvo", "Toyota", "Ford"],
					["2019", 10, 11, 12, 13],
					["2020", 20, 11, 14, 13],
					["2021", 30, 15, 12, 13]
				]}
				rowHeaders={true}
				colHeaders={true}
				height="auto"
				autoWrapRow={true}
				autoWrapCol={true}
				licenseKey="non-commercial-and-evaluation"
			/>
		</div>
	</StrictMode>
);
