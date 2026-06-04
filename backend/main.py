from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


ITEMS = [
  {
    "id": 6,
    "name": "Adjustable Desk Lamp",
    "category": "Furniture",
    "price": 27.99,
    "image":
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    "description":
      "Adjustable desk lamp with multiple brightness modes and USB charging.",
  },
  {
    "id": 7,
    "name": "Wool Merino Beanie",
    "category": "Apparel",
    "price": 19.0,
    "image":
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=1200&auto=format&fit=crop",
    "description": "Warm merino wool beanie with breathable ribbed knit.",
  },
  {
    "id": 8,
    "name": "Bamboo Cutting Board",
    "category": "Kitchen",
    "price": 24.5,
    "image":
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop",
    "description": "Large antimicrobial bamboo cutting board with juice groove.",
  },
  {
    "id": 9,
    "name": "Wireless Charger Pad",
    "category": "Electronics",
    "price": 18.0,
    "image":
      "https://images.unsplash.com/photo-1585338447937-7082f8fc763d?q=80&w=1200&auto=format&fit=crop",
    "description": "Slim Qi-compatible wireless charging pad with fast charging.",
  },
  {
    "id": 10,
    "name": "Stainless Water Bottle",
    "category": "Outdoors",
    "price": 29.99,
    "image":
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=1200&auto=format&fit=crop",
    "description":
      "Vacuum insulated stainless steel bottle for hot and cold drinks.",
  },
  {
    "id": 11,
    "name": "Canvas Tote Bag",
    "category": "Apparel",
    "price": 14.0,
    "image":
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    "description": "Heavy-duty canvas tote bag with reinforced handles.",
  },
  {
    "id": 12,
    "name": "Adjustable Dumbbell 20kg",
    "category": "Fitness",
    "price": 79.0,
    "image":
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
    "description": "Compact adjustable dumbbell replacing multiple weights.",
  },
]


class Product(BaseModel):
    id:int
    name:str
    category:str
    price:float
    image:str
    description:str



class cartItem(BaseModel):
    product:Product
    qty:int

class Order(BaseModel):
    OrderItems:list[cartItem]
    Orderid:int




app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],)


Products=[Product(**item) for item in ITEMS]
categories=list(set(p.category for p in Products))
cart=[]
Orders=[]



@app.get('/Products')
def get_Products():
    return Products
    
@app.get('/Products/{id}')
def get_Product(id:int):
    pro=next((p for p in Products if p.id==id),None)
    if pro!=None:
        return pro
    return {"message":"Product not found!"}

@app.post('/Products')
def add_Products(Products_ls: list[Product]):
    existing_ids=list(product.id for product in Products)
    for p in Products_ls:
        if not p.id in existing_ids:
            Products.append(p)
        else:
            return{"message": f"Duplicate id- {p.id} already exists"}
        

    
    return {"message":"Products added successfully"}

@app.put('/Products/{id}')
def update_Product(id:int,Product:Product):
    global Products
    Products=list(filter(lambda x:x.id!=id,Products))
    Products.append(Product)
    return {"message":"Product info updated"}

@app.delete('/Products/{id}')
def del_Product(id:int):
    global Products
    Products=list(filter(lambda x:x.id!=id,Products))
    return {"message":"Product deleted"}

@app.get('/categories')
def get_categories():
    return categories

@app.post('/categories')
def post_categories(catls: list[str]):
    global categories
    categories.extend(catls)
    categories = set(categories)
    return {"message":"added categorie(s)"}

@app.get('/cart')
def get_cartitems():
    return cart

@app.post('/cart/add/{id}')
def add_to_cart(id:int):
    pro=next((p for p in Products if p.id==id),None)
    if(pro==None):
        return {"message":"Product not found!"}

    pro_incart=next((p for p in cart if p.product.id==id),None)
    if(pro_incart):
        pro_incart.qty+=1
    else:
        cart.append(cartItem(product=pro,qty=1))
    return {"message":"Item added to cart"}

@app.post('/cart/sub/{id}')
def sub_from_cart(id:int):
    global cart
    pro=next((p for p in Products if p.id==id),None)
    if(pro==None):
        return {"message":"Product not found!"}

    pro_incart=next((p for p in cart if p.product.id==id),None)
    if(pro_incart.qty>1):
        pro_incart.qty-=1
    else:
        cart=list(filter(lambda x: x.product.id!=id,cart))
    return {"message":"Item removed from cart"}


@app.delete('/cart/remove/{id}')
def delete_from_cart(id:int):
    global cart
    cart=list(filter(lambda x: x.product.id!=id,cart))
    return {"message":"Item deleted from the cart"}

@app.post('/Orders')
def post_Orders(items: Order):
    existing_ids=list(order.Orderid for order in Orders)
    
    if not items.Orderid in existing_ids:
        Orders.append(items)
        return {"message":"Order(s) added to Orderlist"}
    else:
        return {"message":f"Order with orderid {items.Orderid} already exists.Change the orderid"}
    


@app.get('/Orders')
def get_Orders():
    return Orders

@app.get('/Orders/{id}')
def get_Order(id:int):
    Order=next((Order for Order in Orders if Order.Orderid==id),None)
    if(Order==None):
        return {"message":"Order not found"}
    return Order


    
    