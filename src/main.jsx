import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// import Handsontable from "handsontable/base";
import { registerAllModules } from "handsontable/registry";
import { HotTable } from "@handsontable/react-wrapper";

registerAllModules() && console.error("couldn't register modules");

import "handsontable/styles/handsontable.min.css";
import "handsontable/styles/ht-theme-main.min.css";

const App = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("handsontable");

  useEffect(() => {
    const fetchData = async () => {
      try {
          const url = "http://localhost:3002/product_list";
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        setName(url.split("/").reverse()[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

	return (
		<div className="ht-theme-main-dark-auto ">
			<h1>{name}</h1>
			<HotTable
				licenseKey="non-commercial-and-evaluation"
				rowHeaders={true}
				colHeaders={true}
				height={"auto"}
				width={1000}
				rowHeaderWidth={100}
				rowHeights={40}
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
				enterBeginsEditing={true}
				navigableHeaders={true}
				columnSorting={true}
				hiddenColumns={true}
				data={data}
				className="htCenter htMiddle"
				autoColumnSize={true}
			/>
		</div>
	);
};

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
);
