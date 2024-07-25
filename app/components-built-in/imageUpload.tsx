import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";

type ImageUploadProps = {
  name: string;
};

const ImageUpload: React.FC<ImageUploadProps> = ({ name }) => {
    const { control, watch } = useFormContext();
    const imageValue = watch(name);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>, onChange: (value: any) => void) => {
        const file = event.target.files?.[0];
        if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            onChange(reader.result);
        };
        reader.readAsDataURL(file);
        }
    };

    return (
        <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
            <div className="w-full flex justify-center items-center">
            {value ? (
                <img src={value} alt="Uploaded" className="max-w-full max-h-32 object-contain" />
            ) : (
                <Input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e, onChange)}
                className="w-full"
                />
            )}
            </div>
        )}
        />
    );
};

export default ImageUpload;