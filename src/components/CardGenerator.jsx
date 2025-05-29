
import { useState } from "react";
import { CardPreview } from "./CardPreview";
import { CardForm } from "./CardForm";
import { ActionButtons } from "./ActionButtons";
import { FullPreviewModal } from "./FullPreviewModal";

export const CardGenerator = () => {
  const [isFullPreview, setIsFullPreview] = useState(false);
  
  const [cardData, setCardData] = useState({
    occasion: "birthday",
    recipientName: "",
    message: "",
    template: "elegant",
    backgroundColor: "#ffffff",
    textColor: "#000000",
    fontFamily: "Inter",
    backgroundImage: "none"
  });

  const handleInputChange = (field, value) => {
    setCardData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <>
      <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Form Section */}
        <div className="space-y-6">
          <CardForm cardData={cardData} handleInputChange={handleInputChange} />
          <ActionButtons setIsFullPreview={setIsFullPreview} />
        </div>

        {/* Preview Section */}
        <CardPreview cardData={cardData} />
      </div>

      {/* Full Preview Modal */}
      <FullPreviewModal 
        cardData={cardData} 
        isFullPreview={isFullPreview} 
        setIsFullPreview={setIsFullPreview} 
      />
    </>
  );
};
