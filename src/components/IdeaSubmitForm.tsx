import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import { ImageUpload } from './ImageUpload'



const IdeaSubmitForm = () => {

    const [formData, setFormData] = useState({
        image: null as File | null,
        name: '',
        email: '',
        businessName: '',
        businessDescription: '',
        tags: ''
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev: any) => ({ ...prev, [name]: value }))
    }

    const handleImageChange = (file: File | null) => {
        setFormData((prev: any) => ({ ...prev, image: file }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(formData)
        setFormData({
            image: null,
            name: '',
            email: '',
            businessName: '',
            businessDescription: '',
            tags: ''
        })
    }

    return (
        <Card className="w-full bg-black text-white mx-auto border-none">
            <CardHeader>
                <CardTitle
                >Submit Your Business Idea</CardTitle>
                <CardDescription
                >Share your entrepreneurial vision with us</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="image">Applicant Image</Label>
                        <ImageUpload onImageChange={handleImageChange} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input className='bg-black border-gray-400'  id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input className='bg-black border-gray-400'  id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="businessName">Business Name</Label>
                        <Input className='bg-black border-gray-400'  id="businessName" name="businessName" value={formData.businessName} onChange={handleInputChange} required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="businessDescription">Business Description</Label>
                        <Textarea
                            id="businessDescription"
                            name="businessDescription"
                            value={formData.businessDescription}
                            onChange={handleInputChange}
                            required
                            className="min-h-[100px] bg-black border-gray-400"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="tags">Tags (comma-separated)</Label>
                        <Input className='bg-black border-gray-400'  id="tags" name="tags" value={formData.tags} onChange={handleInputChange} placeholder="e.g., tech, sustainability, education" />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button type="submit" className="w-full">Submit Idea</Button>
                </CardFooter>
            </form>
        </Card>
    )
}

export default IdeaSubmitForm