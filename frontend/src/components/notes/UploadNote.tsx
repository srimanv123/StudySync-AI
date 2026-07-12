import { useState } from "react";
import { uploadNote } from "../../services/note.service";

const UploadNote = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!title || !file) {
      alert("Please enter title and choose a file.");
      return;
    }

    try {
      setLoading(true);

      const data = await uploadNote(title, file);

      console.log(data);

      alert("Note uploaded successfully!");

      setTitle("");
      setFile(null);
    } catch (error) {
      console.error(error);
      alert("Upload failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px" }}>
      <h2>Upload Notes</h2>

      <input
        type="text"
        placeholder="Enter Note Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />
      <br />

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => {
          if (e.target.files) {
            setFile(e.target.files[0]);
          }
        }}
      />

      <br />
      <br />

      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
};

export default UploadNote;