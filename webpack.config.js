import path, {dirname} from "path";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
	mode: "development",
	entry: "./src/scripts/index.ts",
	devtool: "inline-source-map",
	output: {
		clean: true,
		filename: "bundle.js",
		path: path.join(__dirname, "dist"),
	},
	module: {
		rules: [
			{
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
		],
	},
};
