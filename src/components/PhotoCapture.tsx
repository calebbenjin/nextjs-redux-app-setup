import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import { IoCameraOutline } from "react-icons/io5";

const PhotoCapture: React.FC = () => {
  const webcamRef = useRef<Webcam>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [cameraEnabled, setCameraEnabled] = useState(false);
  const [uploading, setUploading] = useState(false);

  const capturePhoto = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setImageSrc(imageSrc);
    }
  };

  const retakePhoto = () => {
    setImageSrc(null);
    setCameraEnabled(true);
  };

  const cancelWebcam = () => {
    setCameraEnabled(false);
    setImageSrc(null);
  };

  const sendPhoto = async () => {
    if (imageSrc) {
      setUploading(true);
      try {
        const response = await fetch("YOUR_BACKEND_ENDPOINT", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ image: imageSrc }),
        });

        if (response.ok) {
          alert("Photo uploaded successfully!");
        } else {
          alert("Failed to upload photo.");
        }
      } catch (error) {
        console.error("Error uploading photo:", error);
        alert("Error uploading photo.");
      } finally {
        setUploading(false);
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      {!cameraEnabled ? (
        <label
          onClick={() => setCameraEnabled(true)}
          className="h-10 w-full flex justify-center items-center bg-blue-400 rounded-md">
          <IoCameraOutline className="text-2xl text-gray-800 mr-2" /> Camera
        </label>
      ) : !imageSrc ? (
        <>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="border-2 border-gray-300 rounded-md w-[300px] h-[200px]"
          />
          <div className="mt-4 space-x-4">
            <button
              onClick={capturePhoto}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Capture
            </button>
            <button
              onClick={cancelWebcam}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <img src={imageSrc} alt="Captured" className="rounded-md" />
          <div className="mt-4 space-x-4">
            <button
              onClick={retakePhoto}
              className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700">
              Retake
            </button>
            <button
              onClick={sendPhoto}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              disabled={uploading}>
              {uploading ? "Uploading..." : "Send Photo"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PhotoCapture;
