module.exports = {
	 entry: "./src/scripts/scripts.js",
	 output: {
	 path: __dirname,
		 filename: "./public/bundle.js"
		 },
 module: {
	 loaders: [
		 {
			 test: /.css$/,
				 loader: "style!css"
				 },
		 {
			 test: /.sass$/,
				 loaders: ["style", "css", "sass"]
				 }
		 ]
	 }
 };
