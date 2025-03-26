
import React, { useState, useRef } from 'react';
import { User, Bookmark, Heart, Tag, Calendar, BarChart, Upload, Trash, Plus } from 'lucide-react';
import AnimatedButton from '../common/AnimatedButton';
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type StylePreference = 'casual' | 'formal' | 'streetwear' | 'vintage' | 'minimalist' | 'athleisure' | 'bohemian' | 'preppy' | 'grunge' | 'classic';
type ColorPreference = 'neutral' | 'bold' | 'pastel' | 'monochrome' | 'earth' | 'bright';
type OccasionPreference = 'everyday' | 'work' | 'formal' | 'party' | 'vacation' | 'workout';

const StyleProfile = () => {
  const [preferences, setPreferences] = useState<StylePreference[]>([]);
  const [colorPreferences, setColorPreferences] = useState<ColorPreference[]>([]);
  const [occasionPreferences, setOccasionPreferences] = useState<OccasionPreference[]>([]);
  const [priceRange, setPriceRange] = useState([2000, 10000]);
  const [activeTab, setActiveTab] = useState("basics");
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [uploadedFileName, setUploadedFileName] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const togglePreference = (pref: StylePreference) => {
    if (preferences.includes(pref)) {
      setPreferences(preferences.filter(p => p !== pref));
    } else {
      setPreferences([...preferences, pref]);
    }
  };

  const toggleColorPreference = (pref: ColorPreference) => {
    if (colorPreferences.includes(pref)) {
      setColorPreferences(colorPreferences.filter(p => p !== pref));
    } else {
      setColorPreferences([...colorPreferences, pref]);
    }
  };

  const toggleOccasionPreference = (pref: OccasionPreference) => {
    if (occasionPreferences.includes(pref)) {
      setOccasionPreferences(occasionPreferences.filter(p => p !== pref));
    } else {
      setOccasionPreferences([...occasionPreferences, pref]);
    }
  };

  const handleFileUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setUploadedFileName(files[0].name);
      // In a real implementation, you would handle the file upload here
      // For this demo, we'll just display a mock URL
      const fakeImageUrl = URL.createObjectURL(files[0]);
      setUploadedImages([...uploadedImages, fakeImageUrl]);
    }
  };

  const stylePreferenceOptions: { value: StylePreference; label: string; icon: React.ReactNode }[] = [
    { value: 'casual', label: 'Casual', icon: <Tag size={16} /> },
    { value: 'formal', label: 'Formal', icon: <Tag size={16} /> },
    { value: 'streetwear', label: 'Streetwear', icon: <Tag size={16} /> },
    { value: 'vintage', label: 'Vintage', icon: <Tag size={16} /> },
    { value: 'minimalist', label: 'Minimalist', icon: <Tag size={16} /> },
    { value: 'athleisure', label: 'Athleisure', icon: <Tag size={16} /> },
    { value: 'bohemian', label: 'Bohemian', icon: <Tag size={16} /> },
    { value: 'preppy', label: 'Preppy', icon: <Tag size={16} /> },
    { value: 'grunge', label: 'Grunge', icon: <Tag size={16} /> },
    { value: 'classic', label: 'Classic', icon: <Tag size={16} /> },
  ];

  const colorPreferenceOptions: { value: ColorPreference; label: string }[] = [
    { value: 'neutral', label: 'Neutral Tones' },
    { value: 'bold', label: 'Bold Colors' },
    { value: 'pastel', label: 'Pastel Shades' },
    { value: 'monochrome', label: 'Monochrome' },
    { value: 'earth', label: 'Earth Tones' },
    { value: 'bright', label: 'Bright Colors' },
  ];

  const occasionPreferenceOptions: { value: OccasionPreference; label: string; icon: React.ReactNode }[] = [
    { value: 'everyday', label: 'Everyday', icon: <Calendar size={16} /> },
    { value: 'work', label: 'Work', icon: <Calendar size={16} /> },
    { value: 'formal', label: 'Formal Events', icon: <Calendar size={16} /> },
    { value: 'party', label: 'Party', icon: <Calendar size={16} /> },
    { value: 'vacation', label: 'Vacation', icon: <Calendar size={16} /> },
    { value: 'workout', label: 'Workout', icon: <Calendar size={16} /> },
  ];

  return (
    <div className="glass-card rounded-xl p-6 md:p-8 w-full max-w-md mx-auto">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4">
          <User size={24} />
        </div>
        <h3 className="text-xl font-semibold">Your Style Profile</h3>
        <p className="text-sm text-gray-500 mt-2">Personalize your recommendations</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="basics">Basics</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="photos">Photos</TabsTrigger>
        </TabsList>

        <TabsContent value="basics" className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Body measurements
            </label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Height (cm)"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Weight (kg)"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Chest (cm)
              </label>
              <input
                type="number"
                placeholder="Chest"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Waist (cm)
              </label>
              <input
                type="number"
                placeholder="Waist"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hip (cm)
              </label>
              <input
                type="number"
                placeholder="Hip"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Skin tone
            </label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select your skin tone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fair">Fair</SelectItem>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="olive">Olive</SelectItem>
                <SelectItem value="tan">Tan</SelectItem>
                <SelectItem value="deep">Deep</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Age range
            </label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select your age range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="18-24">18-24</SelectItem>
                <SelectItem value="25-34">25-34</SelectItem>
                <SelectItem value="35-44">35-44</SelectItem>
                <SelectItem value="45-54">45-54</SelectItem>
                <SelectItem value="55+">55+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </TabsContent>

        <TabsContent value="preferences" className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select your style preferences
            </label>
            <div className="flex flex-wrap gap-2">
              {stylePreferenceOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => togglePreference(option.value)}
                  className={`flex items-center px-3 py-1.5 rounded-full text-sm transition-all ${
                    preferences.includes(option.value)
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {option.icon}
                  <span className="ml-1">{option.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Color preferences
            </label>
            <div className="flex flex-wrap gap-2">
              {colorPreferenceOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => toggleColorPreference(option.value)}
                  className={`flex items-center px-3 py-1.5 rounded-full text-sm transition-all ${
                    colorPreferences.includes(option.value)
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span>{option.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Occasion preferences
            </label>
            <div className="flex flex-wrap gap-2">
              {occasionPreferenceOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => toggleOccasionPreference(option.value)}
                  className={`flex items-center px-3 py-1.5 rounded-full text-sm transition-all ${
                    occasionPreferences.includes(option.value)
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {option.icon}
                  <span className="ml-1">{option.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price range (₹)
            </label>
            <Slider 
              defaultValue={[2000, 10000]} 
              max={20000} 
              min={500} 
              step={500}
              value={priceRange}
              onValueChange={(value) => setPriceRange(value as [number, number])}
              className="my-6"
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>₹{priceRange[0]}</span>
              <span>₹{priceRange[1]}</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Favorite brands
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Add your favorite brands"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-black">
                <Heart size={18} />
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">Zara</Badge>
              <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">H&M</Badge>
              <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">Nike</Badge>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="sustainable" />
            <Label htmlFor="sustainable">Prefer sustainable brands</Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="notifications" />
            <Label htmlFor="notifications">Receive style updates & notifications</Label>
          </div>
        </TabsContent>

        <TabsContent value="photos" className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload your photos for better recommendations
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div 
                className="border border-dashed border-gray-300 rounded-lg p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={handleFileUploadClick}
              >
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  className="hidden" 
                  accept="image/*"
                  onChange={handleFileChange}
                />
                <Upload size={24} className="mx-auto mb-2 text-gray-400" />
                <p className="text-sm font-medium">Upload Outfit Photo</p>
                <p className="text-xs text-gray-500 mt-1">Get suggestions for similar styles</p>
                {uploadedFileName && (
                  <div className="mt-2 text-xs text-green-600 break-all">
                    {uploadedFileName}
                  </div>
                )}
              </div>
              
              <div className="border border-dashed border-gray-300 rounded-lg p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                <Upload size={24} className="mx-auto mb-2 text-gray-400" />
                <p className="text-sm font-medium">Upload Body Photo</p>
                <p className="text-xs text-gray-500 mt-1">For precise fit recommendations</p>
              </div>
            </div>
          </div>

          {uploadedImages.length > 0 && (
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Uploaded Photos</h4>
              <div className="grid grid-cols-3 gap-2">
                {uploadedImages.map((image, index) => (
                  <div key={index} className="relative rounded-md overflow-hidden aspect-square">
                    <img src={image} alt={`Uploaded ${index}`} className="object-cover w-full h-full" />
                    <button className="absolute top-1 right-1 bg-black/60 text-white rounded-full p-1 hover:bg-black/80">
                      <Trash size={14} />
                    </button>
                  </div>
                ))}
                <div 
                  className="border border-dashed border-gray-300 rounded-md flex items-center justify-center aspect-square cursor-pointer hover:bg-gray-50"
                  onClick={handleFileUploadClick}
                >
                  <Plus size={24} className="text-gray-400" />
                </div>
              </div>
            </div>
          )}

          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-start">
              <BarChart size={18} className="text-gray-500 mt-0.5 mr-2" />
              <div>
                <h4 className="text-sm font-medium">Style Analysis</h4>
                <p className="text-xs text-gray-500">
                  Our AI will analyze your photos to determine your body shape, colors that complement you, and create personalized style recommendations.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-6">
        <AnimatedButton className="w-full">
          <Bookmark className="mr-2 h-4 w-4" />
          Save Profile
        </AnimatedButton>
      </div>
    </div>
  );
};

export default StyleProfile;
