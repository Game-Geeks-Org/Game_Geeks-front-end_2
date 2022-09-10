import React, { useCallback, useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import '../Styles/spaceShooter.css'
import Modal from "../Components/UI/Modal/Modal";




const SS = () => {
  const [modal, setShowModal] = useState(false)
  const [isGameOver, setIsGameOver] = useState(false);
  //   const [userName, setUserName] = useState(null);
  const [score, setScore] = useState(0);

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

  const handleGameOver = useCallback((score) => {
    setIsGameOver(true);
    setScore(score);
  }, [score]);


  useEffect(() => {
    addEventListener("GameOver", handleGameOver);
    return () => {
      unload()
      removeEventListener("GameOver", handleGameOver);
    };
  }, [addEventListener, removeEventListener, unload, handleGameOver]);

  return (
    <>
      <button className="text-white mt-5 game_modal_btn" onClick={() => setShowModal(true)}>GAME MODAL</button>
      {modal && <Modal setShowModal={setShowModal} />}
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
          console.log(`Game Over! You've scored ${score} points.`)
        )}

      </div>
    </>

  );
};


export default SS;


