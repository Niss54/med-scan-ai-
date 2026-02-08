import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Upload,
  ScanLine,
  BrainCircuit,
  FileImage,
  Activity,
  ShieldCheck,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const processingOptions = [
  { value: "enhancement", label: "Basic Image Enhancement" },
  { value: "normalization", label: "Scan Normalization" },
  { value: "detection", label: "Disease Pattern Detection (Preview)" },
  { value: "visualization", label: "Report Visualization (Demo)" },
];

const stats = [
  { value: "656+", label: "Image Processing Techniques", icon: FileImage },
  { value: "138+", label: "AI Detection Models", icon: BrainCircuit },
  { value: "30+", label: "Disease Categories", icon: Activity },
  { value: "30+", label: "Evaluation Parameters", icon: ShieldCheck },
];

const Upload_Page = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [processingType, setProcessingType] = useState("enhancement");
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const apiBaseUrl = import.meta.env.VITE_API_BASE || "http://localhost:5000";

  const transformMap: Record<string, string> = {
    enhancement: "basic",
    normalization: "smooth",
    detection: "augment",
    visualization: "zoom",
  };

  const handleFile = (file: File) => {
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const clearFile = () => {
    setSelectedFile(null);
    setPreview(null);
    setResultImage(null);
    setErrorMessage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleProcess = async () => {
    if (!selectedFile) {
      setErrorMessage("Please upload an image before processing.");
      return;
    }

    setIsProcessing(true);
    setErrorMessage(null);
    setResultImage(null);

    try {
      const formData = new FormData();
      formData.append("image", selectedFile);
      formData.append("transform", transformMap[processingType] || "basic");

      const response = await fetch(`${apiBaseUrl}/process`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (!response.ok || !data?.success) {
        throw new Error(data?.error || "Processing failed. Please try again.");
      }

      setResultImage(`data:image/png;base64,${data.image}`);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unexpected error";
      setErrorMessage(message);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <main className="min-h-screen grid-bg hero-gradient pt-24 pb-20">
      {/* Header */}
      <section className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            AI-Assisted Imaging
          </div>
          <h1 className="mb-4 font-display text-3xl font-bold text-foreground glow-text md:text-4xl lg:text-5xl">
            Upload & Process Medical Image
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            Upload MRI or CT scan images and let AI assist doctors in faster
            diagnosis.
          </p>
        </motion.div>
      </section>

      {/* Upload Card */}
      <section className="container mx-auto mt-12 px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto max-w-2xl"
        >
          <div className="rounded-2xl border border-border bg-card p-6 shadow-lg glow-border md:p-10">
            {/* Drag & Drop / File Input */}
            <label className="mb-2 block text-sm font-medium text-foreground">
              Select Image (JPG, PNG)
            </label>
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onClick={() => fileInputRef.current?.click()}
              className={`relative flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-8 transition-all duration-300 md:p-12 ${
                isDragging
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/40 hover:bg-primary/5"
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleFile(file);
                }}
              />

              {preview ? (
                <div className="relative w-full">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      clearFile();
                    }}
                    className="absolute -right-2 -top-2 z-10 rounded-full bg-destructive p-1 text-destructive-foreground transition-colors hover:bg-destructive/80"
                  >
                    <X className="h-4 w-4" />
                  </button>
                  <img
                    src={preview}
                    alt="Selected medical scan"
                    className="mx-auto max-h-64 rounded-lg border border-border object-contain"
                  />
                  <p className="mt-3 text-center text-sm text-muted-foreground">
                    {selectedFile?.name}
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-4 rounded-full bg-primary/10 p-4">
                    <Upload className="h-8 w-8 text-primary" />
                  </div>
                  <p className="mb-1 text-sm font-medium text-foreground">
                    Drag & drop your scan image here
                  </p>
                  <p className="text-xs text-muted-foreground">
                    or click to browse · JPG, PNG supported
                  </p>
                </>
              )}
            </div>

            {/* AI Processing Dropdown */}
            <div className="mt-8">
              <label className="mb-2 block text-sm font-medium text-foreground">
                Choose AI Processing Type
              </label>
              <Select
                value={processingType}
                onValueChange={setProcessingType}
              >
                <SelectTrigger className="w-full bg-secondary border-border text-foreground">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  {processingOptions.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Process Button */}
            <div className="mt-8">
              <Button
                className="w-full gap-2 rounded-lg bg-primary py-6 text-base font-semibold text-primary-foreground transition-all hover:brightness-110 glow-button"
                size="lg"
                disabled={isProcessing}
                onClick={handleProcess}
              >
                <ScanLine className="h-5 w-5" />
                {isProcessing ? "Processing..." : "Process Image"}
              </Button>
            </div>

            {errorMessage && (
              <div className="mt-4 rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                {errorMessage}
              </div>
            )}

            {resultImage && (
              <div className="mt-6">
                <p className="mb-3 text-sm font-medium text-foreground">
                  Processed Result
                </p>
                <img
                  src={resultImage}
                  alt="Processed result"
                  className="mx-auto w-full rounded-lg border border-border object-contain"
                />
              </div>
            )}
          </div>

          {/* Info text */}
          <p className="mt-6 text-center text-sm text-muted-foreground">
            This is a demo interface. Final diagnosis is always reviewed by
            medical professionals.
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto mt-20 px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="card-hover group rounded-xl border border-border bg-card p-6 text-center glow-border"
              >
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <p className="font-display text-2xl font-bold text-primary md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium text-muted-foreground md:text-sm">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </motion.div>
      </section>
    </main>
  );
};

export default Upload_Page;
