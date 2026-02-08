import React, { useState } from "react";
import FileUploader from "~/components/file-uploader";
import Navbar from "~/components/Navbar";

const upload = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusText, setStatusText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsProcessing(true);
  };

  const handleFileSelect = (file: File | null) => {
    setFile(file);
  };

  return (
    <main className="bg-[url('/images/bg-main.svg')] object-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Upload to obtain smart feedback</h1>
          {isProcessing ? (
            <>
              <h2>{statusText}</h2>
              <img
                src="/images/resume-scan.gif"
                alt="Processing"
                className="w-full"
              />
            </>
          ) : (
            <h2>Upload your resume to get started. ATS score and more</h2>
          )}

          {!isProcessing && (
            <form
              id="uploadForm"
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 mt-8"
            >
              <div className="form-div">
                <label htmlFor="company-name">Company Name</label>
                <input
                  type="text"
                  id="company-name"
                  placeholder="Company name"
                />
              </div>
              <div className="form-div">
                <label htmlFor="job-title">Job Title</label>
                <input type="text" id="job-title" placeholder="Job title" />
              </div>
              <div className="form-div">
                <label htmlFor="job-description">Job Description</label>
                <input
                  type="text"
                  id="job-description"
                  placeholder="Job description"
                />
              </div>
              <div className="form-div">
                <label htmlFor="uploader">Upload Resume</label>
                <FileUploader onFileSelect={handleFileSelect} />
              </div>

              <button type="submit" className="primary-button">
                Analyze resume
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
};
export default upload;
