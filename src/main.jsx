import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Handsontable from "handsontable/base";
import { registerAllModules } from "handsontable/registry";
import { HotTable } from "@handsontable/react-wrapper";

registerAllModules() && console.error("couldn't register modules");

import "handsontable/styles/handsontable.min.css";
import "handsontable/styles/ht-theme-main.min.css";

const App = () => {
	return (
		<div className="ht-theme-main-dark-auto">
			<h1>جدول فروش</h1>
			<HotTable
				data={[[10, 20, 30], [11, 11, 15], [12, 14, 12], [13, 13, 13], [null]]}
				rowHeaders={["تسلا", "ولوو", "تویوتا", "فورد", "مجموع"]}
				colHeaders={["2019", "2020", "2021"]}
				height={"auto"}
				colWidths={300}
				width={1000}
				autoWrapRow={true}
				autoWrapCol={true}
				manualColumnResize={true}
				manualRowResize={true}
				layoutDirection={"rtl"}
				manualColumnMove={true}
				filters={true}
				dropdownMenu={true}
				contextMenu={true}
				manualColumnFreeze={true}
				dragToScroll={true}
				columnSummary={[
					{
						sourceColumn: 0,
						type: "sum",
						reversedRowCoords: true,
						destinationRow: 0,
						destinationColumn: 0
					},
					{
						sourceColumn: 1,
						type: "sum",
						reversedRowCoords: true,
						destinationRow: 0,
						destinationColumn: 1
					},
					{
						sourceColumn: 2,
						type: "sum",
						reversedRowCoords: true,
						destinationRow: 0,
						destinationColumn: 2
					}
				]}
				rowHeaderWidth={100}
				enterBeginsEditing={true}
				columns={[{type: "numeric", readOnly: true}, {type: "numeric"}, {type: "numeric"}]}
			/>
		</div>
	);
};

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
);
