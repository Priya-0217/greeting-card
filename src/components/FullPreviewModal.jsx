
import { Button } from "@/components/ui/button";
import { CardPreview } from "./CardPreview";
import { Minimize2 } from "lucide-react";

export const FullPreviewModal = ({ cardData, isFullPreview, setIsFullPreview }) => {
  if (!isFullPreview) return null;

  return (
    <div className="fixed inset-0 z-50">
      <CardPreview cardData={cardData} isFullPreview={true} />
      <Button
        onClick={() => setIsFullPreview(false)}
        className="fixed top-4 right-4 z-50"
        variant="outline"
        size="sm"
      >
        <Minimize2 className="w-4 h-4 mr-2" />
        Close Preview
      </Button>
    </div>
  );
};
