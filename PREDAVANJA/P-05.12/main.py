from fastapi import FastAPI, HTTPException
from models import Item

app = FastAPI()

items = []

# Home
@app.get("/")
def read_root():
    return{"Hello": "World"}

# POST
@app.post("/items/")
def create_item(item: Item):
    items.append(item)
    return item

# GET
@app.get("/items/")
def read_all_items():
    return items

@app.get("/items/(item_id)")
def read_item(item_id: int):
    for item in items:
        if item.id == item_id:
            return item
    raise HTTPException(status_code=404, detail="Item not found")

# PUT
@app.put("/items/(item_id)")
def update_item(item_id: int, item: Item):
    for idx, existing_item in enumerate(items):
        if existing_item.id==item_id:
            items[idx]=item
            return item
    raise HTTPException(status_code=404, detail="Item not found")

# DEL
@app.delete("/items/(item_id)")
def delete_item(item_id: int):
    for idx, existing_item in enumerate(items):
        if existing_item.id==item_id:
            del items[idx]
            return {"message": "Item deleted"}
    raise HTTPException(status_code=404, detail="Item not found")

