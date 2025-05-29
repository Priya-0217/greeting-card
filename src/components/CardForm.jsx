
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const CardForm = ({ cardData, handleInputChange }) => {
  return (
    <Card className="p-8 backdrop-blur-sm bg-white/90 border-0 shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Customize Your Card</h2>
      
      <div className="space-y-6">
        {/* Occasion Selection */}
        <div className="space-y-2">
          <Label htmlFor="occasion">Occasion</Label>
          <Select value={cardData.occasion} onValueChange={(value) => handleInputChange('occasion', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select an occasion" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="birthday">Birthday</SelectItem>
              <SelectItem value="congratulations">Congratulations</SelectItem>
              <SelectItem value="thank-you">Thank You</SelectItem>
              <SelectItem value="anniversary">Anniversary</SelectItem>
              <SelectItem value="graduation">Graduation</SelectItem>
              <SelectItem value="valentine">Valentine's Day</SelectItem>
              <SelectItem value="christmas">Christmas</SelectItem>
              <SelectItem value="new-year">New Year</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Recipient Name */}
        <div className="space-y-2">
          <Label htmlFor="recipientName">Recipient Name (Optional)</Label>
          <Input
            id="recipientName"
            value={cardData.recipientName}
            onChange={(e) => handleInputChange('recipientName', e.target.value)}
            placeholder="Enter recipient's name"
          />
        </div>

        {/* Custom Message */}
        <div className="space-y-2">
          <Label htmlFor="message">Personal Message</Label>
          <Textarea
            id="message"
            value={cardData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            placeholder="Write your heartfelt message here..."
            rows={4}
          />
        </div>

        {/* Template Selection */}
        <div className="space-y-2">
          <Label htmlFor="template">Template Style</Label>
          <Select value={cardData.template} onValueChange={(value) => handleInputChange('template', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select a template" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="elegant">Elegant</SelectItem>
              <SelectItem value="modern">Modern</SelectItem>
              <SelectItem value="classic">Classic</SelectItem>
              <SelectItem value="minimalist">Minimalist</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Background Options */}
        <div className="space-y-2">
          <Label htmlFor="backgroundImage">Background Style</Label>
          <Select value={cardData.backgroundImage} onValueChange={(value) => handleInputChange('backgroundImage', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select background" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">Solid Color</SelectItem>
              <SelectItem value="gradient-sunset">Sunset Gradient</SelectItem>
              <SelectItem value="gradient-ocean">Ocean Gradient</SelectItem>
              <SelectItem value="gradient-forest">Forest Gradient</SelectItem>
              <SelectItem value="gradient-rainbow">Rainbow Gradient</SelectItem>
              <SelectItem value="pattern-dots">Dots Pattern</SelectItem>
              <SelectItem value="pattern-hearts">Hearts Pattern</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Color Customization */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="backgroundColor">Background Color</Label>
            <div className="flex items-center space-x-2">
              <input
                type="color"
                id="backgroundColor"
                value={cardData.backgroundColor}
                onChange={(e) => handleInputChange('backgroundColor', e.target.value)}
                className="w-16 h-10 rounded border border-gray-300"
              />
              <span className="text-sm text-gray-600">{cardData.backgroundColor}</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="textColor">Text Color</Label>
            <div className="flex items-center space-x-2">
              <input
                type="color"
                id="textColor"
                value={cardData.textColor}
                onChange={(e) => handleInputChange('textColor', e.target.value)}
                className="w-16 h-10 rounded border border-gray-300"
              />
              <span className="text-sm text-gray-600">{cardData.textColor}</span>
            </div>
          </div>
        </div>

        {/* Font Selection */}
        <div className="space-y-2">
          <Label htmlFor="fontFamily">Font Style</Label>
          <Select value={cardData.fontFamily} onValueChange={(value) => handleInputChange('fontFamily', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select a font" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Inter">Inter (Modern)</SelectItem>
              <SelectItem value="Playfair Display">Playfair Display (Elegant)</SelectItem>
              <SelectItem value="Dancing Script">Dancing Script (Handwritten)</SelectItem>
              <SelectItem value="Roboto">Roboto (Clean)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </Card>
  );
};
