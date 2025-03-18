# 网站图片文件

本目录包含网站使用的所有图片文件。请确保添加以下图片以正确显示网站：

## 必需图片

1. **bhutan-hero.jpg** - 主页顶部的背景图片
   - 建议尺寸：至少1920x1080像素
   - 内容建议：不丹风景、城市全景或公司总部图片
   - 这个图片应该是高质量的，能够清晰地展示不丹的美丽风景或与公司相关的形象

2. **founders.jpg** - 创始人或公司团队照片
   - 建议尺寸：至少800x600像素
   - 内容建议：公司创始人Kencho Wangdi和Tshering的照片，或整个管理团队

3. **品牌图片** - 在`/images/brands/`目录中
   - **miniso.jpg** - Miniso品牌相关图片
   - **focallure.jpg** - Focallure品牌相关图片
   - **supermarket.jpg** - 超市品牌相关图片
   - **creamnest.jpg** - Creamnest品牌相关图片
   - **placeholder.jpg** - 默认品牌图片（当特定品牌图片不存在时使用）

## 更改背景图片

您可以随时通过替换以上文件来更换网站上的图片，无需修改代码。只要保持文件名相同，更改就会立即生效。

如果您想使用不同的文件名，您需要修改相应的代码文件：

1. 主页背景：修改`src/app/page.tsx`文件中的：
```jsx
<div 
  className="absolute inset-0 bg-cover bg-center z-0" 
  style={{backgroundImage: "url('/images/bhutan-hero.jpg')"}}
></div>
```

2. 创始人照片：修改`src/app/page.tsx`文件中的：
```jsx
<div 
  className="absolute inset-0 bg-cover bg-center" 
  style={{backgroundImage: "url('/images/founders.jpg')"}}
></div>
```

3. 品牌图片：修改`src/app/page.tsx`文件中的`brandImageMap`对象。

## 图片优化建议

为了确保网站加载速度快且视觉效果好，请注意以下几点：

1. 所有图片应该经过优化压缩，建议使用工具如TinyPNG或Squoosh
2. 考虑使用WebP格式的图片，它具有更好的压缩比
3. 确保图片分辨率适合网站，过大的图片会影响加载速度
4. 所有图片应有良好的对比度，以确保文字在图片上清晰可见 