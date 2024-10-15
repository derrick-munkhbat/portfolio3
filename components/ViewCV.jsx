"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const ViewCV = () => {
  const pdfUrl =
    "https://drive.google.com/file/d/1OpqfmTxBZ6T_8zxazP8WgflyJh6dxAm9/view?usp=drive_link"; // Replace with your Google Drive file ID

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.target = "_blank"; // Open in a new tab
    link.rel = "noopener noreferrer"; // Add rel attributes for security
    link.click();
  };

  return (
    <Button
      variant="outline"
      size="lg"
      className="uppercase flex items-center gap-2"
      onClick={handleDownload}
    >
      <span>View CV</span>
      <FiDownload className="text-xl" />
    </Button>
  );
};

export default ViewCV;
