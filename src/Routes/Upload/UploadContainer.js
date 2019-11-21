import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useQuery, useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";

import UploadPresenter from "./UploadPresenter";
import { UPLOAD_POST } from "./UploadQueries";
import { ME } from "../../SharedQueries";

export default withRouter(() => {
  const [filesLocal, setFilesLocal] = useState("");
  const [captionLocal, setCaptionLocal] = useState("");
  const [locationLocal, setLocationLocal] = useState("");

  const { data, loading } = useQuery(ME);
  const [uploadPost] = useMutation(UPLOAD_POST, {
    variables: {
      files: filesLocal,
      caption: captionLocal,
      location: locationLocal
    }
  });

  const onKeyPress = () => {
    setFilesLocal(
      "https://i.pinimg.com/736x/eb/ea/03/ebea03943985655b8f6eaa9139be3ab9.jpg"
    );
    setCaptionLocal("FromUploadContainer");
    setLocationLocal("FromUploadContainer");
    console.log("uploadPost");
    uploadPost();
  };

  return (
    <UploadPresenter loading={loading} data={data} onKeyPress={onKeyPress} />
  );
});
