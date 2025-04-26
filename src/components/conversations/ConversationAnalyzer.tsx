
import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, FileAudio, Loader2 } from "lucide-react";
import { mockAnalyzeConversation } from "@/lib/mockApi";
import { toast } from "sonner";
import { pipeline } from "@huggingface/transformers";

interface ConversationResult {
  needs: {
    category: string;
    confidence: number;
    details: string;
  }[];
  keywords: { text: string; relevance: number }[];
  summary: string;
}

export const ConversationAnalyzer = () => {
  const [conversation, setConversation] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [result, setResult] = useState<ConversationResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleAnalyze = async () => {
    if (conversation.trim().length < 20) {
      toast.error("Please enter a longer conversation to analyze");
      return;
    }
    
    setIsAnalyzing(true);
    try {
      const result = await mockAnalyzeConversation(conversation);
      setResult(result);
      toast.success("Conversation analyzed successfully");
    } catch (error) {
      toast.error("Failed to analyze conversation");
      console.error(error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleAudioUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsTranscribing(true);
    try {
      // Initialize the whisper pipeline
      const transcriber = await pipeline(
        "automatic-speech-recognition",
        "onnx-community/whisper-tiny.en",
        { device: "webgpu" }
      );

      // Transcribe the audio file
      const result = await transcriber(file);
      
      // Append the transcription to the existing conversation
      setConversation(prev => {
        const prefix = prev ? prev + "\n\n" : "";
        return prefix + `[Audio Transcription]:\n${result.text}`;
      });
      
      toast.success("Audio transcribed successfully");
    } catch (error) {
      console.error("Transcription error:", error);
      toast.error("Failed to transcribe audio");
    } finally {
      setIsTranscribing(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 80) return "text-green-700 bg-green-100";
    if (confidence >= 60) return "text-amber-700 bg-amber-100";
    return "text-gray-700 bg-gray-100";
  };

  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Conversation Analyzer</CardTitle>
        <CardDescription>
          Paste email or text conversations, or upload audio files to extract client needs and preferences
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              onClick={() => fileInputRef.current?.click()}
              disabled={isTranscribing}
              className="gap-2"
            >
              {isTranscribing ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <FileAudio className="h-4 w-4" />
              )}
              {isTranscribing ? "Transcribing..." : "Upload Audio"}
            </Button>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="audio/*"
              onChange={handleAudioUpload}
            />
          </div>

          <Textarea
            placeholder="Paste conversation content here or upload an audio file..."
            className="min-h-[150px] font-mono text-sm"
            value={conversation}
            onChange={(e) => setConversation(e.target.value)}
          />
          
          <div className="flex justify-end">
            <Button 
              onClick={handleAnalyze} 
              disabled={isAnalyzing || conversation.length < 20}
            >
              {isAnalyzing ? "Analyzing..." : "Analyze Conversation"}
              {!isAnalyzing && <Search className="ml-2 h-4 w-4" />}
            </Button>
          </div>
          
          {result && (
            <div className="space-y-4 mt-6 border-t pt-4">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Summary</h3>
                <p className="text-sm text-gray-700">{result.summary}</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Client Needs</h3>
                <div className="space-y-2">
                  {result.needs.map((need, index) => (
                    <div key={index} className="bg-white border rounded-lg p-3">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium text-gray-900">{need.category}</h4>
                        <Badge 
                          variant="outline" 
                          className={getConfidenceColor(need.confidence)}
                        >
                          {need.confidence}% Confidence
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{need.details}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Keywords</h3>
                <div className="flex flex-wrap gap-2">
                  {result.keywords.map((keyword, index) => (
                    <Badge 
                      key={index} 
                      variant="outline"
                      className="bg-reva-teal/10 text-reva-teal border-reva-teal/30"
                    >
                      {keyword.text}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <Button className="w-full">Find Matching Properties</Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
