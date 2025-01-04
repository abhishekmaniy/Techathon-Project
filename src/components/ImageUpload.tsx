
import { useState, ChangeEvent } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from './ui/label'

interface ImageUploadProps {
    onImageChange: (file: File | null) => void
}

export function ImageUpload({ onImageChange }: ImageUploadProps) {
    const [preview, setPreview] = useState<string | null>(null)

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            onImageChange(file)
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreview(reader.result as string)
            }
            reader.readAsDataURL(file)
        } else {
            onImageChange(null)
            setPreview(null)
        }
    }

    return (
        <div className="space-y-4">
            <Input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden "
                id="image-upload"
            />
            <Label htmlFor="image-upload">
                <Button variant="outline" className="bg-black border-gray-400">
                    Upload Image
                </Button>
            </Label>
            {preview && (
                <div className="relative w-full h-48">
                    <img
                        src={preview}
                        alt="Preview"
                        className="rounded-md"
                    />
                </div>
            )}
        </div>
    )
}

