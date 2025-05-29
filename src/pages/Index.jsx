
import { CardGenerator } from "@/components/CardGenerator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Greeting Card Generator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Create beautiful, personalized greeting cards for any occasion. 
            Customize colors, fonts, and templates to make every moment special.
          </p>
        </div>
        <CardGenerator />
      </div>
    </div>
  );
};

export default Index;
