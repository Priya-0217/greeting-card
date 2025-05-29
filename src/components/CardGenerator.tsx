
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CardPreview } from "./CardPreview";
import { CustomizationPanel } from "./CustomizationPanel";
import { downloadAsImage, downloadAsPDF } from "@/utils/downloadUtils";
import { Download, Image, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export interface CardData {
  recipientName: string;
  message: string;
  occasion: string;
  template: string;
  fontFamily: string;
  textColor: string;
  backgroundColor: string;
  backgroundImage: string;
}

export const CardGenerator = () => {
  const { toast } = useToast();
  const [cardData, setCardData] = useState<CardData>({
    recipientName: "",
    message: "",
    occasion: "birthday",
    template: "elegant",
    fontFamily: "Inter",
    textColor: "#374151",
    backgroundColor: "#ffffff",
    backgroundImage: "none"
  });

  const occasions = [
    { value: "birthday", label: "Birthday" },
    { value: "congratulations", label: "Congratulations" },
    { value: "thank-you", label: "Thank You" },
    { value: "anniversary", label: "Anniversary" },
    { value: "graduation", label: "Graduation" },
    { value: "valentine", label: "Valentine's Day" },
    { value: "christmas", label: "Christmas" },
    { value: "new-year", label: "New Year" }
  ];

  const handleInputChange = (field: keyof CardData, value: string) => {
    setCardData(prev => ({ ...prev, [field]: value }));
  };

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
        description: "Failed to download the card. Please try again.",
        variant: "destructive"
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
        description: "Failed to download the card. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
      {/* Left Panel - Form and Customization */}
      <div className="space-y-6">
        {/* Basic Information Form */}
        <Card className="p-6 backdrop-blur-sm bg-white/80 border-0 shadow-xl">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Card Details</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="recipient" className="text-sm font-medium text-gray-700">
                Recipient's Name
              </Label>
              <Input
                id="recipient"
                placeholder="Enter recipient's name"
                value={cardData.recipientName}
                onChange={(e) => handleInputChange("recipientName", e.target.value)}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="occasion" className="text-sm font-medium text-gray-700">
                Occasion
              </Label>
              <Select
                value={cardData.occasion}
                onValueChange={(value) => handleInputChange("occasion", value)}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select an occasion" />
                </SelectTrigger>
                <SelectContent>
                  {occasions.map((occasion) => (
                    <SelectItem key={occasion.value} value={occasion.value}>
                      {occasion.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                Personalized Message
              </Label>
              <Textarea
                id="message"
                placeholder="Write your heartfelt message here..."
                value={cardData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className="mt-1 min-h-[100px]"
              />
            </div>
          </div>
        </Card>

        {/* Customization Panel */}
        <CustomizationPanel cardData={cardData} onUpdate={handleInputChange} />

        {/* Download Actions */}
        <Card className="p-6 backdrop-blur-sm bg-white/80 border-0 shadow-xl">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Download Your Card</h3>
          <div className="flex gap-3">
            <Button 
              onClick={handleDownloadImage}
              className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              <Image className="w-4 h-4 mr-2" />
              Download as Image
            </Button>
            <Button 
              onClick={handleDownloadPDF}
              variant="outline"
              className="flex-1 border-purple-200 hover:bg-purple-50"
            >
              <FileText className="w-4 h-4 mr-2" />
              Download as PDF
            </Button>
          </div>
        </Card>
      </div>

      {/* Right Panel - Card Preview */}
      <div className="lg:sticky lg:top-8">
        <CardPreview cardData={cardData} />
      </div>
    </div>
  );
};
