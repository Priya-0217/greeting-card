
import { Card } from "@/components/ui/card";

export const CardPreview = ({ cardData, isFullPreview = false }) => {
  const getOccasionEmoji = (occasion) => {
    const emojiMap = {
      birthday: "🎂",
      congratulations: "🎉",
      "thank-you": "🙏",
      anniversary: "💖",
      graduation: "🎓",
      valentine: "💝",
      christmas: "🎄",
      "new-year": "✨"
    };
    return emojiMap[occasion] || "🎊";
  };

  const getOccasionTitle = (occasion) => {
    const titleMap = {
      birthday: "Happy Birthday",
      congratulations: "Congratulations",
      "thank-you": "Thank You",
      anniversary: "Happy Anniversary",
      graduation: "Congratulations Graduate",
      valentine: "Happy Valentine's Day",
      christmas: "Merry Christmas",
      "new-year": "Happy New Year"
    };
    return titleMap[occasion] || "Celebrate";
  };

  const getTemplateStyles = () => {
    const baseStyles = {
      backgroundColor: cardData.backgroundColor,
      color: cardData.textColor,
      fontFamily: cardData.fontFamily
    };

    const backgroundStyles = cardData.backgroundImage !== "none" 
      ? { backgroundImage: getBackgroundImage() }
      : {};

    return { ...baseStyles, ...backgroundStyles };
  };

  const getBackgroundImage = () => {
    const gradients = {
      "gradient-sunset": "linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)",
      "gradient-ocean": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      "gradient-forest": "linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)",
      "gradient-rainbow": "linear-gradient(135deg, #ff7b7b 0%, #ff9a56 25%, #ffad84 50%, #c8a2c8 75%, #bdb2ff 100%)",
      "pattern-dots": "radial-gradient(circle, rgba(255,255,255,0.3) 2px, transparent 2px)",
      "pattern-hearts": "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\"><text x=\"20\" y=\"25\" text-anchor=\"middle\" font-size=\"16\" fill=\"rgba(255,182,193,0.3)\">♥</text></svg>')"
    };
    return gradients[cardData.backgroundImage] || "";
  };

  const getTemplateLayout = () => {
    switch (cardData.template) {
      case "modern":
        return "border-l-8 border-purple-500 pl-8";
      case "classic":
        return "border-4 border-double border-gray-400";
      case "minimalist":
        return "border border-gray-200";
      default: // elegant
        return "shadow-2xl border-0";
    }
  };

  if (isFullPreview) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="relative max-w-2xl w-full">
          <div 
            id="greeting-card"
            className={`w-full aspect-[3/4] p-12 rounded-lg transition-all duration-300 flex flex-col justify-center items-center text-center ${getTemplateLayout()}`}
            style={getTemplateStyles()}
          >
            <div className="mb-8 text-8xl animate-pulse">
              {getOccasionEmoji(cardData.occasion)}
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              {getOccasionTitle(cardData.occasion)}
              {cardData.recipientName && (
                <span className="block mt-4 text-4xl md:text-5xl">
                  {cardData.recipientName}!
                </span>
              )}
            </h1>

            {cardData.message && (
              <div className="text-2xl md:text-3xl leading-relaxed max-w-2xl mx-auto mb-12 italic">
                "{cardData.message}"
              </div>
            )}

            <div className="mt-auto">
              <div className="text-lg opacity-70">
                With love ❤️
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Card className="p-8 backdrop-blur-sm bg-white/90 border-0 shadow-xl">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">Preview</h3>
      <div 
        id="greeting-card"
        className={`w-full aspect-[3/4] p-8 rounded-lg transition-all duration-300 flex flex-col justify-center items-center text-center ${getTemplateLayout()}`}
        style={getTemplateStyles()}
      >
        <div className="mb-6 text-6xl animate-pulse">
          {getOccasionEmoji(cardData.occasion)}
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          {getOccasionTitle(cardData.occasion)}
          {cardData.recipientName && (
            <span className="block mt-2 text-2xl md:text-3xl">
              {cardData.recipientName}!
            </span>
          )}
        </h1>

        {cardData.message && (
          <div className="text-lg md:text-xl leading-relaxed max-w-md mx-auto mb-8 italic">
            "{cardData.message}"
          </div>
        )}

        <div className="mt-auto">
          <div className="text-sm opacity-70">
            With love ❤️
          </div>
        </div>
      </div>
    </Card>
  );
};
