const endpoints = {
    "baseUrl": "https://api.techsales.dev",
    "session": "/session",                          // We don't need this endpoint (was just for backend development)
    "pcb": "/pcb",                                  // GET
    "wires": "/wires",                              // GET
    "diodes": "/diodes",                            // GET
    "caps": "/caps",                                // GET
    "mainPageProducts":"/mainProductPage",          // GET
    "verify": "/verify/",                           // GET (link)
    "forgotPassword": "/forgotPassword",            // GET 
    "forgotPasswordLink": "/forgotPassword/",       // POST (link)
    "signup": "/signup",                            // POST 
    "cart": "/cart",                                // GET 
    "checkout": "/checkout",                        // POST 
    "confirmationCode": "/confirmationCode/",       // POST (code)
    "add": "/add/",                                 // GET (productId)
    "remove": "/remove/",                           // GET (productId)
    "product": "/product/",                         // GET (productId) Ex: 8bd5670b42c28007f495235a79910bf8
    "removeAll": "/removeAll/"                      // GET - removes all products from cart by productId: 8bd5670b42c28007f495235a79910bf8


    //"categories": "/dummyData/categories.json",
    //"items": "/dummyData/items.json",
    //"cart": "/dummyData/cartItems.json"

};

// Reference: https://github.com/audstanley/techsalesdev-go/blob/main/main.go

export default endpoints;