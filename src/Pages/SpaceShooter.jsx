import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";



const SS = () => {
    const {
        unityProvider,
        isLoaded,
        unload,
        loadingProgression,
        addEventListener,
        removeEventListener,
        sendMessage
    } = useUnityContext({
        loaderUrl: "SSBuild/Build/webgl.loader.js",
        dataUrl: "SSBuild/Build/webgl.data",
        frameworkUrl: "SSBuild/Build/webgl.framework.js",
        codeUrl: "SSBuild/Build/webgl.wasm",
    });

  

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Unity
                className="unity"
                unityProvider={unityProvider}
                style={{
                    width: "100%",
                    aspectRatio: "16:9",
                    overflow: "hidden",
                }}
            />
        </div>
    );
};


export default SS;