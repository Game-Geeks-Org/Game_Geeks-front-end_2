import React,{useCallback, useEffect, useState} from "react";
import { Unity, useUnityContext } from "react-unity-webgl";



const SS = () => {
    const [isGameOver, setIsGameOver] = useState(false);
//   const [userName, setUserName] = useState(null);
  const [score, setScore] = useState(true);

  const handleGameOver = useCallback(( score) => {
    setIsGameOver(true);
    setScore(score);
  }, []);


  useEffect(() => {
    addEventListener("GameOver", handleGameOver);
    return () => {
      removeEventListener("GameOver", handleGameOver);
    };
  }, [handleGameOver]);


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
            {isGameOver === true && (
            console.log(` You've scored ${score} points.`)
      )}
        </div>
    );
};


export default SS;


