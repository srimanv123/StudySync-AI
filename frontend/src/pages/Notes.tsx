import UploadNote from "@/components/notes/UploadNote";

export default function Notes() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">My Notes</h1>
        <p className="text-gray-600 mb-8">
          Upload and manage your study notes.
        </p>

        {/* Upload Section */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <UploadNote />
        </div>

        {/* Notes List (Coming Next) */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Uploaded Notes</h2>

          <p className="text-gray-500">
            No notes found.
          </p>
        </div>
      </div>
    </main>
  );
}