import { useState } from "react";

export default function ConvertImage() {
  const [userImage, setUserImage] = useState(null);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);

  const convertToBase64 = async (e: {
    target: { files: Blob[] };
  }): Promise<void> => {
    const file: Blob = e.target.files[0];
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setUserImage(reader.result);
    };
    reader.onerror = (error) => {
      console.error("Error converting  avatar  to base64:", error);
    };
  };
  const convert642 = async (e: {
    target: { files: Blob[] };
  }): Promise<void> => {
    const file: Blob = e.target.files[0];
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage1(reader.result);
    };
    reader.onerror = (error) => {
      console.error("Error converting  avatar  to base64:", error);
    };
  };
  const convert643 = async (e: {
    target: { files: Blob[] };
  }): Promise<void> => {
    const file: Blob = e.target.files[0];
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage2(reader.result);
    };
    reader.onerror = (error) => {
      console.error("Error converting  avatar  to base64:", error);
    };
  };
  const convert644 = async (e: {
    target: { files: Blob[] };
  }): Promise<void> => {
    const file: Blob = e.target.files[0];
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage3(reader.result);
    };
    reader.onerror = (error) => {
      console.error("Error converting  avatar  to base64:", error);
    };
  };
  const convert645 = async (e: {
    target: { files: Blob[] };
  }): Promise<void> => {
    const file: Blob = e.target.files[0];
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage4(reader.result);
    };
    reader.onerror = (error) => {
      console.error("Error converting  avatar  to base64:", error);
    };
  };

  return {
    userImage,
    image1,
    image2,
    image3,
    image4,
    convertToBase64,
    convert642,
    convert643,
    convert644,
    convert645,
    setUserImage,
    setImage1,
    setImage2,
    setImage3,
    setImage4,
  };
}
