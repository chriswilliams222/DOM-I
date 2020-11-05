const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

document.querySelector('a:nth-of-type(1)').textContent = 'Services'
document.querySelector('nav a:nth-of-type(2)').textContent = 'Product'
document.querySelector('nav a:nth-of-type(3)').textContent = 'Vision'
document.querySelector('nav a:nth-of-type(4)').textContent = 'Features'
document.querySelector('nav a:nth-of-type(5)').textContent = 'About'
document.querySelector('nav a:nth-of-type(6)').textContent = 'Contact'
//No break?
document.querySelector('div h1').textContent = 'DOM Is Awesome'

document.querySelector('div.cta-text button').textContent = 'Get Started'
document.querySelector('img#cta-img').setAttribute('src',"img/header-img.png")
document.querySelector('div.text-content h4').textContent = 'Features'
document.querySelector('div.text-content p').textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
document.querySelector('div.text-content:nth-of-type(2) h4').textContent = 'About'
document.querySelector('div.text-content:nth-of-type(2) p').textContent ='About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
document.querySelector('img.middle-img').setAttribute('src','img/mid-page-accent.jpg')

document.querySelector('.bottom-content div.text-content h4').textContent = 'Services'
document.querySelector('.bottom-content div.text-content p').textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metusnscelerisque quis.'
document.querySelector('.bottom-content div.text-content:nth-of-type(2) h4').textContent = 'Product'
document.querySelector('.bottom-content div.text-content:nth-of-type(2) p').textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
document.querySelector('.bottom-content div.text-content:nth-of-type(3) h4').textContent = 'Vision'
document.querySelector('.bottom-content div.text-content:nth-of-type(3) p').textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

document.querySelector('.contact h4').textContent = 'Contact'
document.querySelector('.contact p').textContent = '123 Way 456 Street Somewhere, USA'
document.querySelector('.contact p:nth-of-type(2)').textContent = '1 (888) 888-8888'
document.querySelector('.contact p:nth-of-type(3)').textContent = 'sales@greatidea.io'

document.querySelector('footer p').textContent = 'Copyright Great Idea! 2018'