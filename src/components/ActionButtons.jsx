
import { Button } from "@/components/ui/button";
import { downloadAsImage, downloadAsPDF } from "@/utils/downloadUtils";
import { useToast } from "@/hooks/use-toast";
import { FileImage, FileText, Maximize2 } from "lucide-react";

export const ActionButtons = ({ setIsFullPreview }) => {
  const { toast } = useToast();

  const handleDownloadImage = async () => {
    try {
      await downloadAsImage();
      toast({
        title: "Success!",
        description: "Your greeting card has been downloaded as an image.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to download image. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleDownloadPDF = async () => {
    try {
      await downloadAsPDF();
      toast({
        title: "Success!",
        description: "Your greeting card has been downloaded as a PDF.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to download PDF. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-4 pt-4">
      {/* Full Preview Button */}
      <Button 
        onClick={() => setIsFullPreview(true)}
        variant="outline" 
        className="w-full"
      >
        <Maximize2 className="w-4 h-4 mr-2" />
        Full Preview
      </Button>

      {/* Download Buttons */}
      <div className="flex gap-4">
        <Button onClick={handleDownloadImage} className="flex-1">
          <FileImage className="w-4 h-4 mr-2" />
          Download PNG
        </Button>
        <Button onClick={handleDownloadPDF} variant="outline" className="flex-1">
          <FileText className="w-4 h-4 mr-2" />
          Download PDF
        </Button>
      </div>
    </div>
  );
};
