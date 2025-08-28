import { useState } from "react"
import { X, Upload, ImageIcon, FileText } from "lucide-react"

export default function AddBusinessForm({ onClose }) {
  const [formData, setFormData] = useState({
    ownerName: "",
    businessName: "",
    email: "",
    phone: "",
    description: "",
    category: "",
    website: "",
    address: "",
    proofFile: null,
    productImages: [],
  })

  const [dragActive, setDragActive] = useState(false)
  const [previewImages, setPreviewImages] = useState([])

  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (files) {
      if (name === "proofFile") {
        setFormData({ ...formData, [name]: files[0] })
      } else if (name === "productImages") {
        const newImages = Array.from(files)
        setFormData({ ...formData, productImages: [...formData.productImages, ...newImages] })

        newImages.forEach((file) => {
          const reader = new FileReader()
          reader.onload = (e) => setPreviewImages((prev) => [...prev, e.target.result])
          reader.readAsDataURL(file)
        })
      }
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true)
    else if (e.type === "dragleave") setDragActive(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    const files = Array.from(e.dataTransfer.files)
    const imageFiles = files.filter((file) => file.type.startsWith("image/"))
    if (imageFiles.length > 0) {
      setFormData({ ...formData, productImages: [...formData.productImages, ...imageFiles] })
      imageFiles.forEach((file) => {
        const reader = new FileReader()
        reader.onload = (e) => setPreviewImages((prev) => [...prev, e.target.result])
        reader.readAsDataURL(file)
      })
    }
  }

  const removeImage = (index) => {
    setFormData({
      ...formData,
      productImages: formData.productImages.filter((_, i) => i !== index),
    })
    setPreviewImages(previewImages.filter((_, i) => i !== index))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b relative">
          <h2 className="text-2xl font-bold text-center">Add Your Business</h2>
          <p className="text-gray-500 text-center mt-2">Join our business network and connect with entrepreneurs, investors, and partners</p>
          <button onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form */}
        <div className="p-6 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Owner & Business Name */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Owner Name <span className="text-red-500">*</span></label>
                <input type="text" name="ownerName" value={formData.ownerName} onChange={handleChange} required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Business Name <span className="text-red-500">*</span></label>
                <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your business name"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone <span className="text-red-500">*</span></label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            {/* Category & Website */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Category <span className="text-red-500">*</span></label>
                <select name="category" value={formData.category} onChange={handleChange} required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Select a category</option>
                  <option value="technology">Technology</option>
                  <option value="retail">Retail</option>
                  <option value="food">Food & Beverage</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="education">Education</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="services">Services</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Website</label>
                <input type="url" name="website" value={formData.website} onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://yourwebsite.com"
                />
              </div>
            </div>

            {/* Address & Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Business Address <span className="text-red-500">*</span></label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your business address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Business Description <span className="text-red-500">*</span></label>
              <textarea name="description" value={formData.description} onChange={handleChange} required rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Describe your business..."
              />
            </div>

            {/* Product Images */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Product/Service Images</label>
              <div
                className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}
                onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}
              >
                <ImageIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <p className="text-gray-500 mb-2">Drag and drop images here, or click to select</p>
                <input type="file" name="productImages" multiple accept="image/*" onChange={handleChange} className="hidden" id="product-images"/>
                <button type="button" className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition" onClick={() => document.getElementById("product-images").click()}>
                  <Upload className="h-4 w-4 inline-block mr-2"/> Choose Images
                </button>
              </div>

              {/* Preview */}
              {previewImages.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  {previewImages.map((src, index) => (
                    <div key={index} className="relative group">
                      <img src={src} alt={`Product ${index+1}`} className="w-full h-24 object-cover rounded border" />
                      <button type="button" onClick={() => removeImage(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition">
                        <X className="h-3 w-3"/>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Business Proof */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Business Proof Document <span className="text-red-500">*</span></label>
              <div className="border border-gray-300 rounded-lg p-4 flex items-center space-x-3">
                <FileText className="h-8 w-8 text-gray-400"/>
                <div className="flex-1">
                  <input type="file" name="proofFile" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" onChange={handleChange} required className="w-full"/>
                  <p className="text-xs text-gray-500 mt-1">Upload business license, registration, or other proof documents</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <button type="button" onClick={onClose} className="flex-1 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100 transition">Cancel</button>
              <button type="submit" className="flex-1 bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition">Submit Business</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
