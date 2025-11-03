# How to Set Your Logo as the Favicon

To use your purple Elovient logo as the favicon, please follow these steps:

1. Convert your logo image to either:
   - `.ico` format (preferred for maximum compatibility)
   - `.png` format (at 32x32 or 64x64 pixels)

2. Rename the converted file to `favicon.ico` (for .ico file) or `favicon.png` (for PNG file)

3. Replace the existing `favicon.ico` file in the `ElovientWebsite/public/` directory with your new file

4. If you're using a PNG file, update the HTML head section in `index.html` to reference it properly:
   ```html
   <link rel="icon" href="/favicon.png" type="image/png" />
   <link rel="shortcut icon" href="/favicon.png" type="image/png" />
   ```

5. Clear your browser cache and reload the website to see the new favicon

For best results across all browsers and devices, it's recommended to use an ICO file that contains multiple sizes (16x16, 32x32, 48x48, and 64x64 pixels).

## Online Favicon Generators

You can use online tools to convert your logo to a proper favicon:
- [favicon.io](https://favicon.io/)
- [RealFaviconGenerator](https://realfavicongenerator.net/)

These tools will create optimized favicon files from your logo image. 