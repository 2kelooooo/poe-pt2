# Dimpho's Scrunchies and Beauty Supplies - Website Project

## Project Description
For my WEDE project, I built a 5-page website for a business called Dimpho's Scrunchies and Beauty Supplies. I wanted to create something professional where buyers can easily get in touch through an enquiry form.

## Student Details
**Name:** Tokelo Tsotetsi  
**Student No:** 10525416

## Technical Features
- **Forms:** Created contact and enquiry pages with forms so customers can reach out
- **Semantic HTML:** Used tags like `main`, `header`, `nav`, and `footer` to organise the code  
- **Media:** All business images are stored in the `assets` folder for organised file structure
- **Responsive Design:** Site scales properly on desktop and mobile screens

## Pages
- `homepage.html` - Landing page with hero image
- `product.html` - Product grid with hover effects + Add to Cart
- `enquiry.html` - Customer enquiry form
- `contact.html` - Contact information  
- `cart.html` - Shopping cart
- `style.css` - all custom filling


## How to Run
1. Open the project folder
2. Open `homepage.html` in your browser
3. Or use VS Code Live Server extension for live preview


### **Features**
1. **Homepage** - Landing page with nav menu
2. **Enquiry Form** - Order form with JS validation + Formspree email
3. **Contact/Registration Form** - Customer registration with validation
4. **Form Validation** - Red error messages if fields are empty/invalid
5. **Formspree Integration** - Form submissions sent to email without backend

//----java---//
**1. Run the website**
Just double-click `homepage.html` to open in browser. 
Or use VS Code Live Server extension.

**2. Connect Formspree for emails**
Forms won't send emails until you add your Formspree ID:
1. Go to https://formspree.io and sign up free
2. Create new form → copy your form ID 
3. Replace `YOUR_REAL_ID` in both:
   - `enquiry.html` line 4: `action="https://formspree.io/f/YOUR_REAL_ID"`
   - `contact.html` line 31: `action="https://formspree.io/f/YOUR_REAL_ID"`

**3. Test forms**
1. Open `enquiry.html` → submit empty → see red errors
2. Fill all fields → submit → check `tokelotsotetsi13@gmail.com` for email
3. Same test for `contact.html`

### **Form Validation Rules**
**Enquiry Form:** name, email, number, age, product, quantity, colour, address all required. Email must have @
**Contact Form:** name, email, number, age, gender required. Email must have @

### **Technologies Used**
- HTML5 for structure
- CSS3 for styling  
- Vanilla JavaScript for form validation
- Formspree for form handling

### **Developer**
Developed by Tokelo  
Student No: st10525416  
Contact: tokelotsotetsi13@gmail.com

### **Notes for POE Submission**
- All forms use `method="POST"` and proper `name` attributes
- JS validation prevents empty submissions before Formspree
- Error messages display in red `<p>` tags below forms
- `defer` used on script tag so JS loads after HTML