import React from 'react';

class MyaApp extends React.Component {

    sentence() {
        return (
            <>
                <p>
                    <a href="https://tetlis-by-pure-javascript.s3-ap-northeast-1.amazonaws.com/index.html"
                       target="_blank"
                       rel="noopener noreferrer">生JavaScriptによるテトリスゲーム<br/>(スマホ操作非対応)</a>
                </p>
                <p>
                    <a href="https://sns2-2020.s3-ap-northeast-1.amazonaws.com/login.html" target="_blank"
                       rel="noopener noreferrer">Node.js、AWS Lambdaによるログイン形式の掲示板</a>
                </p>
                <p>Laravelによる宗教法人向け人数集計アプリ<br/>
                    (※宗教上の理由で非公開)</p>
                <p><a  href="https://github.com/yasuaki640/yasuaki640.github.io" target="_blank"
                       rel="noopener noreferrer">Simple Reactによるポートフォリオサイト（this site）</a>
                    </p>
            </>
        );
    }

    render() {
        const contentTitle = 'MyApps';
        return (
            <div className="content mb-5">
                <h3 className="mb-3" id={contentTitle}>{contentTitle}</h3>
                {this.sentence()}
            </div>
        );
    }


}

export default MyaApp;