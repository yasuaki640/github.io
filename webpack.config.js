module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: "development",
    entry: "./src/index.js",
    module: {
        rules: [
            {
                // 対象となるファイルの拡張子(cssのみ)
                test: /\.css$/,
                // Sassファイルの読み込みとコンパイル
                use: [
                    // スタイルシートをJSからlinkタグに展開する機能
                    "style-loader",
                    // CSSをバンドルするための機能
                    "css-loader"
                ]
            },
            {
                test: /\.json$/,
                type: "javascript/auto",
                use: {
                    loader: "json-loader",
                },
            },
        ]
    }
};